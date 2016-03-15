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
  // Add 'Zoom in' context menu item
map.addEventListener('contextmenu', function(e) {
  e.items.push(new H.util.ContextItem({
  label: 'Hello Holberton School!'
  }));
});
/*
  function onContextMenuRequested(e) {
    e.items.push(new H.util.ContextItem({
    setLabel('Hello');
    }));
  }

map.addEventListener('contextmenu', onContextMenuRequested);
*/
// Now use the map as required...
moveMapToSchool(map);
}, false);
// Add window resize listener to adjust the map dimensions.
window.addEventListener('resize', function() {
  map.getViewPort().resize();
});
