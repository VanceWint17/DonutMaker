const manualClicker = document.querySelector("#manualClick");

const counter = document.getElementById("counter");
// Auto Clicker button
const AutoClicker = document.getElementById("AutoClicker");
// Multiplier button
const multiplier = document.getElementById("Multi2");

const Secret = document.getElementById("Secret");
// game variables
let clicks = 0;
// variable to apply multiplier
let multiplierCounter = 1;
// cost of multiplier
let multiplierCost = 10;
//cost of autoclicker
let AutoClickerCost = 10;

let autoclickerCounter = 1;

let secretIncrease = 10000;

// Event Listeners
//
manualClicker.addEventListener("click", Clicker);
AutoClicker.addEventListener("click", AutoClick);
multiplier.addEventListener("click", MultiplierIncrease);
Secret.addEventListener("click", SecretAmount);
//functions
//Function to start the clicker
//
function Clicker() {
  clicks = clicks + multiplierCounter;
  counter.innerHTML = "Number of Donuts: " + clicks;
}
// function to start the AutoClicker
function AutoClick() {
  if (clicks >= AutoClickerCost) {
    clicks = clicks - AutoClickerCost;
    AutoClickerCost = AutoClickerCost * 1.1;
    autoclickerCounter = autoclickerCounter * 1.2;
    setInterval(Clicker, 1000);
    alert("You have applied the autoClicker!");
    counter.innerHTML = "Number of Donuts: " + clicks;
    AutoClicker.innerHTML = "Cost = " + AutoClickerCost;
  } else {
    alert("You don't have enough Donuts!");
  }
}

// function to increase the multiplier
function MultiplierIncrease() {
  if (clicks >= multiplierCost) {
    clicks = clicks - multiplierCost;
    multiplierCounter = multiplierCounter * 1.2;
    multiplierCost = multiplierCost * 1.1;
    counter.innerHTML = "Number of Donuts: " + clicks;
    multiplier.innerHTML = "Cost = " + multiplierCost;
    alert("You have applied the autoClicker!");
  } else {
    alert("You don't have enough Donuts!");
  }
}
function SecretAmount() {
  clicks = clicks + secretIncrease;
  counter.innerHTML = "Number of Donuts: " + clicks;
}
multiplier.innerHTML = "Cost = " + multiplierCost;
AutoClicker.innerHTML = "Cost = " + AutoClickerCost;
