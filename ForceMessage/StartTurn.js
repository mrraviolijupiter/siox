const messages = [
  {
    turn: {
      startReason: "pass",
      remainingSeconds: 10.3,
      turnNumber: 3,
      characterInTurn: 3,
      canMove: true,
      canAttack: true,
      canUseSkill: true,
      canPass: true
    },
  },
  {
    turn: {
      startReason: "pass",
      remainingSeconds: 10.3,
      turnNumber: 3,
      characterInTurn: 2,
      canMove: true,
      canAttack: true,
      canUseSkill: true,
      canPass: true
    },
  },
  {
    turn: {
      startReason: "pass",
      remainingSeconds: 10.3,
      turnNumber: 3,
      characterInTurn: 1,
      canMove: true,
      canAttack: true,
      canUseSkill: true,
      canPass: true
    },
  },
];
const ForceMessage = require("./ForceMessage")
module.exports = new ForceMessage("start_turn", messages);
