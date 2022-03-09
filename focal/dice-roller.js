const args = process.argv.slice(2);

const roll = function(args) {
  const min = Math.ceil(1);
  const max = Math.floor(6);
  let stringResult = '';
  for (let i = 0; i < args; i++) {
    let randomNum = Math.floor(Math.random() * (max - min) + min);
    stringResult += `${randomNum}, `;
  }
  console.log(`Rolled ${args} dice: ${stringResult.slice(0, -2)}`);
}
roll(args);



// console.log(`Rolled ${args} dice: ${roll}`);

// > node dice-roller.js 3
// Rolled 3 dice: 2, 6, 5