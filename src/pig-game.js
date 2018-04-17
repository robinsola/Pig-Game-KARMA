export function Player(playerName) {
  this.playerName = playerName;
  this.rollPoints = 0;
  this.turnScore = 0;
  this.turnTotal = 0;
}

// Player.prototype.newRoll = function() {
//   return this.rollPoints = Math.floor((Math.random() * 6) +1);
// }
//
// Player.prototype.addPoints = function() {
//   if (this.rollPoints === 1) {
//     this.turnScore = 0;
//   } else {
//     this.turnScore += this.rollPoints;
//   }
//   return this.turnScore;
// }
//
// Player.prototype.addTotal = function() {
//   this.turnTotal += this.turnScore;
//   this.turnScore = 0;
//   return this.turnTotal;
// }
//
// Player.prototype.youWin = function() {
//   if (this.turnTotal >= 100) {
//     alert("you just won!")
//   }
// }
