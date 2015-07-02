chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
    $(message)[0].click();
});
