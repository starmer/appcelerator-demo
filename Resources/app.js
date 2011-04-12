Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

var windowSearch = Titanium.UI.createWindow({  
    title:'Search',
    backgroundColor:'#fff',
	url:'icd9.js',
	tabBarHidden:true,
	navBarHidden:true
});
var tabSearch = Titanium.UI.createTab({
	window:windowSearch
});

tabGroup.addTab(tabSearch);

tabGroup.open();