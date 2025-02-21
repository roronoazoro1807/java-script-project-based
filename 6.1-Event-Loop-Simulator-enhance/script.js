// Selecting UI elements
const callStack = document.getElementById("callStack");
const webApis = document.getElementById("webApis");
const taskQueue = document.getElementById("taskQueue");
const microtaskQueue = document.getElementById("microtaskQueue");

const syncTaskBtn = document.getElementById("syncTask");
const asyncTaskBtn = document.getElementById("asyncTask");
const promiseTaskBtn = document.getElementById("promiseTask");
const runLoopBtn = document.getElementById("runLoop");

let callStackTasks = [];
let webApiTasks = [];
let taskQueueTasks = [];
let microtaskQueueTasks = [];

// Function to update the UI
function updateUI() {
  updateList(callStack, callStackTasks);
  updateList(webApis, webApiTasks);
  updateList(taskQueue, taskQueueTasks);
  updateList(microtaskQueue, microtaskQueueTasks);
}

// Function to update a list
function updateList(element, tasks) {
  element.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.className = "task show";
    li.innerHTML = formatTaskLabel(task);

    setTimeout(() => li.classList.add("show"), index * 100);
    element.appendChild(li);
  });
}

//  Function to format task labels (adds color-coded priority labels)
function formatTaskLabel(task) {
  if (task.includes("Microtask")) {
    return `<span class="label microtask-label">Microtask</span> ${task}`;
  } else if (task.includes("Async")) {
    return `<span class="label macrotask-label">Macrotask</span> ${task}`;
  }
  return `<span class="label sync-label">Sync</span> ${task}`;
}

//  Synchronous Task
syncTaskBtn.addEventListener("click", () => {
  console.log(" Sync Task added to Call Stack");
  callStackTasks.push("Sync Task");
  updateUI();

  setTimeout(() => {
    console.log(" Sync Task executed & removed");
    removeTask(callStackTasks);
  }, 1000);
});

//  Asynchronous Task (setTimeout)
asyncTaskBtn.addEventListener("click", () => {
  console.log(" Async Task added to Web APIs");
  addAnimatedTask(webApiTasks, "Async Task (setTimeout)", "move-right");

  setTimeout(() => {
    console.log(" Async Task moved to Task Queue");
    removeTask(webApiTasks);
    addAnimatedTask(taskQueueTasks, "Callback from setTimeout", "move-down");
  }, 2000);
});

//  Microtask (Promise)
promiseTaskBtn.addEventListener("click", () => {
  console.log(" Promise Task added to Web APIs");
  addAnimatedTask(webApiTasks, "Promise Task", "move-right");

  Promise.resolve().then(() => {
    setTimeout(() => {
      console.log("⚡ Microtask (Promise then) added to Microtask Queue");
      removeTask(webApiTasks);
      addAnimatedTask(
        microtaskQueueTasks,
        "Microtask (Promise then)",
        "move-down"
      );
    }, 500);
  });
});

//  Event Loop Processing
runLoopBtn.addEventListener("click", () => {
  if (microtaskQueueTasks.length > 0) {
    console.log("⚡ Processing Microtask from Microtask Queue");
    processTask(microtaskQueueTasks, "move-up");
  } else if (taskQueueTasks.length > 0) {
    console.log(" Processing Task from Task Queue");
    processTask(taskQueueTasks, "move-up");
  }
});

//  Utility Functions

function addAnimatedTask(taskArray, task, animationClass) {
  taskArray.push(task);
  updateUI();

  setTimeout(() => {
    let taskEl = document.querySelector(
      `#${getListId(taskArray)} .task:last-child`
    );
    if (taskEl) taskEl.classList.add(animationClass);
  }, 100);
}

function removeTask(taskArray) {
  if (taskArray.length > 0) {
    let task = document.querySelector(".task.show");
    if (task) {
      task.classList.add("remove");
      setTimeout(() => {
        taskArray.shift();
        updateUI();
      }, 400);
    }
  }
}

function processTask(queue, animationClass) {
  if (queue.length > 0) {
    let task = queue.shift();
    callStackTasks.push(task);
    updateUI();

    setTimeout(() => {
      let taskEl = document.querySelector("#callStack .task:last-child");
      if (taskEl) taskEl.classList.add(animationClass);
    }, 100);

    setTimeout(() => {
      removeTask(callStackTasks);
    }, 1000);
  }
}

function getListId(array) {
  if (array === callStackTasks) return "callStack";
  if (array === webApiTasks) return "webApis";
  if (array === taskQueueTasks) return "taskQueue";
  if (array === microtaskQueueTasks) return "microtaskQueue";
  return "";
}

// Initialize UI
updateUI();
