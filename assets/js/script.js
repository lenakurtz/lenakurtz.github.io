

//Hier Lenas Versuch from Scratch ne Funktion zu schreiben mit der die Articles auf einer Seite sich im Grid bewegen
//Wish me Luck

function articlesAppearDisappear() {
const Articles = document.querySelectorAll('article');

		Articles.forEach((Article) => {
			const delay = Math.random() * 4 + "s";
			const duration = Math.random() * 100 + "s";

			Article.style.animationDelay = delay;
			Article.style.animationDuration = duration;
        })
};

function articlesRandomPlacement() {
    const Articles = document.querySelectorAll('article');
    
            Articles.forEach((Article) => {
                let columns = Math.random() * 10;
                let rows = Math.random() * 10 ;


                rows = Math.round(rows);
                columns = Math.round(columns);
    
                console.log(rows);
                console.log(columns);
                Article.style.gridColumnStart = columns;
                Article.style.gridRowStart= rows;
            })

  const elonsalute = document.getElementById("Elonsalute");
  
  elonsalute.style.gridColumnStart = 7;
  elonsalute.style.gridRowStart= 9;

    };


    function articlesMovement() {
        const Articles = document.querySelectorAll('article');
        Articles.forEach((Article)=> {
            
            let X = Math.random()*100 + "px";
            let Y = Math.random()*100 + "px";
    Article.animate([
    
        // key frames
       { transform: "translate(0px,0px)"},
       {transform: `translate(${X},${Y})`},
       { transform: "translate(0px,0px)"}
      ], {
        // sync options
        duration: 10000,
        iterations: Infinity
      })
    });
  };


function hackerethikMovement() {
    const Articles = document.querySelectorAll('.hackerethik_boxen');
    Articles.forEach((Article)=> {
        
        let X = Math.random()*10 + "px";
        let Y = Math.random()*10 + "px";
Article.animate([

    // key frames
   { transform: "translate(0px,0px)"},
   {transform: `translate(${X},${Y})`},
   { transform: "translate(0px,0px)"}

  ], {
    // sync options
    duration: 10000,
    iterations: Infinity
  })


    }

)};

function resizeArticle(){
    const Articles = document.querySelectorAll('article');
    Articles.forEach((Article)=> {


    const showArticle = Article.animate( [
        { transform: "translateZ(300px)"}
      ])
    
      Article.addEventListener("onmouseover", showArticle);
    
    }
    )
};
          

          
          

function nixZuVerbergen(){

const Nachricht = "Doch!";

    onclick = alert(Nachricht);

}

function nurRaten(){
const Nachricht = "Ok! Die Privatsphäre ist ein wichtiges Grundrecht!";
onclick = alert(Nachricht);
}
function dialogbutton() {

    
    const dialog = document.querySelector("dialog");
    const showButton = document.querySelector("dialog + button");
    const closeButton = document.querySelector("dialog button");
    const Nachricht = "Doch!";
    const text = document.getElementById("Alert");
    text.innerHTML = Nachricht;
    
    // "Show the dialog" button opens the dialog modally
  
        dialog.showModal();
    ;
    
    // "Close" button closes the dialog
    closeButton.addEventListener("click", () => {
        dialog.close();
    });
};



function showMainContent() {
const main = document.querySelector("main");
const additions = document.getElementById('additions');
const visibility = "visible"
main.style.visibility = visibility;
additions.style.visibility = visibility;

};
    
// articlesRandomPlacement();
// articlesMovement();




// funktion schreiben, die eine "Konsole" öffnet

function showConsole() {
    const dialog = document.querySelector("dialog");
    const showButton = document.querySelector("dialog + button");
    const closeButton = document.querySelector("dialog button");
   
const textFeld = document.createElement("p");

textFeld.innerHTML = "ouh oh"

dialog.appendChild(textFeld);

    
    // "Show the dialog" button opens the dialog modally
  
        dialog.showModal();
    ;
    
    // "Close" button closes the dialog
    closeButton.addEventListener("click", () => {
        dialog.close();
       
    });

};

resizeArticle();
// hackerethikMovement();


function nowDate(){

    Date.now();

    

}



// DRAG AND DROP

document.querySelectorAll('.hackerethik_boxen').forEach(div => {
	div.addEventListener('mousedown', function(e) {
	  let offsetX = e.clientX - div.offsetLeft;
	  let offsetY = e.clientY - div.offsetTop;
  
	  function onMouseMove(e) {
		div.style.left = `${e.clientX - offsetX}px`;
		div.style.top = `${e.clientY - offsetY}px`;
	  }
  
	  function onMouseUp() {
		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);
	  }
  
	  document.addEventListener('mousemove', onMouseMove);
	  document.addEventListener('mouseup', onMouseUp);
  
	  // Prevent text selection while dragging
	  e.preventDefault();
	});
  });




