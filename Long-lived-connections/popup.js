document.addEventListener('DOMContentLoaded', function(dcle) {
    var dButtonConnect1 = document.getElementById("button1");

    var port = chrome.runtime.connect({name: "knockknock"});

    port.onMessage.addListener(function(msg) {
        console.log('popup.js', msg)
        if (msg.question == "Who's there?")
          port.postMessage({answer: "Madame"});
        else if (msg.question == "Madame who?")
          port.postMessage({answer: "Madame... Bovary"});
    });

    dButtonConnect1.addEventListener('click', function(event) {
        port.postMessage({joke: "Knock knock"});
    });

});
