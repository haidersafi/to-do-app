var firebaseConfig = {
    apiKey: "AIzaSyBTYOZH3hsl0BilUdeHTimgVitePENmqR0",
    authDomain: "todoapp-327d9.firebaseapp.com",
    databaseURL: "https://todoapp-327d9.firebaseio.com",
    projectId: "todoapp-327d9",
    storageBucket: "todoapp-327d9.appspot.com",
    messagingSenderId: "244233943558",
    appId: "1:244233943558:web:83b63187eb2643b6896187",
    measurementId: "G-TFCTFLPFPB"
  };
  firebase.initializeApp(firebaseConfig);
  
  var database=firebase.database().ref('tasks')
var list=document.getElementById("list")
var input=document.getElementById("todo")

function add(){
    if (input.value.length>0){
    var li= document.createElement("li");
    
    li.innerHTML=input.value;
    var taskId=database.push(tasks).key;
    li.setAttribute("liTaskId",taskId);
    console.log('abc',taskId)
    list.appendChild(li);
   
    var tasks={taskId:taskId,task:input.value};
   
    
    firebase.database().ref('tasks/'+taskId).set(tasks);
input.value="";
var delbutton=document.createElement("button");
delbutton.innerHTML="DELETE";
li.appendChild(delbutton)
delbutton.setAttribute("class","btn");
delbutton.onclick=function(){
    var keyId=event.target.parentNode.getAttribute("liTaskId");
    firebase.database().ref('tasks/'+keyId).remove();
    event.target.parentNode.remove();
    
    }
   var editbutton=document.createElement("button");
   editbutton.innerHTML="EDIT";
   li.appendChild(editbutton)
   editbutton.setAttribute("class","btn");
  editbutton.onclick=function(){
    var keyId=event.target.parentNode.getAttribute("liTaskId");
      var editValue=prompt("Enter Edit Value",event.target.parentNode.firstChild.nodeValue);
      if (editValue.length>0){
          firebase.database().ref('tasks/'+keyId).set({task:editValue,taskId:keyId})
      event.target.parentNode.firstChild.nodeValue=editValue;}
     

}
    }
}
function deleteAll(){
    list.innerHTML="";
    firebase.database().ref('tasks').remove();
}