# Blackjack Game

A simple web-based implementation of the classic Blackjack card game using HTML, CSS, and JavaScript.

## Features

- Interactive gameplay with Hit, Stand, and New Game options
- Real-time score calculation
- Visual card representation with suits and values
- Dealer AI that follows standard casino rules (hits on 16, stands on 17)
- Automatic detection of Blackjack and bust conditions
- Responsive design that works on different screen sizes

## Game Rules

- The goal is to beat the dealer by getting a hand value closer to 21 without going over
- Number cards (2-10) are worth their face value
- Face cards (J, Q, K) are worth 10
- Aces are worth 11 but can be reduced to 1 to prevent busting
- The dealer must hit on 16 and stand on 17


## Technical Implementation

### HTML Structure
- Container-based layout with separate sections for dealer and player hands
- Score display for both dealer and player
- Control buttons for game actions
- Message area for game status updates

### CSS Features
- Clean, modern design with a green table-like background
- Card styling with hover effects
- Color-coded suits (red for hearts/diamonds, black for spades/clubs)
- Responsive layout that adapts to different screen sizes
- Disabled button states for better user experience

### JavaScript Components

#### BlackjackGame Class
The main game logic is encapsulated in the `BlackjackGame` class with the following key methods:

- `createDeck()`: Generates a standard 52-card deck
- `shuffleDeck()`: Randomizes card order using Fisher-Yates algorithm
- `calculateScore()`: Computes hand value with special handling for aces
- `hit()`: Adds a card to the player's hand
- `stand()`: Triggers dealer's turn and determines winner
- `checkForBlackjack()`: Checks for natural blackjack conditions
- `updateUI()`: Refreshes the visual display of cards and scores


## Future Improvements

Potential enhancements could include:
- Adding betting functionality
- Implementing split and double down options
- Adding sound effects
- Saving game statistics
- Multiplayer support
- Animation effects for card dealing

## Give it a try!👍

![ZachGalifianakisDfxGIF](https://github.com/user-attachments/assets/48a0164e-b1d1-4fae-8136-102d5c30c050)
