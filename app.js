const express = require('express');
const app = express();
const socketio = require('socket.io');
const mongoose = require('mongoose');

const expressServer = app.listen(3001);
const io = socketio(expressServer);

const Game = require('./Models/Game');

const avatars = require('./avatars');

mongoose.connect('mongodb://localhost:27017/zoophobia',
                {useNewUrlParser : true, useUnifiedTopology : true},
                ()=>{ console.log('successfully connected to database')});



io.on('connect',(socket)=>{

    // socket.on('timer', async({gameID,playerID})=>{
    //     let countDown = 5;
    //     let game = await Game.findById(gameID);
    //     let player = game.players.id(playerID);
    //     if(player.isPartyLeader){
    //         let timerID = setInterval(async()=>{
    //             if(countDown >= 0){
    //                 io.to(gameID).emit('timer',{countDown,msg : "Starting Game"});
    //                 countDown--;
    //             }
    //             else{
    //                 game.isOpen = false;
    //                 game = await game.save();
    //                 io.to(gameID).emit('updateGame',game);
    //                 startGameClock(gameID);
    //                 clearInterval(timerID);
    //             }
    //         },1000);
    //     }
    // });

    socket.on('join-game',async ({gameID : _id,nickName, animal})=>{
        try{
            let game = await Game.findById(_id);
            if(game.isOpen){
                const gameID = game._id.toString();
                socket.join(gameID);
                let player = {
                    socketID : socket.id,
                    avatar : {
                        animal : animal,
                        power : avatars[animal]
                    },
                    nickName
                }
                game.players.push(player);
                game = await game.save();
                io.to(gameID).emit('updateGame',game);
            }
        }catch(err){
            console.log(err)
        }
    })

    socket.on('create-game',async (nickName, animal)=>{
        try{
            let game = new Game();
            let player = {
                socketID : socket.id,
                isPartyLeader : true,
                avatar : {
                    animal : animal,
                    power : avatars[animal]
                },
                nickName
            }
            game.players.push(player);
            game = await game.save();
            const gameID = game._id.toString();
            socket.join(gameID);
            io.to(gameID).emit('updateGame',game);
        }catch(err){
            console.log(err);
        }
    });
});

// const startGameClock = async (gameID)=>{
//     let game = await Game.findById(gameID);
//     game.startTime = new Date().getTime();
//     game = await game.save();
//     let time = 120;

//     let timerID = setInterval(function gameIntervalFunc(){
//         if(time >= 0){
//             const formatTime = calculateTime(time);
//             io.to(gameID).emit('timer',{countDown : formatTime,msg : "Time Remaining"});
//             time--;
//         }
//         else{
//             (async ()=>{
//                 let endTime = new Date().getTime();
//                 let game = await Game.findById(gameID);
//                 let {startTime} = game;
//                 game.isOver = true;
//                 game.players.forEach((player,index)=>{
//                     if(player.WPM === -1)
//                         game.players[index].WPM = calculateWPM(endTime,startTime,player);
//                 });
//                 game = await game.save()
//                 io.to(gameID).emit('updateGame',game);
//                 clearInterval(timerID);
//             })()
//         }
//         return gameIntervalFunc;
//     }(),1000);
// }
