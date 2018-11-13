# Class

## `GmapManager`

Google maps layer manager

### `constructor(divId:: any, options:: object)`

### `divId: *`

### `options: *`

### `map: *`

### `_baseLayer: *`

### `layers: *`

### `createMap()`

Create and configure a new instance of a map

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `addLayer(id:: any)`

create a new base layer

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id: | any |  | layer id |

### `getLayer(id:: any)`

get a base layer by id

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id: | any |  | layer id |

### `removeLayer(id:: any)`

remove a base layer by id

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id: | any |  | layer id |

### `getAreaCenter()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `colorHexToRgb()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `colorRgbToHex()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `colorLightUp()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `colorRandom()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `Layer`

Layer is a google maps "features" container, like Makers, Polygons and Polylines. Also, Layer can contain other sub-Layers

### `constructor(map: google.maps.map, id: any)`

### `map: *`

### `id: *`

### `layers: *`

### `markers: *`

### `polygons: *`

### `polylines: *`

### `heatmap: *`

### `clusters: *`

### `clear()`

Erase all things on that layer

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `setVisible(visible: boolean)`

Hide / show layer

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| visible | boolean |  | : visibility of layer |

### `createHeatmap(options: object)`

create a heatmap using layer's markers

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| options | object |  | : original google maps Heatman options |

### `setVisibleHeatmap(visible: boolean)`

hide / show created heatmap

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| visible | boolean |  | : heatmap visibility |

### `clearHeatmap()`

remove created heatmap

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `createClusters(options: object)`

