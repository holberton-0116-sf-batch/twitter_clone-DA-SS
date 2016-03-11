document.addEventListener("DOMContentLoaded", function() {
  /**
   * Moves the map to display over HolbertonSchool
   *
   * @param  {H.Map} map      A HERE Map instance within the application
   */
  function moveMapToSchool(map) {
    map.setCenter({
      lat: 37.792085,
      lng: -122.399368
    });
    map.setZoom(16);
  }

  /**
   * Boilerplate map initialization code starts below:
   */

  //Step 1: initialize communication with the platform
  var platform = new H.service.Platform({
    app_id: 'AbDRPrtqHGluCPCcU2cu',
    app_code: 'AWWknaLJDQz8Ra0mcLdeJQ',
    useCIT: true,
    useHTTPS: true
  });
  var defaultLayers = platform.createDefaultLayers();

  //Step 2: initialize a map  - not specificing a location will give a whole world view.
  var map = new H.Map(document.getElementById('map'),
    defaultLayers.normal.map);

  //Step 3: make the map interactive
  // MapEvents enables the event system
  // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
  var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

  // Create the default UI components
  var ui = H.ui.UI.createDefault(map, defaultLayers);

  ui.addControl('zoomrectangle', new H.ui.ZoomRectangle({
    alignment: 'right-middle'
  }));

  // Add  context menu item
  map.addEventListener('contextmenu', function(e) {
    //Extract the screen coordinates {x, y} from the "contextmenu" event
    //Convert the screen coordinates {x, y} to geographical coordinates {latitude, longitude}
    var coord = map.screenToGeo(e.viewportX, e.viewportY);

    var x = coord.lat + "," + coord.lng + ",150";
    var reverseGeocodingParameters = {
      prox: x,
      mode: 'retrieveAddress',
      maxresults: 1
    };

    // Send the RGC request over.
    geocoder.reverseGeocode(reverseGeocodingParameters,
      function(result) {
        onRGCResult(result, e);
        e.stopPropagation();
      },
      function(e) {
        console.log(e);
      });

  });

  // Get an instance of the geocoding service:
  var geocoder = platform.getGeocodingService();

  /**
   * Processes reverse geocoder response and
   * adds a context menu item showing the associated address.
   */
  function onRGCResult(result, contextMenuEvent) {
    var addressLabel = result.Response.View[0].Result[0].Location.Address.Label;

    if (contextMenuEvent.items.length == 0) {
      contextMenuEvent.items.push(new H.util.ContextItem({
        label: addressLabel
      }));
    }
    contextMenuEvent.currentTarget.dispatchEvent(contextMenuEvent);
  }

  // Now use the map as required...
  moveMapToSchool(map);
}, false);

// Add window resize listener to adjust the map dimensions.
window.addEventListener('resize', function() {
  map.getViewPort().resize();
});