// SHOW READ ME 

// document.getElementById("readme").addEventListener("click", function () {
//     var nav = document.getElementById("readme_text");
//     var circle = document.getElementById("readme");
 
//     nav.classList.toggle("show");
 
//     // if (circle.innerHTML === "?") {
//     //     circle.innerHTML = "+";
//     // } else if (circle.innerHTML === "+") {
//     //     circle.innerHTML = "?";
//     // }
// }); 

// document.getElementById("close_readme").addEventListener("click", function () {
//     var hide = document.getElementById("readme_text");
	
// 		hide.style.display = 'none';
 
    
// }); 


function showReadme(){

  const readmeText = document.getElementById("readme_text");

  readmeText.classList.toggle("show");

};

function hideReadme(){

    const readmeText = document.getElementById("readme_text");
   
    readmeText.classList.toggle("show");

};

function showStageOne(){
  const gridFour = document.getElementById("stageFour");
  const gridThree = document.getElementById("stageThree");
  const gridTwo = document.getElementById("stageTwo");
  const gridOne = document.getElementById("stageOne");
  gridFour.style.opacity = 0;
  gridThree.style.opacity = 0;
gridTwo.style.opacity = 0;
gridOne.style.opacity = 1;

const buttonOne = document.getElementById("bOne");
buttonOne.style.display ="none";

const newbutton = document.getElementById("bTwo");
newbutton.style.display ="flex";

const body = document.querySelector("body");
body.style.backgroundColor = "white";

const heading = document.querySelector("h1");
heading.style.color = "black";
heading.style.fontSize = "4vw"

  };


function showStageTwo() {
  const gridFour = document.getElementById("stageFour");
  const gridThree = document.getElementById("stageThree");
  const gridTwo = document.getElementById("stageTwo");
  const gridOne = document.getElementById("stageOne");
gridTwo.style.opacity = 1;
gridOne.style.opacity = 0.5;
gridFour.style.opacity = 0;
gridThree.style.opacity = 0;

const body = document.querySelector("body");
// body.style.backgroundColor = "grey";
const button = document.getElementById("bTwo");
button.style.display ="none";

const newbutton = document.getElementById("bThree");
newbutton.style.display ="flex";
};

function showStageThree(){
  const gridFour = document.getElementById("stageFour");
  const gridThree = document.getElementById("stageThree");
  const gridTwo = document.getElementById("stageTwo");
  const gridOne = document.getElementById("stageOne");
  gridThree.style.opacity = 1;
gridTwo.style.opacity = 0.5;
gridOne.style.mixBlendMode = "difference";
gridFour.style.opacity = 0;

const button = document.getElementById("bThree");
button.style.display ="none";
const newbutton = document.getElementById("bFour");
newbutton.style.display ="flex";
const body = document.querySelector("body");
// body.style.backgroundColor = "grey";

document.getElementById("dollarsigns").style.color ="white";

const logos = document.querySelectorAll('.logo');

logos.forEach((logo) => {
  logo.style.mixBlendMode = "color-burn";
  logo.style.transform = "scale(200%)";
  logo.style.opacity = 1;

    })
  };

  function showStageFour(){
    const gridFour = document.getElementById("stageFour");
    const gridThree = document.getElementById("stageThree");
    const gridTwo = document.getElementById("stageTwo");
    const gridOne = document.getElementById("stageOne");

    gridFour.style.opacity = 1;
    gridThree.style.opacity = 1;
    gridTwo.style.opacity = 1;
    gridOne.style.mixBlendMode = "saturation";

    const button = document.getElementById("bFour");
    button.style.display ="none";
   

    const body = document.querySelector("body");
// body.style.backgroundColor = "black";


const heading = document.querySelector("h1");
heading.style.color = "red";
heading.style.fontSize = "6.5vw"
heading.style.textShadow = "10px 10px 10px rgb(70, 1, 1)"

const saluteImg = document.getElementById("salute");

saluteImg.style.transform = "scale(400%)";
saluteImg.style.mixBlendMode ="hard-light";

const patternstagefour = document.getElementById("patternstagefour");
patternstagefour.style.mixBlendMode ="overlay";
patternstagefour.style.color ="red";
    };


function showConfetti(){
    const duration = 5 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();
  
    if (timeLeft <= 0) {
      return clearInterval(interval);
    }
  
    const particleCount = 50 * (timeLeft / duration);
  
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};

function showConfettiZwei(){
const defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["star"],
  colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ["star"],
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ["circle"],
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);

}
//========================
// Counter auf hackseite  (Lenas Version)
//========================


// Set the date we're counting down to
var countDownDate = new Date("May 12, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

  // Output the result in an element with id="demo"
let demo = document.getElementById("demo"); 
if (demo) {
  demo.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
}

 

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);