// 1. Create an array of todo items
const todos = [
  { title: "Do homework", done: false },
  { title: "Buy groceries", done: true },
  { title: "Clean room", done: false },
  { title: "Pay bills", done: true },
  { title: "Read a book", done: false },
  { title: "Read Quran", done: true }
];

// 2. Filter into completed tasks
const completedTasks = todos.filter(todo => todo.done);

// 3. Filter into ongoing tasks
const ongoingTasks = todos.filter(todo => !todo.done);

// 4. Display the Completed tasks
console.log("✅ Done:");
completedTasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});

// 5. Display the Ongoing tasks
console.log("\n⏳ Ongoing:");
ongoingTasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.title}`);
});
