var win = Ti.UI.currentWindow;
Ti.include('search.js');

var searchBar = Titanium.UI.createSearchBar({
	showCancel:true,
	height:43,
	top:0
});
win.add(searchBar);

var tableView = Ti.UI.createTableView({
	height:417,
	top:43
});
win.add(tableView);

searchBar.addEventListener('cancel', function(e){
	searchBar.blur();
});

searchBar.addEventListener('return', function(e){
	dataArray = search(e.value);
	tableView.setData(dataArray);
	searchBar.blur();
});

tableView.addEventListener('click', function(e){

	var windowDetail = Titanium.UI.createWindow({  
	    title:e.rowData.code,
	    backgroundColor:'#fff',
		navBarHidden:false
	});
	
	var labelDescription = Ti.UI.createLabel({
		color:'#999',
		text:e.rowData.desc + '',
		font:{fontSize:20,fontFamily:'Helvetica Neue'},
		textAlign:'left',
		width:'auto',
		height:'auto',
		top:10,
		left:10
	});
	windowDetail.add(labelDescription);
	
	Titanium.UI.currentTab.open(windowDetail,{animated:true});
});