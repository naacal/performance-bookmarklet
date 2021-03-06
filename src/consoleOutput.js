/*
Footer that finally outputs the data to the DOM and the console
*/

//add charts to iFrame holder in body
onIFrameLoaded(function(){
	outputIFrame.body.appendChild(outputHolder);
	iFrameEl.style.height = outputHolder.clientHeight + "px";
});


// also output the data as table in console
tablesToLog.forEach(function(table, i){
	if(table.data.length > 0 && console.table){
		console.log("\n\n\n" + table.name + ":");
		console.table(table.data, table.columns);
	}
});