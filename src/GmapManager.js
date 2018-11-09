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
        this.options.center = options.center || {lat: -31.4138261, lng: -64.2008924};
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
        this.map = new google.maps.Map(document.getElementById(this.divId),this.options);
        
        // creates default layer
        this._baseLayer = new Layer(this.map, '__baseLayer');
        this.layers = this._baseLayer.layers;

        // custom properties: events
        if (this.options['events'] != null) {
            for (var name in this.options['events']) {
                this.map.addListener(name, this.options['events'][name]);
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

}