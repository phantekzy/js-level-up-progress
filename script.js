// === DOM ELEMENTS ===
let sklSlc   = document.getElementById('skillSelection'); // Dropdown
let sklLvl   = document.getElementById('skillLevel');     // Number input
let lvlBtn   = document.getElementById('levelUp');        // Button
let lvlNum   = document.getElementById('number');         // Number display
let circle   = document.querySelector('circle');          // Progress circle
let alertMsg = document.getElementById('alert');          // Alert text
let skillBox = document.getElementById('skill');          // Circle wrapper

// === CONSTANTS ===
const CIRCUMFERENCE = 472; // Pre-calculated circle perimeter
let counter = 0;           // Current animation counter

// === EVENT: Level up button click ===
lvlBtn.addEventListener('click', () => {
  let lvlParse = parseInt(sklLvl.value); // Target level value
  let sklcnt = sklSlc.value;             // Selected skill

  // Reveal the progress circle
  skillBox.style.visibility = "visible";

  // Animate percentage counting
  let lvlInterval = setInterval(() => {
    if (counter === lvlParse) {
      clearInterval(lvlInterval); // Stop when reaching target
    } else {
      counter++;

      // Update number inside circle
      lvlNum.innerHTML = counter + "%";

      // Update circle stroke offset
      let dashOffset = CIRCUMFERENCE - (CIRCUMFERENCE * counter / 100);
      circle.style.strokeDashoffset = dashOffset;

      // Update alert text
      alertMsg.innerHTML = `You leveled up ${sklcnt} by ${lvlParse}%`;
    }
  }, 50);
});

