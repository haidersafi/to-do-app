

var list=document.getElementById("list")
var input=document.getElementById("todo")

function add(){
    if (input.value.length>0){
    var li= document.createElement("li");
    
    li.innerHTML=input.value;
    list.appendChild(li);
input.value="";
var delbutton=document.createElement("button");
delbutton.innerHTML="DELETE";
li.appendChild(delbutton)
delbutton.setAttribute("class","btn");
delbutton.onclick=function(){
    event.target.parentNode.remove();
   
   }
   var editbutton=document.createElement("button");
   editbutton.innerHTML="EDIT";
   li.appendChild(editbutton)
   editbutton.setAttribute("class","btn");
  editbutton.onclick=function(){
      var editValue=prompt("Enter Edit Value",event.target.parentNode.firstChild.nodeValue);
      if (editValue.length>0){
      event.target.parentNode.firstChild.nodeValue=editValue;}
     

}
    }
}
function deleteAll(){
    list.innerHTML="";
}