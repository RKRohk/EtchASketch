const container = document.querySelector("#container");
for(var x=0;x<16;x++){
  for(var y=0;y<16;y++){
    var div = $("<div class='unit'></div>");
    div.appendTo(container);
  }
}

var divs = document.querySelectorAll(".unit");

for(var x in divs){
  divs[x].addEventListener("mouseenter",function(event){
    event.target.style.backgroundColor = "blue";
  });
}
