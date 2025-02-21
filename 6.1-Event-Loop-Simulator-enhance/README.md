# Event Loop Simulator

A visual JavaScript Event Loop simulator to help understand how the JavaScript runtime environment processes different types of tasks.

## Overview

This project provides an interactive visualization of JavaScript's event loop, call stack, and task queues to help developers understand how asynchronous operations work in JavaScript.

## Features

- Visual representation of the JavaScript runtime components:
  - Call Stack
  - Web APIs container
  - Task Queue (Macrotask Queue)
  - Microtask Queue
- Interactive buttons to add different types of tasks:
  - Synchronous tasks
  - Asynchronous tasks (setTimeout)
  - Promise-based tasks
- Step-by-step event loop execution

## Tech Stack

- HTML5
- CSS3 (with animations for visual clarity)
- JavaScript (vanilla)
- TailwindCSS for styling



## Usage

- Click "Add Sync Task" to add a synchronous operation to the call stack
- Click "Add Async Task" to simulate a setTimeout operation
- Click "Add Promise Task" to add a Promise-based operation
- Click "Run Event Loop" to see how the event loop processes tasks in the queue

## How It Works

The simulator demonstrates the core concepts of JavaScript's event loop:

1. **Call Stack**: Tracks the execution of synchronous code
2. **Web APIs**: Browser/Node.js features like setTimeout, fetch, etc.
3. **Task Queue**: Holds callbacks from completed asynchronous operations
4. **Microtask Queue**: Holds Promise callbacks with higher priority than regular tasks
5. **Event Loop**: Continuously checks if the call stack is empty, then processes microtasks before regular tasks

## Project Structure

```
event-loop-simulator/
├── index.html          # Main HTML structure
├── style.css           # CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This documentation
```

## Demo

https://i.imgur.com/ybK4oPD.mp4


## Implementation Details

The visualization uses CSS transitions and JavaScript to demonstrate:
- Task prioritization (microtasks vs macrotasks)
- The "run-to-completion" nature of the JavaScript execution model
- How asynchronous operations are scheduled and executed



## Acknowledgments

- Inspired by [Jake Archibald's talk on the Event Loop](https://www.youtube.com/watch?v=cCOL7MC4Pl0)
- Built to help JavaScript developers visualize async concepts
