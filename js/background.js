localStorage["site"] ="163";
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
    } else if (command == 'next') {
        tabDo(function(tab){
            var site = localStorage["site"];
            var action;
            switch (site) {
                case "163":
                      action= '.nxt';
                      break;
                case "qq":
                      action = '.next_bt';
                      break;
                case "baidu":
                      action = '.next';
                      break;
            }
            chrome.tabs.sendMessage(tab, action);
        });

    } else if (command == 'prev') {
        tabDo(function(tab){
            var site = localStorage["site"];
            var action;
            switch (site) {
                case "163":
                      action= '.prv';
                      break;
                case "qq":
                      action = '.prev_bt';
                      break;
                case "baidu":
                      action = '.prev';
                      break;
            }
            chrome.tabs.sendMessage(tab, action);
        });
    }
});
