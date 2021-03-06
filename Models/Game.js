const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  socketID: { type: String },
  isPartyLeader: { type: Boolean, default: false },
  isCurrentPlayer: { type: Boolean, default: false },
  responseCards: { type: Array, default: [] },
  currentChosenCard: { type: Array, default: [] },
  winningCards: { type: Array, default: [] },
  unmatchCards: { type: Array, default: [] },
  points: { type: Number, default: 0 },
  nickName: { type: String },
});

const GameSchema = new mongoose.Schema({
  promptCards: { type: Array },
  isRoundFinished: { type: Boolean, default: false },
  isOpen: { type: Boolean, default: true },
  isOver: { type: Boolean, default: false },
  players: [PlayerSchema],
  startTime: { type: Number },
  animationMatching: { type: Boolean, default: false },
  animationMatchingCards: { type: Array, default: ['', '', ''] },
});

module.exports = mongoose.model('Game', GameSchema);
