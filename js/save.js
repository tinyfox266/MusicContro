// Saves options to localStorage.
    var select = document.getElementById("site");
$('#save').click(save_options);
function save_options() {
    var select = document.getElementById("site");
    var site = select.children[select.selectedIndex].value;
    localStorage["site"] = site;

}
// Restores select box state to saved value from localStorage.
function restore_options() {
    var site = localStorage["site"];
    if (!site) {
        return;
    }
    var select = document.getElementById("site");
    for (var i = 0; i < select.children.length; i++) {
        var child = select.children[i];
        if (child.value == site) {
            child.selected = "true";
            break;
        }
    }
}
