console.log("內容腳本注入");

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log('[in content.js', message);
    //console.log(sender); //chrome console can see
    //sendResponse({ content: "來自內容腳本的回覆" });
});



