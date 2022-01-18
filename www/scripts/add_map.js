require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Expand",
], (Map, MapView, FeatureLayer, Graphic, GraphicsLayer, BasemapGallery, Expand) => {


    const map1 = new Map({
        basemap: "topo-vector"
    });

    const view = new MapView({
        map: map1,
        container: "mapDiv",
        center:[-100.4593, 36.9014],
        zoom:15
    });

    // Warstwy
    const gl = new GraphicsLayer();

    const fl = new FeatureLayer({
        url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer/1"
    });

    map1.add(fl);
    map1.add(gl);

    // Grafiki

    const geom = {
        type: "polyline",
        paths: [[-96.06326,33.759],[-97.06298,32.755]]
    };

    const sym = {
        type:"simple-line",
        color: "blue",
        width: 2,
        style: "dash"
    };

    const attr = {
        country: "Polska",
        code: "POL"
    };

    const popTmpl = {
        title: "Obiekt Web-GIS",
        content: "Zaznaczony obiekt pochodzi z kraju {country}"
    }

    const graph = new Graphic({
        geometry: geom,
        symbol: sym,
        attributes: attr,
        popupTemplate: popTmpl
    });

    gl.add(graph);

    // Widgety

    const bmWg = new BasemapGallery({
        view: view
    });

    const expandWg = new Expand({
        view: view,
        content: bmWg
    });

    view.ui.add(expandWg, {
        position: "top-right"
    });
});