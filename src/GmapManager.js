import Layer from "./Layer";

/**
 * Google maps layer manager
 */
export default class GmapManager {
  // constructor
  // --------------------------

  /**
   * @constructor
   * @param {any} divId: DOM div ID
   * @param {object} options: classic options of google maps instances
   */
  constructor(divId, options) {
    this.divId = divId;
    this.options = options;

    // default properties
    this.options.center = options.center || {
      lat: -31.4138261,
      lng: -64.2008924
    };
    this.options.zoom = options.zoom || 13;

    // init map
    this.createMap();
  }

  // methods
  // --------------------------

  /**
   * Create and configure a new instance of a map
   */
  createMap() {
    // creates map instance
    this.map = new google.maps.Map(
      document.getElementById(this.divId),
      this.options
    );

    // creates default layer
    this._baseLayer = new Layer(this.map, "__baseLayer");
    this.layers = this._baseLayer.layers;

    // custom properties: events
    if (this.options["events"] != null) {
      for (var name in this.options["events"]) {
        this.map.addListener(name, this.options["events"][name]);
      }
    }
  }

  /**
   * create a new base layer
   * @param {any} id: layer id
   */
  addLayer(id) {
    return this._baseLayer.addLayer(id);
  }

  /**
   * get a base layer by id
   * @param {any} id: layer id
   */
  getLayer(id) {
    return this._baseLayer.getLayer(id);
  }

  /**
   * remove a base layer by id
   * @param {any} id: layer id
   */
  removeLayer(id) {
    return this._baseLayer.removeLayer(id);
  }

  // STATIC METHDOS
  // --------------------------

  static getAreaCenter(areaArray) {
    var bounds = new google.maps.LatLngBounds();
    for (const l of areaArray) bounds.extend(l);
    const center = bounds.getCenter();
    return center;
  }

  static colorHexToRgb(hex) {
    var res = hex.match(/[a-f0-9]{2}/gi);
    return res && res.length === 3
      ? res.map(function(v) {
          return parseInt(v, 16);
        })
      : null;
  }

  static colorRgbToHex(red, green, blue) {
    var rgb = blue | (green << 8) | (red << 16);
    return "#" + (0x1000000 + rgb).toString(16).slice(1);
  }

  static colorLightUp(color) {
    let c = GmapManager.colorHexToRgb(color);
    c[0] = c[0] < 225 ? c[0] + 30 : 255;
    c[1] = c[1] < 225 ? c[1] + 30 : 255;
    c[2] = c[2] < 225 ? c[2] + 30 : 255;
    return GmapManager.colorRgbToHex(c[0],c[1],c[2]);
  }

  static colorRandom() {
    return (
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    );
  }
}
