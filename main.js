document.addEventListener('DOMContentLoaded', function(){
//load all the data before the html is loaded
let buttonStart = document.getElementById ("buttonStart")
let loading = document.getElementById ("loading")
let show = document.getElementById ("show")
let click = document.getElementById ("click")
let devBy = document.getElementById ("devBy")
let wolf = document.getElementById("wolf")
let take = document.getElementById ("take")
let takeAudio = document.getElementById ("takeAudio")
let theCreature = document.getElementById("theCreature")
let takeALook = document.getElementById("takeALook")
let takeALookText = document.getElementById("takeALookText")
let sci = document.getElementById ("sci")
let ins = document.getElementById ("ins")
let intro =document.getElementById ("intro")
let flagJ = document.getElementById ("flagJ")
let ifYou = document.getElementById ("ifYou")
let terrifying = document.getElementById("terrifying")
let vomiting = document.getElementById ("vomiting")
let which1 = document.getElementById ("which1")
let human1 = document.getElementById ("human1")
let notHuman1 = document.getElementById ("notHuman1")
let heart = document.getElementById ("heart")
let heartLow = document.getElementById ("heartLow")
let heartMid = document.getElementById ("heartMid")
let choose1 = document.getElementById ("choose1")
let warn = document.getElementById ("warn")
let you = document.getElementById ("you")
let heartHigh = document.getElementById ("heartHigh")
let listening = document.getElementById ("listening")
let yes = document.getElementById ("yes")
let no = document.getElementById ("no")
let alive = document.getElementById ("alive")
let yes2 = document.getElementById ("yes2")
let no2 = document.getElementById ("no2")
let alive2 = document.getElementById ("alive2")
let notHuman6_human6 = document.getElementById ("notHuman6_human6")
let chooseBox1 = document.getElementById ("chooseBox1")
let chooseBox2 = document.getElementById ("chooseBox2")
let chooseBox3 = document.getElementById ("chooseBox3")
let chooseBox4 = document.getElementById ("chooseBox4")
let chooseButton1 = document.getElementById ("chooseButton1")
let passed = document.getElementById("passed")
let passed2 = document.getElementById ("passed2")
let entity = 0;
let addEntity = document.getElementById ("addEntity")
let reduceEntity = document.getElementById ("reduceEntity")
let life = 60;
let noSignalAudio = document.getElementById ("noSignalAudio")
let imSorry = document.getElementById ("imSorry")

takeALook.style.opacity="0"



alert("Cautious: this game might cause you something uncomfort:able because there are some unusual")
alert("please dont take seriously, this is just like a sacrastic")


buttonStart.addEventListener("click", function(){
takeALook.style.opacity="1";
  show.style.display="block"
  intro.style.display="none"
  setTimeout(()=>{
    loading.classList.add("hide")
    flagJ.classList.add("show")
    devBy.classList.add("show")
    takeALook.style.opacity="0";
    takeALook.style.display="none"
    wolf.play()
    setTimeout(()=>{
      flagJ.classList.add("hide")
      devBy.classList.add("hide")
    
setTimeout(()=>{


//////  
  const overlay = document.querySelector('.glitch-overlay');
const numGlitches = 10; // Adjust for more or fewer glitches at once

function createMultipleGlitches() {
    for (let i = 0; i < numGlitches; i++) {
        if (Math.random() < 0.35) { // 50% chance for each glitch
            const block = document.createElement('div');
            block.classList.add('glitch-block');
            const width = Math.random() * 100 + 20;
            const height = Math.random() * 50 + 10;
            const top = Math.random() * (window.innerHeight - height);
            const left = Math.random() * (window.innerWidth - width);
            const offsetX = (Math.random() - 0.5) * 20;

            block.style.width = `${width}px`;
            block.style.height = `${height}px`;
            block.style.top = `${top}px`;
            block.style.left = `${left}px`;
            block.style.transform = `translateX(${offsetX}px)`;

            overlay.appendChild(block);

            setTimeout(() => {
                overlay.removeChild(block);
            }, Math.random() * 2000 + 500); // Random lifespan
        }
    }
}

// Create glitches every 3 seconds (adjust as needed)
setInterval(createMultipleGlitches, 7000);
////////  
  
  takeAudio.play()
  take.style.opacity="1";
  
setTimeout(()=>{
  take.style.display="none"
  theCreature.style.opacity="1"
  sci.play()
setTimeout(()=>{
theCreature.style.display="none"
setTimeout(()=>{
  takeALookText.style.opacity="1"
  takeALook.style.opacity="1"
  takeALook.style.width="100px"
  takeALook.style.height="100px"
  takeALook.style.textAlign="center"
  takeALook.style.position="absolute";
  takeALook.style.left=" 40%";
  takeALook.style.top="55%";
  takeALook.style.display="block"
  sci.play()
takeALookText.addEventListener("click", function(){
  ifYou.style.display="block"
  sci.play()
  takeALook.style.display="none"
  takeALookText.style.display="none"
  terrifying.play()
  setTimeout(()=>{
ifYou.style.display="none"
vomiting.style.display="block"
sci.play()
setTimeout(()=>{


vomiting.style.display = "none";
which1.style.display = "block";
human1.style.display = "block";
notHuman1.style.display = "block";
heart.style.display = "block";
sci.play()

/*
let life = 60;
*/
heart.textContent = "Heart beat rate: " + life;
sci.play()
heartLow.play()
let level = 0;
  

function incrementLevel() { 
click.play();
  if (level >= 2) {
    life += 5;
    heart.textContent = "Heart beat rate: " + life;
    level = 0;

passed.style.display="block"
setTimeout(()=>{
passed.style.display="none"
},1200);



  }
level = 0; 
console.log("click " + level);
which1.style.display = "none";
human1.style.display = "none";
notHuman1.style.display = "none"

setTimeout(()=>{
which2.style.display = "block";
human2.style.display = "block";
notHuman2.style.display = "block"
sci.play()
},2000);
}

function incrementLevel2() { 
click.play();
  if(level >= 2){
   life += 5;
    heart.textContent = "Heart beat rate: " + life;  
passed.style.display="block"
setTimeout(()=>{
passed.style.display="none"
},1200);
  }
  if(level >= 1){
which2.style.display = "none";
human2.style.display = "none";
notHuman2.style.display = "none";
level = 0;
  }
  if(life >= 70){
    heartLow.pause()
    heartMid.play()
    heart.style.color="red"
    warn.style.display="block"
    console.log("no value")
  }
  
  console.log(level)
  setTimeout(()=>{
which3.style.display = "block";
human3.style.display = "block";
notHuman3.style.display ="block"
sci.play()
},2000);
}  






function incrementLevel3() { 
click.play();
  if(level >= 2){
   life += 5;
    heart.textContent = "Heart beat rate: " + life;  
passed.style.display="block"
setTimeout(()=>{
passed.style.display="none"
},1200);
  }
  if(level >= 1){
which3.style.display = "none";
human3.style.display = "none";
notHuman3.style.display = "none";
level = 0;
  }
  if(life >= 70){
    heartLow.pause()
    heartMid.play()
    heart.style.color="red"
    warn.style.display="block"
    console.log("no value")
  }
  
  console.log(level)
  setTimeout(()=>{
which5.style.display = "block";
human5.style.display = "block";
notHuman5.style.display ="block"
sci.play()
},2000);

setTimeout(()=>{
  listening.style.display="block"
  setTimeout(()=>{
  listening.style.display="none"
  },1300);
},1300);
}  


function incrementLevel4() { 
click.play();
  if(level >= 2){
   life += 5;
    heart.textContent = "Heart beat rate: " + life;  
passed.style.display="block"
setTimeout(()=>{
passed.style.display="none"
},1200);
  }
  if(level >= 1){
which4.style.display = "none";
human4.style.display = "none";
notHuman4.style.display = "none";
level = 0;

  }
  if(life >= 70){
    heartLow.pause()
    heartMid.play()
    heart.style.color="red"
    warn.style.display="block"
    console.log("no value")
  }
  if(life >= 80){
    heartMid.pause()
    heartHigh.play()
    heart.style.color="darkred"
  }
  
  
  console.log(level)
  setTimeout(()=>{
which7.style.display = "block";
human7.style.display = "block";
notHuman7.style.display ="block";
sci.play()
},2000);
}  




function incrementLevel5() { 
click.play();
  if(level >= 2){
   life += 5;
    heart.textContent = "Heart beat rate: " + life;  
passed.style.display="block"
setTimeout(()=>{
passed.style.display="none"
},1200);
  }
  if(level >= 1){
which5.style.display = "none";
human5.style.display = "none";
notHuman5.style.display = "none";
level = 0;
you.style.display="none"
  }
  if(life >= 70){
    heartLow.pause()
    heartMid.play()
    heart.style.color="red"
    warn.style.display="block"
    console.log("no value")
  }
  if(life >= 80){
    heartMid.pause()
    heartHigh.play()
    heart.style.color="darkred"
  }
  
  
  console.log(level)
setTimeout(()=>{
you.style.display="none"
alive.style.display="block"
yes.style.display="block"
no.style.display="block"
heart.style.opacity="0"
warn.style.opacity="0"
sci.play()
},2000);
}  




function incrementLevel6() { 
click.play();
you.style.display="none"
  if(level >= 2){
   life += 5;
    heart.textContent = "Heart beat rate: " + life;  
passed.style.display="block"
setTimeout(()=>{
passed.style.display="none"
},1200);
  }
  if(level >= 1){
which6.style.display = "none";
human6.style.display = "none";
notHuman6.style.display = "none";
notHuman6_human6.style.display="none"
level = 0;
  }
  if(life >= 70){
    heartLow.pause()
    heartMid.play()
    heart.style.color="red"
    warn.style.display="block"
    console.log("no value")
  }
  if(life >= 80){
    heartMid.pause()
    heartHigh.play()
    heart.style.color="darkred"
  }
  setTimeout(()=>{
chooseBoxFunction()
chooseButton1.style.display="block"
},2000);
  console.log(level)
} 



//PUT HERE LEVEL 7


function yesNo(){
alive.style.display="none"
yes.style.display="none"
no.style.display="none"
click.play()
setTimeout(()=>{
alive2.style.display="block"
yes2.style.display="block"
no2.style.display="block"
sci.play()
},3000);
}

function yesNo2(){
click.play()
heart.style.opacity="1"
warn.style.opacity="1"
alive2.style.display="none"
yes2.style.display="none"
no2.style.display="none"
which6.style.display = "block";
human6.style.display = "block";
notHuman6.style.display ="block";
notHuman6_human6.style.display="block"

setTimeout(()=>{
 notHuman6_human6.classList.add("hide")
},1000);


incrementLevel6show();
}



//LEVEL 7
function chooseBoxFunction() {
    const chooseBox1 = document.getElementById("chooseBox1");
    const chooseBox2 = document.getElementById("chooseBox2");
    const chooseBox3 = document.getElementById("chooseBox3");
    const chooseBox4 = document.getElementById("chooseBox4");

    const box1Checked = chooseBox1.checked;
    const box2Checked = chooseBox2.checked;
    const box3Checked = chooseBox3.checked;
    const box4Checked = chooseBox4.checked;

    showChoose.style.display = "block";
    sci.play();
}

chooseButton1.addEventListener("click", function () {
    click.play();
    let lifeChange = 0;
    let entityChange = 0;

    const box1Checked = chooseBox1.checked;
    const box2Checked = chooseBox2.checked;
    const box3Checked = chooseBox3.checked;
    const box4Checked = chooseBox4.checked;

    if (box1Checked && box2Checked && !box3Checked && box4Checked) {
        console.log("Correct!");
    } else {
        console.log("Incorrect!");
        if (!box1Checked) {
            lifeChange += 5;
            entityChange += 1;
        }
        if (!box2Checked) {
            lifeChange += 5;
            entityChange += 1;
        }
        if (box3Checked) { 
            lifeChange += 0; 
        }
        if (!box4Checked) {
            lifeChange += 5;
            entityChange += 1;
        }
    }

    life += lifeChange;
    entity += entityChange;
    heart.textContent = "Heart beat rate: " + life;

    if (life >= 70) {
        heartLow.pause();
        heartMid.play();
        heart.style.color = "red";
        warn.style.display = "block";
    }
    if (life >= 80) {
        heartMid.pause();
        heartHigh.play();
        heart.style.color = "darkred";
    }

    showChoose.style.display = "none";
    passed2Function();
    
    setTimeout(()=>{
which4.style.display = "block";
human4.style.display = "block";
notHuman4.style.display ="block"
sci.play()
},2000);
});

function passed2Function() {
    passed2.textContent = entity + " entity passed";
    passed2.style.display = "block";
}





function incrementLevel7() { 
click.play();
  if(level >= 2){
   life += 5;
    heart.textContent = "Heart beat rate: " + life;  
passed.style.display="block"
setTimeout(()=>{
passed.style.display="none"
},1200);
  }
  if(level >= 1){
which7.style.display = "none";
human7.style.display = "none";
notHuman7.style.display = "none";
level = 0;
you.style.display="none"
  }
  if(life >= 70){
    heartLow.pause()
    heartMid.play()
    heart.style.color="red"
    warn.style.display="block"
    console.log("no value")
  }
  if(life >= 80){
    heartMid.pause()
    heartHigh.play()
    heart.style.color="darkred"
  }
  
  
  
  console.log(level)
setTimeout(()=>{


which8.style.display = "block";
human8.style.display = "block";
notHuman8.style.display ="block"
setTimeout(()=>{
notHuman8_human8.classList.add("show")
},2000);
sci.play()


},2000);
sci.play()
}  



human7.addEventListener('click',function(){
setTimeout(()=>{
human7.style.display="block"
human7.style.pointerEvents="none";
setTimeout(()=>{
human7.style.display="none"  
},2500);
},100);
})





function incrementLevel8() { 
click.play();
imSorry.play();
imSorry.style.display="block"
  if(level >= 2){
   life += 5;
    heart.textContent = "Heart beat rate: " + life;  
passed.style.display="block"
setTimeout(()=>{
passed.style.display="none"
},1200);
  }
  if(level >= 1){
which8.style.display = "none";
human8.style.display = "none";
notHuman8.style.display = "none";
notHuman8_human8.style.display="none"
level = 0;
noSignal.style.display="block"
noSignalAudio.play()

you.style.display="none"
  }
  if(life >= 70){
    heartLow.pause()
    heartMid.play()
    heart.style.color="red"
    warn.style.display="block"
    console.log("no value")
  }
  if(life >= 80){
    heartMid.pause()
    heartHigh.play()
    heart.style.color="darkred"
  }
  
  
  
  console.log(level)
setTimeout(()=>{

///code
noSignal.style.display="none"
noSignalAudio.pause()


},2000);
setTimeout(()=>{
document.writeln("SORRY, UNFORTUNATELY I'M LAZY TO CONTINUE THE GAME, I WANNA MAKE THIS GOOD BUT BRUH, I WANNA DO SOMETHING THAN THIS.")
document.writeln("COMING SOOON")
document.writeln("")
document.writeln("")
document.writeln("J Squad Characters:")
document.writeln("James")
document.writeln("Jake")
document.writeln("Joross")
document.writeln("Jeb")
document.writeln("Justin")
document.writeln("Jeff")
document.writeln("Jian")
document.writeln("Jazmine")
document.writeln("Florence")
body.style.display="none"
imSorry.style.display="block"
},5500);
sci.play()
}




chooseButton1.addEventListener("click", function(){
  passed2Function()
})

yes.addEventListener("click",()=> yesNo())
no.addEventListener("click", ()=>yesNo())
yes2.addEventListener("click",()=> yesNo2())
no2.addEventListener("click", ()=>yesNo2())



human1.addEventListener("click",()=>incrementLevel(level+=1));
notHuman1.addEventListener("click", ()=> incrementLevel(level+=2));

human2.addEventListener("click",()=> incrementLevel2(level+=1));
notHuman2.addEventListener("click", () => incrementLevel2(level+=2));

human3.addEventListener("click",()=> incrementLevel3(level+=1));
notHuman3.addEventListener("click", () => incrementLevel3(level+=2));

human4.addEventListener("click",()=> incrementLevel4(level+=1));
notHuman4.addEventListener("click", () => incrementLevel4(level+=2));

human5.addEventListener("click",()=> incrementLevel5(level+=1));
notHuman5.addEventListener("click", () => incrementLevel5(level+=2));

human6.addEventListener("click",()=> incrementLevel6(level+=1));
notHuman6.addEventListener("click", () => incrementLevel6(level+=2));

human7.addEventListener("click",()=> incrementLevel7(level+=1));
notHuman7.addEventListener("click", () => incrementLevel7(level+=2
));

human8.addEventListener("click",()=> incrementLevel8(level+=1));
notHuman8.addEventListener("click", () => incrementLevel8(level+=2
));


  },4500);
},5000);
},5000);
},2000);
},7000);
  
  
  
},5000);    
      
    },3000);
  },5000);
},10000);

})








const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener("click", () => {
      click.play();
    });
  });
  
  
  
  //camera
  const human5 = document.getElementById('human5');

setTimeout(()=>{
let videos = navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    human5.srcObject = stream;
  })
  .catch(err => {
    console.error('Error accessing camera:', err);
    alert('Error accessing camera. Please ensure your camera is enabled and you have granted permission.');
  });
  
 } ,1000);
 
 


/*
passed2.textContent = entity + " entity passed";
heart.textContent = "Heart beat rate: " + life;
*/


})

