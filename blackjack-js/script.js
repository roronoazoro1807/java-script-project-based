class BlackjackGame {
  constructor() {
    this.deck = [];
    this.playerCards = [];
    this.dealerCards = [];
    this.isGameOver = false;

    this.hitButton = document.getElementById("hit-button");
    this.standButton = document.getElementById("stand-button");
    this.newGameButton = document.getElementById("new-game-button");
    this.messageElement = document.getElementById("message");
    this.playerCardsElement = document.getElementById("player-cards");
    this.dealerCardsElement = document.getElementById("dealer-cards");
    this.playerScoreElement = document.getElementById("player-score");
    this.dealerScoreElement = document.getElementById("dealer-score");

    this.hitButton.addEventListener("click", () => this.hit());
    this.standButton.addEventListener("click", () => this.stand());
    this.newGameButton.addEventListener("click", () => this.startNewGame());

    this.startNewGame();
  }

  createDeck() {
    const suits = ["♠", "♣", "♥", "♦"];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    this.deck = [];

    for (let suit of suits) {
      for (let value of values) {
        this.deck.push({ suit, value });
      }
    }
  }

  shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  drawCard() {
    return this.deck.pop();
  }

  calculateScore(cards) {
    let score = 0;
    let aces = 0;

    for (let card of cards) {
      if (card.value === "A") {
        aces += 1;
        score += 11;
      } else if (["K", "Q", "J"].includes(card.value)) {
        score += 10;
      } else {
        score += parseInt(card.value);
      }
    }

    while (score > 21 && aces > 0) {
      score -= 10;
      aces -= 1;
    }

    return score;
  }

  startNewGame() {
    this.createDeck();
    this.shuffleDeck();
    this.playerCards = [];
    this.dealerCards = [];
    this.isGameOver = false;

    this.playerCards.push(this.drawCard(), this.drawCard());
    this.dealerCards.push(this.drawCard(), this.drawCard());

    this.hitButton.disabled = false;
    this.standButton.disabled = false;
    this.messageElement.textContent = "";

    this.updateUI();
    this.checkForBlackjack();
  }

  hit() {
    this.playerCards.push(this.drawCard());
    this.updateUI();

    const score = this.calculateScore(this.playerCards);
    if (score > 21) {
      this.endGame("Bust! You lose!");
    }
  }

  async stand() {
    this.hitButton.disabled = true;
    this.standButton.disabled = true;

    while (this.calculateScore(this.dealerCards) < 17) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      this.dealerCards.push(this.drawCard());
      this.updateUI();
    }

    const playerScore = this.calculateScore(this.playerCards);
    const dealerScore = this.calculateScore(this.dealerCards);

    if (dealerScore > 21) {
      this.endGame("Dealer busts! You win!");
    } else if (dealerScore > playerScore) {
      this.endGame("Dealer wins!");
    } else if (dealerScore < playerScore) {
      this.endGame("You win!");
    } else {
      this.endGame("It's a tie!");
    }
  }

  checkForBlackjack() {
    const playerScore = this.calculateScore(this.playerCards);
    const dealerScore = this.calculateScore(this.dealerCards);

    if (playerScore === 21 && dealerScore === 21) {
      this.endGame("Both have Blackjack! It's a tie!");
    } else if (playerScore === 21) {
      this.endGame("Blackjack! You win!");
    } else if (dealerScore === 21) {
      this.endGame("Dealer has Blackjack! You lose!");
    }
  }

  endGame(message) {
    this.isGameOver = true;
    this.hitButton.disabled = true;
    this.standButton.disabled = true;
    this.messageElement.textContent = message;
  }

  updateUI() {
    this.playerScoreElement.textContent = this.calculateScore(this.playerCards);
    this.dealerScoreElement.textContent = this.calculateScore(this.dealerCards);

    this.playerCardsElement.innerHTML = this.playerCards
      .map(
        (card) => `<div class="card">
                <div class="card-content">
                    <div class="card-value ${
                      card.suit === "♥" || card.suit === "♦" ? "red" : "black"
                    }">${card.value}</div>
                    <div class="card-suit ${
                      card.suit === "♥" || card.suit === "♦" ? "red" : "black"
                    }">${card.suit}</div>
                </div>
            </div>`
      )
      .join("");

    this.dealerCardsElement.innerHTML = this.dealerCards
      .map(
        (card) => `<div class="card">
                <div class="card-content">
                    <div class="card-value ${
                      card.suit === "♥" || card.suit === "♦" ? "red" : "black"
                    }">${card.value}</div>
                    <div class="card-suit ${
                      card.suit === "♥" || card.suit === "♦" ? "red" : "black"
                    }">${card.suit}</div>
                </div>
            </div>`
      )
      .join("");
  }
}

// Start the game
const game = new BlackjackGame();
