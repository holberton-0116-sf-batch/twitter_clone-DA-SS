document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('showmoreButton').addEventListener('click', function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var a = document.getElementById("showmore");
                a.style.display = 'none';
                document.getElementById("morestatuses").innerHTML = xhttp.responseText;
                var elements = document.querySelectorAll('.replyAll');

                for (var i = 0; i < elements.length; i++) {
                    var element = elements[i];
                    element.onclick = function () {
                        var form = document.getElementById(this.dataset.replyindex);
                        form.toggle();
                    };
                }
            }
        };
        xhttp.open("GET", "/statuses-1.html", true);
        xhttp.send();
    });
});