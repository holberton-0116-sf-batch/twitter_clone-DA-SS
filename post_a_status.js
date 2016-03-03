document.addEventListener("DOMContentLoaded", function () {
    var el = document.getElementById('poststatus');
    el.onclick = function () {
        /*  document.getElementById('poststatus').style.visibility='hidden';*/
        document.getElementById('postform').style.display = 'flex';
    };
}, false);