document.addEventListener("DOMContentLoaded", function () {
    var elements = document.querySelectorAll('.postform');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.toggle();
    }
    var elements = document.querySelectorAll('.replyform');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.toggle();
    }
}, false);