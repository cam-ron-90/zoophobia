const express = require('express');
const app = express();
const socketio = require('socket.io');
const mongoose = require('mongoose');

const expressServer = app.listen(3001, () =>
  console.log('server is running on port 3001')
);
const io = socketio(expressServer);

const Game = require('./Models/Game');

const promptCards = require('./promptCards');
const responseCards = require('./responseCards');
console.log(responseCards.length);

// mongoose.connect(
//   'mongodb+srv://cam-r**:**@cluster0.rtujv.mongodb.net/zoophobia?retryWrites=true&w=majority',
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log('successfully connected to database');
//   }
// );

mongoose.connect(
  'mongodb://localhost:27017/zoophobia',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('successfully connected to database');
  }
);

// ------ PROMPT CARDS -------
// 1. create array of prompt cards for server
// 2. shuffle array and push to Game.cards
// 3. each turn you take the last card from Game.cards to display
// 4. winning response player takes prompt card from Game.cards to Player.cards
// 5. if any values match they get a point

// ------- QUESTIONS ---------
// 1. Should cards Object carry graphics for the card or is that keft to front end?

io.on('connect', (socket) => {
  // Timer and prepare to start game if player is Party leader
  socket.on('timer', async ({ gameID, playerID }) => {
    let countDown = 3;
    let game = await Game.findById(gameID);
    let player = game.players.id(playerID);
    if (player.isPartyLeader) {
      let timerID = setInterval(async () => {
        if (countDown >= 0) {
          io.to(gameID).emit('timer', { countDown, msg: 'Starting Game' });
          countDown--;
        } else {
          game.isOpen = false;
          game = await game.save();
          io.to(gameID).emit('updateGame', game);
          startGame(gameID);
          clearInterval(timerID);
        }
      }, 1000);
    }
  });

  // socket.on('deal-cards', async ({ gameID: _id }) => {
  //   try {
  //     let game = await Game.findById(_id);
  //     if (game.isOpen) {
  //       const gameID = game._id.toString();
  //       let cards = shuffleArray(responseCards);
  //       dealCards(card, game.players);
  //       game = await game.save();
  //       io.to(gameID).emit('update-game', game);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // });

  socket.on('join-game', async ({ gameID: _id, nickName }) => {
    try {
      let game = await Game.findById(_id);
      if (game.isOpen) {
        const gameID = game._id.toString();
        socket.join(gameID);
        let player = {
          socketID: socket.id,
          nickName,
        };
        game.players.push(player);
        game = await game.save();
        io.to(gameID).emit('update-game', game);
      }
    } catch (err) {
      console.log(err);
    }
  });

  socket.on('create-game', async (nickName) => {
    try {
      let game = new Game();
      shuffleArray(promptCards).forEach((prompt) =>
        game.promptCards.push(prompt)
      );
      let player = {
        socketID: socket.id,
        isPartyLeader: true,
        nickName,
      };
      // console.log(player);
      game.players.push(player);
      game = await game.save();

      console.log(game.promptCards);

      const gameID = game._id.toString();
      socket.join(gameID);
      // console.log(game);
      io.to(gameID).emit('update-game', game);
    } catch (err) {
      console.log(err);
    }
  });

  // Chat Function
  // socket.emit('your id', socket.id);
  socket.on('send message', (body) => {
    io.emit('message', body);
  });

  socket.on(
    'card-chosen-by-player',
    async ({ card, playerData: { player, gameID } }) => {
      let game = await Game.findById(gameID);
      let currentPlayer = game.players.id(player._id);

      if (currentPlayer.currentChosenCard.length === 0) {
        currentPlayer.currentChosenCard.push(card);
      } else {
        currentPlayer.currentChosenCard.push(card);
        currentPlayer.currentChosenCard.shift();
      }
      console.log(currentPlayer.currentChosenCard);
      game = await game.save();
      io.to(gameID).emit('update-game', game);
    }
  );

  socket.on(
    'final-chosen-card',
    async ({ card, playerData: { player, gameID } }) => {
      let game = await Game.findById(gameID);
      let chosenPlayer = game.players.id(card.playerID);

      if (game.promptCards[0].item === card.item) {
        chosenPlayer.winningCards.push([card, game.promptCards[0]);
        chosenPlayer.currentChosenCard.shift();
        game.promptCards.shift();
        player.points += 1
      } else {
        chosenPlayer.unmatchCards.push([card, game.promptCards[0]]);
        chosenPlayer.currentChosenCard.shift();
        game.promptCards.shift();
      }
      console.log(chosenPlayer.currentChosenCard);
      game.isRoundFinished = true;
      game = await game.save();
      io.to(gameID).emit('update-game', game);
    }
  );

  socket.on(
    'new-round',
    async ({ card, playerData: { player, gameID } }) => {
      let game = await Game.findById(gameID);
      let currentPlayer = game.players.id(card.player._id);

      game.isRoundFinished = false;

      // if (game.promptCards[0].item === card.item) {
      //   chosenPlayer.winningCards.push([card, game.promptCards[0]);
      //   chosenPlayer.currentChosenCard.shift();
      //   game.promptCards.shift();
      //   player.points += 1
      // } else {
      //   chosenPlayer.unmatchCards.push([card, game.promptCards[0]]);
      //   chosenPlayer.currentChosenCard.shift();
      //   game.promptCards.shift();
      // }
      game = await game.save();
      io.to(gameID).emit('update-game', game);
    }
  );

  //
});

const startGame = async (gameID) => {
  // let game = await Game.findById(gameID);
  // game.startTime = new Date().getTime();
  // game = await game.save();
  // console.log('game started:', game);
  try {
    let game = await Game.findById(gameID);
    if (!game.isOpen) {
      // const gameID = game._id.toString();
      let cards = shuffleArray(responseCards);
      // console.log(cards);
      dealCards(cards, game.players);
      game = await game.save();
      io.to(gameID).emit('update-game', game);
      console.log('game started NOW:');
      // console.log(game.players);
      // console.log(JSON.stringify(game.players[0].responseCards[0]));
    }
  } catch (err) {
    console.log(err);
  }
};

const shuffleArray = (arr) =>
  arr
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

const dealCards = (cards, players) => {
  if (cards.length > 0) {
    players.forEach((player, index) => {
      if (cards.length > 0) {
        cards[0].playerID = player._id
        player.responseCards.push(cards[0]);
        cards.shift();
      }
    });
    dealCards(cards, players);
  }
};
