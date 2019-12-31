var dButton = document.getElementById("button");
var extensionID = "hcdpgiihgbigdnncnioigechmkigbmfh"; //記得換


//點擊按鈕，向擴充功能A發動訊息
dButton.addEventListener('click', function(e) {
    const nameElement = document.getElementById("in");

    const inputVal = nameElement.value || '';

    chrome.runtime.sendMessage(
        extensionID, 
        { name: "切換頁面按鈕", in: inputVal },
        function(response) {
            console.log(response); // "來自擴充功能的訊息：操作完成"
        });

});



