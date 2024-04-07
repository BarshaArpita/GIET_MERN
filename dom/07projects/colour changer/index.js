const buttons = document.querySelectorAll(".button");//nodelist

function log(e, button) {
    console.log(e.target.id);
  if (e.target.id === button.id)
  document.getElementById('box1').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';}); {
    document.querySelector("body").style.backgroundColor = button.id;
  }
  }

buttons.forEach((button) => {
  button.addEventListener("click", (e) => log(e, button));
});



document.getElementById('changeColorButton').addEventListener('click', function() {
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  });
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

  }
   const interVALID=setInterval(()=>{
    document.querySelector("body").style.backgroundColor = getRandlomcolor();
   },1000);
   buttons[5].addEventListener("click",()=>clearInterval(interVALID));
  


//todo?when you click the 1st box pop up your name
//generate random colour