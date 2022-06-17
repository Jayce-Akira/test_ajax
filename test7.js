window.addEventListener('load', function(event) {
    document.body.addEventListener('click', function(event) {
        if (event.target.tagName == "A") {
            event.preventDefault();
            let req = new XMLHttpRequest();
            let url = event.target.href;
            req.open('GET', url, true);
            req.addEventListener('readystatechange', function(event) {
                if (req.readyState == 4 && req.status == "200") {
                    document.getElementById('article').innerHTML = req.responseText;
                }
            });
            req.send();
        }
    });
});