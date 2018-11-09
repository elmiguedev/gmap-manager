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
    this.clearLayers();
  }

  setVisible(visible) {
    this.setVisibleMarkers(visible);
    this.setVisiblePolygons(visible);
    this.setVisiblePolylines(visible);
    this.setVisibleLayers(visible);

    this.setVisibleHeatmap(visible);
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
    const polygon = new google.maps.Polygon(options);

    // custom properties: events
    if (options["events"] != null) {
      for (var name in options["events"]) {
        google.maps.event.addListener(polygon, name, options["events"][name]);
      }
    }

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
