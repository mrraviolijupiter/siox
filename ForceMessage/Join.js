const messages = [
  {
    character: {
      id: 50,
      name: "TheJoinedOne",
      pawn: {
        location: { x: 9, y: 9 },
        front: "E",
        currentStats: {
          health: 2,
          damage: 4,
          movementSteps: 2,
          jumpHeight: 2,
          attackRange: [{ x: 0, y: 4 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
          evasionRate:  0.3,
          criticalRate: 0.27,
          criticalMultiplier: 1.6,
          turnInitiative: 2,
          turnSpeed: 20,
          turnCharge: 30
        },
      },
      color: 7,
      baseStats: {
        health: 30,
        damage: 4,
        movementSteps: 2,
        jumpHeight: 2,
        attackRange: [{ x: 0, y: 4 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
        evasionRate:  0.3,
        criticalRate: 0.27,
        criticalMultiplier: 1.6,
        turnInitiative: 2,
        turnSpeed: 50,
        turnCharge: 100
      }
    }
  },
  {
    character: {
      id: 51,
      name: "TheJoinedTwo",
      pawn: {
        location: { x: 9, y: 8 },
        front: "N",
        currentStats: {
          health: 2,
          damage: 4,
          movementSteps: 2,
          jumpHeight: 2,
          attackRange: [{ x: 0, y: 4 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
          evasionRate:  0.3,
          criticalRate: 0.27,
          criticalMultiplier: 1.6,
          turnInitiative: 2,
          turnSpeed: 20,
          turnCharge: 30
        },
      },
      color: 8,
      baseStats: {
        health: 30,
        damage: 4,
        movementSteps: 2,
        jumpHeight: 2,
        attackRange: [{ x: 0, y: 4 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
        evasionRate:  0.3,
        criticalRate: 0.27,
        criticalMultiplier: 1.6,
        turnInitiative: 2,
        turnSpeed: 50,
        turnCharge: 100
      }
    }
  },
];
const ForceMessage = require("./ForceMessage")
module.exports = new ForceMessage("join", messages);
