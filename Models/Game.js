const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    socketID : {type : String},
    isPartyLeader : {type : Boolean, default : false},
    isCurrentPlayer : {type : Boolean, default : false},
    responseCards : {type : Array},
    winningCards : {type : Array},
    unmatchCards : {type : Array},
    points : {type : Number, default : 0},
    nickName : {type : String}
});

const GameSchema = new mongoose.Schema({
    promptCards : {type : Array},
    isOpen : {type : Boolean, default : true},
    isOver : {type : Boolean, default : false},
    players : [PlayerSchema],
    startTime : {type : Number}
});

module.exports = mongoose.model('Game', GameSchema);
