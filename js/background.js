chrome.commands.onCommand.addListener(function(command) {
    if (command == 'play') {
        tabDo(function(tab){
            var site = localStorage["site"];
            var action;
            switch (site) {
                case "163":
                      action= '.ply';
                      break;
                case "qq":
                      action = '#btnplay';
                      break;
                case "baidu":
                      action = '.play';
                      break;
            }
            chrome.tabs.sendMessage(tab, action);
        });
    }
});
