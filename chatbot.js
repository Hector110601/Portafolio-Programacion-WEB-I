window.addEventListener("load", function() {
    var script = document.createElement("script");
    script.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = function() {
        var myLandbot = new Landbot.Livechat({
            configUrl: "https://storage.googleapis.com/landbot.online/v3/H-2928154-N04NPG7Q7ZQ6YIK7/index.json"
        });
    };
});