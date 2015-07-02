function tabDo(callback){
  chrome.tabs.query({url: 'http://ssg.ustcsz.edu.cn/~zzp/music/'}, function(tabs) {
      if(tabs.length === 0){
        chrome.tabs.create({'url': "http://ssg.ustcsz.edu.cn/~zzp/music/", 'pinned': true});
        return true;
      }
      var tab = tabs[0].id;
      callback(tab);
      });
};
