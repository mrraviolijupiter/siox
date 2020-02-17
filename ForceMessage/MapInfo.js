const messages = [
  {
    turnOrder: [2, 3, 1],
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
    characters: [
      {
        id: 1,
        name: "Reddish1",
        pawn: {
          location: { x: 1, y: 1 },
          front: "N",
          currentStats: {
            health: 10,
            damage: 3,
            movementSteps: 3,
            jumpHeight: 1,
            attackRange: [{ x: 0, y: 1 }, { x: 0, y: 2 }],
            evasionRate:  0.2,
            criticalRate: 0.17,
            criticalMultiplier: 1.5,
            turnInitiative: 1,
            turnSpeed: 20,
            turnCharge: 20
          },
        },
        color: 1,
        baseStats: {
          health: 20,
          damage: 3,
          movementSteps: 3,
          jumpHeight: 1,
          attackRange: [{ x: 0, y: 1 }, { x: 0, y: 2 }],
          evasionRate:  0.2,
          criticalRate: 0.17,
          criticalMultiplier: 1.5,
          turnInitiative: 1,
          turnSpeed: 20,
          turnCharge: 100
        }
      },
      {
        id: 2,
        name: "Blubble2",
        pawn: {
          location: { x: 8, y: 8 },
          front: "S",
          currentStats: {
            health: 15,
            damage: 4,
            movementSteps: 2,
            jumpHeight: 2,
            attackRange: [{ x: 0, y: 3 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
            evasionRate:  0.3,
            criticalRate: 0.27,
            criticalMultiplier: 1.6,
            turnInitiative: 2,
            turnSpeed: 30,
            turnCharge: 50
          }
        },
        color: 2,
        baseStats: {
          health: 15,
          damage: 4,
          movementSteps: 2,
          jumpHeight: 2,
          attackRange: [{ x: 0, y: 3 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
          evasionRate:  0.3,
          criticalRate: 0.27,
          criticalMultiplier: 1.6,
          turnInitiative: 2,
          turnSpeed: 30,
          turnCharge: 100
        }
      },
      {
        id: 3,
        name: "Greenish3",
        pawn: {
          location: { x: 1, y: 8 },
          front: "S",
          currentStats: {
            health: 30,
            damage: 4,
            movementSteps: 2,
            jumpHeight: 2,
            attackRange: [{ x: 0, y: 3 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
            evasionRate:  0.3,
            criticalRate: 0.27,
            criticalMultiplier: 1.6,
            turnInitiative: 2,
            turnSpeed: 30,
            turnCharge: 50
          }
        },
        color: 3,
        baseStats: {
          health: 30,
          damage: 4,
          movementSteps: 2,
          jumpHeight: 2,
          attackRange: [{ x: 0, y: 3 }, { x: 0, y: 2 }, { x: 1, y: 2 }],
          evasionRate:  0.3,
          criticalRate: 0.27,
          criticalMultiplier: 1.6,
          turnInitiative: 2,
          turnSpeed: 30,
          turnCharge: 100
        }
      },
    ]
  },
  {
    turnOrder: [3, 1],
    turn: {
      startReason: "timeout",
      remainingSeconds: 30.8,
      turnNumber: 5,
      characterInTurn: 1,
      canMove: true,
      canAttack: true,
      canUseSkill: true,
      canPass: true
    },
    characters: [
      {
        id: 1,
        name: "Reddish1",
        pawn: {
          location: { x: 3, y: 3 },
          front: "S",
          currentStats: {
            health: 10,
            damage: 3,
            movementSteps: 3,
            jumpHeight: 1,
            attackRange: [{ x: 0, y: 1 }, { x: 0, y: 3 }],
            evasionRate:  0.2,
            criticalRate: 0.17,
            criticalMultiplier: 1.5,
            turnInitiative: 1,
            turnSpeed: 20,
            turnCharge: 20
          },
        },
        color: 1,
        baseStats: {
          health: 20,
          damage: 3,
          movementSteps: 3,
          jumpHeight: 1,
          attackRange: [{ x: 0, y: 1 }, { x: 0, y: 3 }],
          evasionRate:  0.2,
          criticalRate: 0.17,
          criticalMultiplier: 1.5,
          turnInitiative: 1,
          turnSpeed: 20,
          turnCharge: 100
        }
      },
      {
        id: 3,
        name: "Greenswood3",
        pawn: {
          location: { x: 6, y: 6 },
          front: "N",
          currentStats: {
            health: 5,
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
        color: 3,
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
          turnSpeed: 30,
          turnCharge: 100
        }
      },
    ]
  },
];

const ForceMessage = require("./ForceMessage")
module.exports = new ForceMessage("map_info", messages);