Create a cluster layer: "manage per-zoom-level clusters for large amounts of markers" (https://github.com/googlemaps/js-marker-clusterer)

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| options | object |  | : original MarkerClusterer options |

### `setVisibleClusters(visible: boolean)`

hide / show created clusters

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| visible | boolean |  | : clusters visibility |

### `clearClusters()`

remove created clusters

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `loadKmlOriginal(src: string)`

create an original KML Layer

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| src | string |  | : kml file url |

### `loadKml(src: string)`

fill the layer with kml features (Point->makers, Polygon->polygon, LineString-> Polyline)

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| src | string |  | : kml file src |

### `exportGeoJson()`

Create a GeoJson object from layer features (The GeoJSON Specification (RFC 7946))

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `exportKml()`

Create a KML definition from layer features

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `exportKmlFile(filename: string)`

Create a KML file from layer features

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| filename | string |  | : filename of the exported file |

### `addLayer(id: any)`

add a sub layer

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | any |  | : layer id |

### `getLayer(id: any)`

get a layer by id

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | any |  | : layer id |

### `removeLayer(id: any)`

remove a layer by id

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | any |  | : layer id |

### `setVisibleLayers(visible: boolean)`

set all layers array visibility

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| visible | boolean |  | : layers array visibility |

### `clearLayers()`

clear all sub-layers

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `addMarker(id: any, options: object)`

Add a google.maps.Marker to the markers array

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | any |  | : marker id |
| options | object |  | : original google.maps.Marker options |

### `getMarker(id: any)`

get a marker by id

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | any |  | : marker id |

### `removeMarker(id: any)`

remove a marker by id

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | any |  | : marker id |

### `clearMarkers()`

clear all layer's markers

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `setVisibleMarkers(visible: boolean)`

set all markers array visibility

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| visible | boolean |  | : markers visibility |

### `addPolygon(id: any, options: object)`

Add a google.maps.Polygon to the polygons array

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | any |  | : polygon id |
| options | object |  | : original google.maps.Polygon options |

### `getPolygon(id: any)`

get a polygon by id

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | any |  | : polygon id |

### `removePolygon(id: any)`

remove a polygon by id

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | any |  | : polygon id |

### `setVisiblePolygons(visible: boolean)`

set all polygons visibility

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| visible | boolean |  | : polygons visibility |

### `clearPolygons()`

clear all polygons from the layer

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `addPolyline(id: any, options: object)`

Add a google.maps.Polylines to the polyliness array

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | any |  | : polylines id |
| options | object |  | : original google.maps.Polylines options |

### `getPolyline(id: any)`

get a polylines by id

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| id | any |  | : polylines id |

### `removePolyline(visible: boolean)`

set all polyliness visibility

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| visible | boolean |  | : polyliness visibility |

### `setVisiblePolylines(visible: boolean)`

set all polyliness visibility

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| visible | boolean |  | : polyliness visibility |

### `clearPolylines()`

clear all polyliness from the layer

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

# Function

## `MarkerClusterer(map: google.maps.Map, opt_markers: Array.<google.maps.Marker>=, opt_options: Object=)`

A Marker Clusterer that clusters markers.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| map | google.maps.Map |  | The Google map to attach to. |
| opt_markers | Array.<google.maps.Marker>= |  | Optional markers to add to the cluster. |
| opt_options | Object= |  | support the following options: 'gridSize': (number) The grid size of a cluster in pixels. 'maxZoom': (number) The maximum zoom level that a marker can be part of a cluster. 'zoomOnClick': (boolean) Whether the default behaviour of clicking on a cluster is to zoom into it. 'averageCenter': (boolean) Whether the center of each cluster should be the average of all markers in the cluster. 'minimumClusterSize': (number) The minimum number of markers to be in a cluster before the markers are hidden and a count is shown. 'styles': (object) An object that has style properties: 'url': (string) The image url. 'height': (number) The image height. 'width': (number) The image width. 'anchor': (Array) The anchor position of the label text. 'textColor': (string) The text color. 'textSize': (number) The text size. 'backgroundPosition': (string) The position of the backgound x, y. |

## `extend(obj1: Object, obj2: Object): Object`

Extends a objects prototype by anothers.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| obj1 | Object |  | The object to be extended. |
| obj2 | Object |  | The object to extend with. |

## `onAdd()`

Implementaion of the interface method.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `draw()`

Implementaion of the interface method.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `setupStyles_()`

Sets up the styles object.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `fitMapToMarkers()`

Fit the map to the bounds of the markers in the clusterer.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `setStyles(styles: Object)`

Sets the styles.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| styles | Object |  | The style to set. |

## `getStyles(): Object`

Gets the styles.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `isZoomOnClick(): boolean`

Whether zoom on click is set.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `isAverageCenter(): boolean`

Whether average center is set.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `getMarkers(): Array.<google.maps.Marker>`

Returns the array of markers in the clusterer.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `getTotalMarkers(): Number`

Returns the number of markers in the clusterer

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `setMaxZoom(maxZoom: number)`

Sets the max zoom for the clusterer.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| maxZoom | number |  | The max zoom level. |

## `getMaxZoom(): number`

Gets the max zoom for the clusterer.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `calculator_(markers: Array.<google.maps.Marker>, numStyles: number): Object`

The function for calculating the cluster icon image.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| markers | Array.<google.maps.Marker> |  | The markers in the clusterer. |
| numStyles | number |  | The number of styles available. |

## `setCalculator(calculator: function(Array, number))`

Set the calculator function.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| calculator | function(Array, number) |  | The function to set as the calculator. The function should return a object properties: 'text' (string) and 'index' (number). |

## `getCalculator(): function(Array, number)`

Get the calculator function.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `addMarkers(markers: Array.<google.maps.Marker>, opt_nodraw: boolean=)`

Add an array of markers to the clusterer.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| markers | Array.<google.maps.Marker> |  | The markers to add. |
| opt_nodraw | boolean= |  | Whether to redraw the clusters. |

## `pushMarkerTo_(marker: google.maps.Marker)`

Pushes a marker to the clusterer.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| marker | google.maps.Marker |  | The marker to add. |

## `addMarker(marker: google.maps.Marker, opt_nodraw: boolean=)`

Adds a marker to the clusterer and redraws if needed.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| marker | google.maps.Marker |  | The marker to add. |
| opt_nodraw | boolean= |  | Whether to redraw the clusters. |

## `removeMarker_(marker: google.maps.Marker): boolean`

Removes a marker and returns true if removed, false if not

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| marker | google.maps.Marker |  | The marker to remove |

## `removeMarker(marker: google.maps.Marker, opt_nodraw: boolean=): boolean`

Remove a marker from the cluster.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| marker | google.maps.Marker |  | The marker to remove. |
| opt_nodraw | boolean= |  | Optional boolean to force no redraw. |

## `removeMarkers(markers: Array.<google.maps.Marker>, opt_nodraw: boolean=)`

Removes an array of markers from the cluster.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| markers | Array.<google.maps.Marker> |  | The markers to remove. |
| opt_nodraw | boolean= |  | Optional boolean to force no redraw. |

## `setReady_(ready: boolean)`

Sets the clusterer's ready state.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| ready | boolean |  | The state. |

## `getTotalClusters(): number`

Returns the number of clusters in the clusterer.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `getMap(): google.maps.Map`

Returns the google map that the clusterer is associated with.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `setMap(map: google.maps.Map)`

Sets the google map that the clusterer is associated with.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| map | google.maps.Map |  | The map. |

## `getGridSize(): number`

Returns the size of the grid.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `setGridSize(size: number)`

Sets the size of the grid.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| size | number |  | The grid size. |

## `getMinClusterSize(): number`

Returns the min cluster size.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `setMinClusterSize(size: number)`

Sets the min cluster size.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| size | number |  | The grid size. |

## `getExtendedBounds(bounds: google.maps.LatLngBounds): google.maps.LatLngBounds`

Extends a bounds object by the grid size.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| bounds | google.maps.LatLngBounds |  | The bounds to extend. |

## `isMarkerInBounds_(marker: google.maps.Marker, bounds: google.maps.LatLngBounds): boolean`

Determins if a marker is contained in a bounds.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| marker | google.maps.Marker |  | The marker to check. |
| bounds | google.maps.LatLngBounds |  | The bounds to check against. |

## `clearMarkers()`

Clears all clusters and markers from the clusterer.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `resetViewport(opt_hide: boolean)`

Clears all existing clusters and recreates them.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| opt_hide | boolean |  | To also hide the marker. |

## `repaint()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `redraw()`

Redraws the clusters.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `distanceBetweenPoints_(p1: google.maps.LatLng, p2: google.maps.LatLng): number`

Calculates the distance between two latlng locations in km.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| p1 | google.maps.LatLng |  | The first lat lng point. |
| p2 | google.maps.LatLng |  | The second lat lng point. |

## `addToClosestCluster_(marker: google.maps.Marker)`

Add a marker to a cluster, or creates a new cluster.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| marker | google.maps.Marker |  | The marker to add. |

## `createClusters_()`

Creates the clusters.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `Cluster(markerClusterer: MarkerClusterer)`

A cluster that contains markers.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| markerClusterer | MarkerClusterer |  | The markerclusterer that this cluster is associated with. |

## `isMarkerAlreadyAdded(marker: google.maps.Marker): boolean`

Determins if a marker is already added to the cluster.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| marker | google.maps.Marker |  | The marker to check. |

## `addMarker(marker: google.maps.Marker): boolean`

Add a marker the cluster.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| marker | google.maps.Marker |  | The marker to add. |

## `getMarkerClusterer(): MarkerClusterer`

Returns the marker clusterer that the cluster is associated with.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `getBounds(): google.maps.LatLngBounds`

Returns the bounds of the cluster.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `remove()`

Removes the cluster

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `getSize(): number`

Returns the center of the cluster.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `getMarkers(): Array.<google.maps.Marker>`

Returns the center of the cluster.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `getCenter(): google.maps.LatLng`

Returns the center of the cluster.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `calculateBounds_()`

Calculated the extended bounds of the cluster with the grid.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `isMarkerInClusterBounds(marker: google.maps.Marker): boolean`

Determines if a marker lies in the clusters bounds.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| marker | google.maps.Marker |  | The marker to check. |

## `getMap(): google.maps.Map`

Returns the map that the cluster is associated with.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `updateIcon()`

Updates the cluster icon

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `ClusterIcon(cluster: Cluster, styles: Object, opt_padding: number=)`

A cluster icon

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| cluster | Cluster |  | The cluster to be associated with. |
| styles | Object |  | An object that has style properties: 'url': (string) The image url. 'height': (number) The image height. 'width': (number) The image width. 'anchor': (Array) The anchor position of the label text. 'textColor': (string) The text color. 'textSize': (number) The text size. 'backgroundPosition: (string) The background postition x, y. |
| opt_padding | number= |  | Optional padding to apply to the cluster icon. |

## `triggerClusterClick()`

Triggers the clusterclick event and zoom's if the option is set.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `onAdd()`

Adding the cluster icon to the dom.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `getPosFromLatLng_(latlng: google.maps.LatLng): google.maps.Point`

Returns the position to place the div dending on the latlng.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| latlng | google.maps.LatLng |  | The position in latlng. |

## `draw()`

Draw the icon.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `hide()`

Hide the icon.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `show()`

Position and show the icon.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `remove()`

Remove the icon from the map

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `onRemove()`

Implementation of the onRemove interface.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `setSums(sums: Object)`

Set the sums of the icon.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| sums | Object |  | The sums containing: 'text': (string) The text to display in the icon. 'index': (number) The style index of the icon. |

## `useStyle()`

Sets the icon to the the styles.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `setCenter(center: google.maps.LatLng)`

Sets the center of the icon.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| center | google.maps.LatLng |  | The latlng to set as the center. |

## `createCss(pos: google.maps.Point): string`

Create the css text based on the position of the icon.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| pos | google.maps.Point |  | The position. |