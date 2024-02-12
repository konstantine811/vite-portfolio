// Async functions
console.log("Fire_____🏂");

setTimeout(function () {
  loopIndex("Async");
}, 0);

console.log("Fire _2 _____🏂");

loopIndex("Synch");

function loopIndex(type) {
  for (let i = 0; i <= 100; i++) {
    console.log(type, "_____for each index: ", i);
  }
}

function loopIndexDelay(time) {
  setTimeout(loopIndex, time);
}

loopIndex("Synch another");
loopIndex("Synch antother ___ 3");
