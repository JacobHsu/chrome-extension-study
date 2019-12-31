var toggle = false;
//可以列出禁止防問的黑名單網址
var blockList = [];

chrome.runtime.onMessageExternal.addListener(function(message, sender, sendResponse) {
    console.log(sender);

    //如果訪問在黑名單，就不作任何動作
    if (blockList.indexOf(sender.url) != -1) {
        return;
    }

    if (message.name != "切換頁面按鈕") {
        return;
    }

    // 長時間訊息的接受 runtime.onConnect
    chrome.runtime.onConnect.addListener(function(port) {
        console.assert(port.name == "longlived");
        port.postMessage({question: message.name, in: message.in});
    });

    //var myWindow = window.open("popup.html", "CIC Notification", "width=400,height=600,status=no,scrollbars=no,resizable=no");

    const NOTIFICATION_HEIGHT = 620
    const NOTIFICATION_WIDTH = 360
      chrome.windows.create({
        // Just use the full URL if you need to open an external page
        url: 'popup.html',//chrome.runtime.getURL("popup.html"),
        type: 'popup',
        width: NOTIFICATION_WIDTH,
        height: NOTIFICATION_HEIGHT,    
      });

    //如果按鈕是啟用的狀態則開，否則關
    if (!toggle) {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.pageAction.show(tabs[0].id);
            toggle = !toggle;
        });
    } else {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.pageAction.hide(tabs[0].id);
            toggle = !toggle;

        });
    }

    sendResponse("來自擴充功能的訊息：操作完成");

});
