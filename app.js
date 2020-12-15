const express = require('express');
const app = express();
const socketio = require('socket.io');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const expressServer = app.listen(PORT, () =>
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
  process.env.MONGO_URI || 'mongodb://localhost:27017/zoophobia',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('successfully connected to database');
  }
);

// ----------------------------------------------------------- //

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
          player.isCurrentPlayer = true;
          game = await game.save();
          io.to(gameID).emit('updateGame', game);
          startGame(gameID);
          clearInterval(timerID);
        }
      }, 1000);
    }
  });

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

      const gameID = game._id.toString();
      socket.join(gameID);
      io.to(gameID).emit('update-game', game);
    } catch (err) {
      console.log(err);
    }
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
        chosenPlayer.winningCards.push([card, game.promptCards[0]]);

        chosenPlayer.responseCards = chosenPlayer.responseCards.filter(
          (playerCard) => playerCard.text !== card.text
        );

        cleanChosenCards(game.players);
        chosenPlayer.points += 1;
      } else {
        chosenPlayer.unmatchCards.push([card, game.promptCards[0]]);
        cleanChosenCards(game.players);
      }

      game.animationMatchingCards = [
        chosenPlayer.nickName,
        card.backImg,
        game.promptCards[0].backImg,
      ];
      game.animationMatching = true;
      game.isRoundFinished = true;
      game = await game.save();
      io.to(gameID).emit('update-game', game);
    }
  );

  socket.on('new-round', async ({ playerData: { player, gameID } }) => {
    let game = await Game.findById(gameID);
    let currentPlayer = game.players.id(player._id);

    game.animationMatching = false;
    cleanArray(game.animationMatchingCards);
    game.isRoundFinished = false;
    game.promptCards.shift();

    let players = game.players;
    let pos = game.players.indexOf(currentPlayer);

    if (game.promptCards.length > 0) {
      currentPlayer.isCurrentPlayer = false;
      if (pos + 1 < players.length) {
        players[pos + 1].isCurrentPlayer = true;
      } else {
        players[0].isCurrentPlayer = true;
      }
    } else {
      game.isOver = true;
    }

    game = await game.save();
    io.to(gameID).emit('update-game', game);
  });

  // Chat Function
  // socket.emit('your id', socket.id);
  socket.on('send message', (body) => {
    io.emit('message', body);
  });
});

const startGame = async (gameID) => {
  // game.startTime = new Date().getTime();
  try {
    let game = await Game.findById(gameID);
    if (!game.isOpen) {
      let cards = shuffleArray(responseCards);
      dealCards(cards, game.players);
      game = await game.save();
      io.to(gameID).emit('update-game', game);
      console.log('game started NOW:');
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
        cards[0].playerID = player._id;
        player.responseCards.push(cards[0]);
        cards.shift();
      }
    });
    dealCards(cards, players);
  }
};

const cleanChosenCards = (players) => {
  players.forEach((player) => {
    player.currentChosenCard.shift();
  });
};

const cleanArray = (A) => {
  A.length = 0;
};
