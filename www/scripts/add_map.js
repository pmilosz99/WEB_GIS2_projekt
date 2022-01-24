require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/BasemapGallery",
    "esri/widgets/LayerList",
    "esri/widgets/Legend",
    "esri/widgets/Measurement",
    "esri/widgets/Search",
    "esri/widgets/Expand",
], (Map, MapView, FeatureLayer, BasemapGallery, LayerList, Legend, Measurement, Search, Expand) => {

    // add map

    const map1 = new Map({
        basemap: "streets-vector"
    });

    const view = new MapView({
        map: map1,
        container: "mapDiv",
        center:[21.009512, 52.235382],
        zoom:13
    });

    // grafic links (zoom to district)

    document.getElementById("zoliborz").addEventListener("click", function() {
        view.goTo({
            center: [20.975249, 52.265770],
            zoom: 15
        });
    });

    document.getElementById("srodmiescie").addEventListener("click", function() {
        view.goTo({
            center: [21.009512, 52.235382],
            zoom: 15
        });
    });

    document.getElementById("mokotow").addEventListener("click", function() {
        view.goTo({
            center: [21.008178, 52.195381],
            zoom: 15
        });
    });

    document.getElementById("wola").addEventListener("click", function() {
        view.goTo({
            center: [20.970851, 52.240052],
            zoom: 15
        });
    });

    // Layers

    const fl = new FeatureLayer({
        url: "https://services.arcgis.com/hVsb2InA4op6ydG0/arcgis/rest/services/zabytki_wawa/FeatureServer"
    });

    map1.add(fl);

    // Popups

    const template = {
        title: "Informacje o obiekcie",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "name",
                        label: "Nazwa zabytku"

                    }
                ]
            }
        ]
    }

    fl.popupTemplate = template;

    // Widgets

    const bmWg = new BasemapGallery({
        view: view
    });

    const lyLi = new LayerList({
        view: view
    });

    const legend = new Legend({
        view: view
    });

    const meas = new Measurement({
        view: view
    });

    const search = new Search({
        view: view
    });

    // Expanding widgets

    const expandWg = new Expand({
        view: view,
        content: bmWg
    });

    const expandLyLi = new Expand({
        view: view,
        content: lyLi
    });

    const expandLegend = new Expand({
        view: view,
        content: legend
    });

    const expandMeas = new Expand({
        view: view,
        content: meas
    });

    const expandSearch = new Expand({
        view: view,
        content: search
    });

    view.ui.add([expandWg, expandLyLi, expandLegend, expandMeas, expandSearch], {
        position: "top-right"
    });
});