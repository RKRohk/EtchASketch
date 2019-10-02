var container = document.querySelector("#container");
var input = document.querySelector("#order");
var button = document.querySelector("#resetButton");
var bluestuff = [];
var setButton = document.querySelector("#set");
input.value = 16;
createStuff();
setButton.addEventListener("click",createStuff);
function createStuff(){
  deleteChild(container);
  var order = input.value;
  var width = 960/order;
  var height = width + "px";
  for(var x=0;x<order;x++){
  for(var y=0;y<order;y++){
    var div = document.createElement('div');
    div.style.backgroundColor = "red";
    div.style.height = height;
    div.style.width = height;
    div.style.float = "left";
    div.style.borderStyle = "solid";
    div.classList.add("unit");
    container.appendChild(div);
    }
  }
  var divs = document.getElementsByClassName("unit");
  for(var x of divs){  
    x.addEventListener("mouseenter",function(event){
    event.target.style.backgroundColor = 'blue';
    addtoArray(event.target);
    });
  }
}
function addtoArray(target){
  bluestuff.push(target);
}
button.addEventListener("click",function(){
  while(bluestuff){
    bluestuff.pop().style.backgroundColor = "red";
  }
});
function deleteChild(e) { 
  var child = e.lastElementChild;  
  while (child) { 
    e.removeChild(child); 
    child = e.lastElementChild; 
  } 
} 