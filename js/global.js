function tabDo(callback){
    var site = localStorage["site"];
    var siteurl;
    switch (site) {
        case "163":
              siteurl = 'http://music.163.com/';
              break;
        case "qq":
              siteurl = 'http://y.qq.com/';
              break;
        case "baidu":
              siteurl = 'http://play.baidu.com/';
              break;
    }
    chrome.tabs.query({url: siteurl}, function(tabs) {
        if(tabs.length === 0){
            chrome.tabs.create({'url': siteurl, 'pinned': true});
            return true;
        }
        var tab = tabs[0].id;
        callback(tab);
    });
};
