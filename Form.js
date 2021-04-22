class Form {
constructor () {

} 
display () {
var title = createElement("h2") 
title.html("car")  
title.position(130,0) 
var input = createInput("name")
var button = createButton("play")

input.position(130,160)
button.position(250,100)
button.mousePressed(function(){
input.hide()
button.hide()
var greeting = createElement("h3")  
greeting.html("hello"+name)
greeting.position(130,160)
});
}  
}