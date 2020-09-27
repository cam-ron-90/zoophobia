const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    socketID : {type : String},
    isPartyLeader : {type : Boolean, default : false},
    isCurrentPlayer : {type : Boolean, default : false},
    cards : [{type : String}],
    microAgressions : [{type : String}],
    points : {type : Number, default : 0},
    avatar : {
        animal : {type : String},
        power : {type : String}
    },
    nickName : {type : String}
});

const GameSchema = new mongoose.Schema({
    cards : [{type : String}],
    avatarsAvailable : [{type : String}],
    isOpen : {type : Boolean, default : true},
    isOver : {type : Boolean, default : false},
    players : [PlayerSchema],
    startTime : {type : Number}
});

module.exports = mongoose.model('Game', GameSchema);