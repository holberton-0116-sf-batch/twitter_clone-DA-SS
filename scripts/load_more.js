document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('showmoreButton').addEventListener('click', function loadDoc() {
        ajaxGet('/statuses-1.html', function showMoreResponses(response) {
            var a = document.getElementById("showmore");
            a.style.display = 'none';
            document.getElementById("morestatuses").innerHTML = response;
            var elements = document.querySelectorAll('.replyAll');

            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                element.onclick = function () {
                    var form = document.getElementById(this.dataset.replyindex);
                    form.toggle();
                };
            }
        });
    });
});