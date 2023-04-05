let images = [
  "D20-1.png",
  "D20-2.png",
  "D20-3.png",
  "D20-4.png",
  "D20-5.png",
  "D20-6.png",
  "D20-7.png",
  "D20-8.png",
  "D20-9.png",
  "D20-10.png",
  "D20-11.png",
  "D20-12.png",
  "D20-13.png",
  "D20-14.png",
  "D20-15.png",
  "D20-16.png",
  "D20-17.png",
  "D20-18.png",
  "D20-19.png",
  "D20-20.png"];
let dice = document.querySelectorAll("img");

function rollAni(){
  dice.forEach(function(die){
    die.classList.add("spin");
  });
  setTimeout(function(){
    dice.forEach(function(die){
      die.classList.remove("spin");
    });
    let dieValue = Math.floor(Math.random()*20);
    console.log(dieValue + 1);
    document.querySelector("#dice0").setAttribute("src", images[dieValue]);
    document.querySelector("#diceResult").innerHTML = "You rolled " + ( (dieValue + 1)) + "!";
  },
  500
  );
}

function randomRGB()
{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

const letters = document.querySelectorAll('.letter');

setInterval(function(){
    for(let letter of letters){
        letter.style.color= randomRGB();
    }
}, 2000);

const button = document.querySelector('#btn');
button.addEventListener('click', rollAni);
