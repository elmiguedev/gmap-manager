import MarkerClusterer from "./plugins/markercluster.js";
import * as toGeoJSON from "@mapbox/togeojson";
import tokml from "tokml";
import GmapManager from "./GMapManager.js";

export default class Layer {
  // constructor
  // --------------------------
  constructor(map, id) {
    this.map = map;
    this.id = id;

    this.layers = [];
    this.markers = [];
    this.polygons = [];
    this.polylines = [];
  }

  // own methods
  // --------------------------
  clear() {
    this.clearMarkers();
    this.clearPolygons();
    this.clearPolylines();
    this.clearLayers();
  }

  setVisible(visible) {
    this.setVisibleMarkers(visible);
    this.setVisiblePolygons(visible);
    this.setVisiblePolylines(visible);
    this.setVisibleLayers(visible);

    this.setVisibleHeatmap(visible);
    this.setVisibleClusters(visible);
  }

  exportGeoJson() {
    // create base geojson
    let geojson = {
      type: "FeatureCollection",
      features: []
    };

    // add markers
    for (const m of this.markers) {
      geojson.features.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [m.getPosition().lng(), m.getPosition().lat(), 0]
        },
        properties: {
          name: m.id.toString(),
          description: m.infoWindowContent || ""
        }
      });
    }

    // add polygons
    for (const p of this.polygons) {
      geojson.features.push({
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            p
              .getPath()
              .getArray()
              .map(x => [x.lng(), x.lat(), 0])
          ]
        },
        properties: {
          name: p.id.toString(),
          description: p.infoWindowContent || ""
        }
      });
    }

    // add polylines
    for (const p of this.polylines) {
      geojson.features.push({
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            p
              .getPath()
              .getArray()
              .map(x => [x.lng(), x.lat(), 0])
          ]
        },
        properties: {
          name: p.id.toString(),
          description: p.infoWindowContent || ""
        }
      });
    }

    // return
    return geojson;
  }

  exportKml() {
    return tokml(this.exportGeoJson());
  }

  exportKmlFile(filename) {
    const data = this.exportKml();
    var file = new Blob([data],{type: 'kml'});
    if (window.navigator.msSaveOrOpenBlob)
      // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
    else {
      // Others
      var a = document.createElement("a"),
        url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  }

  // layers methods
  // --------------------------

  addLayer(id) {
    if (this.getLayer(id)) {
      throw new Error("layer alredy exists");
    }
    const layer = new Layer(this.map, id);
    this.layers.push(layer);
    return layer;
  }

  getLayer(id) {
    return this.layers.filter(x => x.id === id)[0];
  }

  removeLayer(id) {
    const index = this.layers.indexOf(this.getLayer(id));
    if (index) {
      return this.layers.splice(index, 1);
    }
  }

  setVisibleLayers(visible) {
    for (const layer of this.layers) {
      layer.setVisible(visible);
    }
  }

  clearLayers() {
    for (const layer of this.layers) {
      layers.clear();
    }
    this.layers = [];
  }

  // markers methods
  // --------------------------

  addMarker(id, options) {
    // error management
    if (id === Object(id)) {
      throw new Error("must set a marker id");
    }

    if (this.getMarker(id)) {
      throw new Error("marker id alredy exists");
    }

    // default properties
    options.map = this.map;
    options.id = id;
    const marker = new google.maps.Marker(options);

    // custom properties: events
    if (options["events"] != null) {
      for (var name in options["events"]) {
        google.maps.event.addListener(marker, name, options["events"][name]);
      }
    }

    // custom properties: info window
    if (options["infoWindowContent"] != null) {
      marker.infowindow = new google.maps.InfoWindow({
        content: options["infoWindowContent"]
      });

      marker.addListener("click", function() {
        this.infowindow.open(this.getMap(), this);
      });
    }

    // add to array
    this.markers.push(marker);
    return marker;
  }

  getMarker(id) {
    return this.markers.filter(x => x.id === id)[0];
  }

  removeMarker(id) {
    const index = this.markers.indexOf(this.getMarker(id));
    if (index) {
      return this.markers.splice(index, 1);
    }
  }

  clearMarkers() {
    for (const marker of this.markers) {
      marker.setMap(null);
    }
    this.markers = [];
  }

  setVisibleMarkers(visible) {
    if (!this.heatmap)
      for (const marker of this.markers) {
        marker.setVisible(visible);
      }
  }

  createHeatmap(options) {
    // destroy current heatmap
    if (this.heatmap) {
      this.heatmap.setMap(null);
      this.heatmap = null;
    }

    // hide all markers
    this.setVisibleMarkers(false);

    // set default values
    options.data = this.markers.map(x => x.position);
    options.map = this.map;

    // creates new heatmap
    this.heatmap = new google.maps.visualization.HeatmapLayer(options);
  }

  setVisibleHeatmap(visible) {
    if (this.heatmap) {
      if (visible) this.heatmap.setMap(this.map);
      else this.heatmap.setMap(null);
    }
  }

  createClusters(options) {
    // destroy current clusters
    if (this.clusters) {
      this.clusters.setMap(null);
      this.clusters = null;
    }

    // hide all markers
    //this.setVisibleMarkers(false);

    // set default values

    // creates new clusters
    this.clusters = new MarkerClusterer(this.map, this.markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
    });
  }

  setVisibleClusters(visible) {
    if (this.clusters) {
      if (visible) this.clusters.setMap(this.map);
      else this.clusters.setMap(null);
    }
  }

  loadKmlOriginal(src) {
    var kmlLayer = new google.maps.KmlLayer(src, {
      suppressInfoWindows: true,
      preserveViewport: false,
      map: this.map
    });
  }

  loadKml(src) {
    fetch(src)
      .then(res => res.text())
      .then(xml => {
        const dom = new DOMParser().parseFromString(xml, "text/xml");
        const geojson = toGeoJSON.kml(dom);
        console.log(geojson);

        if (geojson.features) {
          for (const f of geojson.features) {
            if (f.type === "Feature") {
              switch (f.geometry.type) {
                case "Point":
                  this.addMarker(geojson.features.indexOf(f), {
                    position: {
                      lat: f.geometry.coordinates[1],
                      lng: f.geometry.coordinates[0]
                    },
                    infoWindowContent: `
                      <b>${f.properties.name}</b><br>
                      ${f.properties.description}
                    `
                  });
                  break;

                case "Polygon":
                  this.addPolygon(geojson.features.indexOf(f), {
                    path: f.geometry.coordinates[0].map(x => {
                      return { lat: x[1], lng: x[0] };
                    }),
                    strokeColor: f.properties.stroke || "#FF0000",
                    strokeOpacity: f.properties.strokeOpacity || 0.8,
                    strokeWeight: f.properties.strokeWidth || 2,
                    fillColor: f.properties.fill || "#FF0000",
                    fillOpacity: f.properties.fillOpacity || 0.35,
                    infoWindowContent: f.properties.name
                  });
                  break;

                default:
                  break;
              }
            }
          }
        }
      });
  }

  // polygons methods
  // --------------------------

  addPolygon(id, options) {
    // error management
    if (!id) {
      throw new Error("must set a polygon id");
    }

    if (this.getPolygon(id)) {
      throw new Error("polygon id alredy exists");
    }

    // default properties
    options.map = this.map;
    options.id = id;
    options.center = GmapManager.getAreaCenter(options.path);
    options.baseColor = options.fillColor || GmapManager.colorRandom();
    const polygon = new google.maps.Polygon(options);

    // custom properties: events
    if (options["events"] != null) {
      for (var name in options["events"]) {
        google.maps.event.addListener(polygon, name, options["events"][name]);
      }
    }

    // custom properties: info window
    if (options["infoWindowContent"] != null) {
      polygon.infowindow = new google.maps.InfoWindow({
        content: options["infoWindowContent"]
      });

      polygon.addListener("click", function(e) {
        this.infowindow.setPosition(e.latLng);
        this.infowindow.open(this.getMap(), this);
      });
    }

    // custom properties: polygon highlight
    polygon.addListener("mouseover", function(e) {
      this.set("fillColor", GmapManager.colorLightUp(this.baseColor));
    });
    polygon.addListener("mouseout", function(e) {
      this.set("fillColor", this.baseColor);
    });

    // add to array
    this.polygons.push(polygon);
    return polygon;
  }

  getPolygon(id) {
    return this.polygons.filter(x => x.id === id)[0];
  }

  removePolygon(id) {
    const index = this.polygons.indexOf(this.getPolygon(id));
    if (index) {
      return this.polygons.splice(index, 1);
    }
  }

  setVisiblePolygons(visible) {
    for (const polygon of this.polygons) {
      polygon.setVisible(visible);
    }
  }

  clearPolygons() {
    for (const polygon of this.polygons) {
      polygon.setMap(null);
    }
    this.polygons = [];
  }

  // polylines methods
  // --------------------------

  addPolyline(id, options) {
    // error management
    if (!id) {
      throw new Error("must set a polyline id");
    }

    if (this.getPolyline(id)) {
      throw new Error("polyline id alredy exists");
    }

    // default properties
    options.map = this.map;
    options.id = id;
    const polyline = new google.maps.Polyline(options);

    // custom properties: events
    if (options["events"] != null) {
      for (var name in options["events"]) {
        google.maps.event.addListener(polyline, name, options["events"][name]);
      }
    }

    // add to array
    this.polylines.push(polyline);
    return polyline;
  }

  getPolyline(id) {
    return this.polylines.filter(x => x.id === id)[0];
  }

  removePolyline(id) {
    const index = this.polylines.indexOf(this.getPolyline(id));
    if (index) {
      return this.polylines.splice(index, 1);
    }
  }

  setVisiblePolylines(visible) {
    for (const polyline of this.polylines) {
      polyline.setVisible(visible);
    }
  }

  clearPolylines() {
    for (const polyline of this.polylines) {
      polyline.setMap(null);
    }
    this.polylines = [];
  }
}
