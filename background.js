// chrome.runtime.onInstalled.addListener(function() {
//         chrome.contextMenus.create({"title": "Menu item 1", "id": "parent"});
//         chrome.contextMenus.create({"title": "Menu item 2", "id": "parent2"});
//         chrome.contextMenus.create({"title": "Menu item 1a", "parentId": "parent", "id": "child1"});
//         chrome.contextMenus.create({"title": "Menu item 1b", "parentId": "parent", "id": "child2"});
// });
 
chrome.contextMenus.onClicked.addListener(onClickHandler);
 
function onClickHandler(info, tab) {
        alert(info.menuItemId);
};


chrome.runtime.onInstalled.addListener(
function powieksz_tekst() {
	var e = document.getElementsByClassName("screening");
		e.style.display = none;
});
