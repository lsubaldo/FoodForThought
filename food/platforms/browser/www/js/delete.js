function deleteElement(parentid,childid){
  var child = document.getElementById(childid);
  var parent = document.getElementById(parentid);
  parent.removeChild(child);
}
