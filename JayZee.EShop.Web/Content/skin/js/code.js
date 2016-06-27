function secBoard(elementID,listName,n) {
 var elem = document.getElementById(elementID);
 var elemlist = elem.getElementsByTagName("a");
 
 for (var i=0; i<elemlist.length; i++) {
  elemlist[i].className = "normal";
  var m = i+1;
  document.getElementById(listName+"_"+m).className = "normal";
 }
  elemlist[n-1].className = "list-over";
  document.getElementById(listName+"_"+n).className = "list-over";
   if(n=1){
	  $("#icon2").addClass("icon2-reg").removeClass("icon2-logotext");
	  }
}// JavaScript Document