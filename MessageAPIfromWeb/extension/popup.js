document.addEventListener('DOMContentLoaded', function(dcle) {

    var port = chrome.runtime.connect({name: "longlived"});

    port.onMessage.addListener(function(msg) {
        console.log('popup.js', msg)
        document.querySelector('#string').innerText = "msg: " + msg.question
        document.querySelector('#in').innerText = "input msg: " + msg.in
    });

});


