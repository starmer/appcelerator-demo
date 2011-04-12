function search(searchValue) {
	var like = '%' + searchValue + '%';
	var db = Ti.Database.install('ICD9_CODES.sqlite','icd9_codes');
	var rows = db.execute('SELECT * FROM icd9_codes WHERE code LIKE ? OR description LIKE ?', like, like); 
	var dataArray = [];
	
	while (rows.isValidRow()) {
	    dataArray.push({title:'' + rows.fieldByName('code') + ' ' + rows.fieldByName('description'),
						hasChild:true,
						id:rows.fieldByName('id'),
						code:rows.fieldByName('code'),
						desc:rows.fieldByName('description')
					});
	    rows.next();
	}
	
	return dataArray;
};