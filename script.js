let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monterNameText = document.querySelector("#monterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const locations = [
  {
    name:"town square",
    "button text": ["Go to store","Go to cave","Fight dragon"],
    "button functions":[goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"store\"."
  },
  {
    name:"store",
    "button text": ["Buy 10 health (10gold)","Buy weapon (30gold)","Go to town square"],
    "button functions":[buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  }
]

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location){
  
}

function goTown(){
    button1.innerText = "Go to store";
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText = "You are in the town square. You see a sign that says \"store\"."
}

function goStore(){
  button1.innerText = "Buy 10 health (10gold)";
  button2.innerText = "Buy weapon (30gold)";
  button3.innerText = "Go to town square";
  button1.onclick = buyHealth;
  button2.onclick = buyWeapon;
  button3.onclick = goTown;
  text.innerText = "you enter the store"
}

function goCave(){
  console.log("Going to cave.")
}

function fightDragon(){
  console.log("Fighting Dragon.")
}

function buyHealth(){
  
}

function buyWeapon(){
  
}




