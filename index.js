// alert("Hell");
var btnElements=document.querySelectorAll("button");
for(var i=0;i<btnElements.length;i++){
    btnElements[i].addEventListener("click",function(){
    var ch=this.innerHTML;//this refers to current button
    makeSound(ch);
    buttonAnimation(ch);
  });
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(x){
  // alert("Pressing a key");
  // console.log(event);
  switch (x) {
    case 'w':
          var crash=new Audio("sounds/crash.mp3");
          crash.play();
        break;
    case 'a':
          var kick=new Audio("sounds/kick-bass.mp3");
          kick.play();
        break;
    case 's':
          var snare=new Audio("sounds/snare.mp3");
          snare.play();
        break;
    case 'd':
          var tom1=new Audio("sounds/tom-1.mp3");
          tom1.play();
        break;
    case 'j':
          var tom2=new Audio("sounds/tom-2.mp3");
          tom2.play();
        break;
    case 'k':
          var tom3=new Audio("sounds/tom-3.mp3");
          tom3.play();
        break;
    case 'l':
          var tom4=new Audio("sounds/tom-4.mp3");
          tom4.play();
        break;
    default:
  }
}
function buttonAnimation(x){
    var activeButton=document.querySelector("."+x);
    activeButton.classList.add("pressed");
    // activeButton.classList.remove("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },150);

}
