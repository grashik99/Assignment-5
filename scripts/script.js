// Background color change
document.getElementById('theme-btn').addEventListener("click", () => {
    const themes = ["bg-blue-600", "bg-red-600", "bg-yellow-600", "bg-emerald-600", "bg-pink-600", "bg-rose-600"];
    const presentBg = document.getElementById('body').classList[1];
    const unusedThemes = themes.filter(x => x !== document.getElementById('body').classList[1]);
    document.getElementById('body').classList.replace(presentBg, unusedThemes[Math.floor(Math.random() * unusedThemes.length)])
});

// date section
const date = new Date();
const spited = date.toString().split(" ");
document.getElementById('today').innerText = spited[0];
document.getElementById('year').innerText = `${spited[1]} ${spited[2]} ${spited[3]}`;

// discover section
document.getElementById('discover').addEventListener('click', () => {
    window.location.href = 'question.html';
    console.log("clicked")
})

// Cards-1
document.getElementById('card-1-btn').addEventListener("click", () => {
    const remainingTask = document.getElementById("remaining-task")
    const completedTask = document.getElementById("completed-task")
    const historyContainer = document.getElementById("history-container")
    const remainingTaskNumber = parseInt(remainingTask.innerText)
    const completedTaskNumber = parseInt(completedTask.innerText)
    remainingTask.innerText = remainingTaskNumber - 1;
    completedTask.innerText = completedTaskNumber + 1;
    const title = document.getElementById('card-1-title').innerText;
    const p = document.createElement("h1");
    const date = new Date();
    const spited = date.toString().split(" ");
    p.innerText = `You have completed the task ${title} at ${spited[4]}`;
    p.classList.add('bg-green-500', 'rounded-xl', 'p-2', 'text-white', 'mb-2');
    historyContainer.appendChild(p);
    document.getElementById('card-1-btn').disabled = true;
    alert(title + ' ' + 'added successful')
    if (remainingTaskNumber === 1) {
        alert('All tasked completed successfully')
    }
});
// Cards-2
document.getElementById('card-2-btn').addEventListener("click", () => {
    const remainingTask = document.getElementById("remaining-task")
    const completedTask = document.getElementById("completed-task")
    const historyContainer = document.getElementById("history-container")
    const remainingTaskNumber = parseInt(remainingTask.innerText)
    const completedTaskNumber = parseInt(completedTask.innerText)
    remainingTask.innerText = remainingTaskNumber - 1;
    completedTask.innerText = completedTaskNumber + 1;
    const title = document.getElementById('card-2-title').innerText;
    const p = document.createElement("h1");
    const date = new Date();
    const spited = date.toString().split(" ");
    p.innerText = `You have completed the task ${title} at ${spited[4]}`;
    p.classList.add('bg-green-500', 'rounded-xl', 'p-2', 'text-white', 'mb-2');
    historyContainer.appendChild(p);
    document.getElementById('card-2-btn').disabled = true;
    alert(title + ' ' + 'added successful')
    console.log(spited);
    if (remainingTaskNumber === 1) {
        alert('All tasked completed successfully')
    }
});
// Cards-3
document.getElementById('card-3-btn').addEventListener("click", () => {
    const remainingTask = document.getElementById("remaining-task")
    const completedTask = document.getElementById("completed-task")
    const historyContainer = document.getElementById("history-container")
    const remainingTaskNumber = parseInt(remainingTask.innerText)
    const completedTaskNumber = parseInt(completedTask.innerText)
    remainingTask.innerText = remainingTaskNumber - 1;
    completedTask.innerText = completedTaskNumber + 1;
    const title = document.getElementById('card-3-title').innerText;
    const p = document.createElement("h1");
    const date = new Date();
    const spited = date.toString().split(" ");
    p.innerText = `You have completed the task ${title} at ${spited[4]}`;
    p.classList.add('bg-green-500', 'rounded-xl', 'p-2', 'text-white', 'mb-2');
    historyContainer.appendChild(p);
    document.getElementById('card-3-btn').disabled = true;
    alert(title + ' ' + 'added successful')
    if (remainingTaskNumber === 1) {
        alert('All tasked completed successfully')
    }
});
// Cards-4
document.getElementById('card-4-btn').addEventListener("click", () => {
    const remainingTask = document.getElementById("remaining-task")
    const completedTask = document.getElementById("completed-task")
    const historyContainer = document.getElementById("history-container")
    const remainingTaskNumber = parseInt(remainingTask.innerText)
    const completedTaskNumber = parseInt(completedTask.innerText)
    remainingTask.innerText = remainingTaskNumber - 1;
    completedTask.innerText = completedTaskNumber + 1;
    const title = document.getElementById('card-4-title').innerText;
    const p = document.createElement("h1");
    const date = new Date();
    const spited = date.toString().split(" ");
    p.innerText = `You have completed the task ${title} at ${spited[4]}`;
    p.classList.add('bg-green-500', 'rounded-xl', 'p-2', 'text-white', 'mb-2');
    historyContainer.appendChild(p);
    document.getElementById('card-4-btn').disabled = true;
    alert(title + ' ' + 'added successful')
    if (remainingTaskNumber === 1) {
        alert('All tasked completed successfully')
    }
});
// Cards-5
document.getElementById('card-5-btn').addEventListener("click", () => {
    const remainingTask = document.getElementById("remaining-task")
    const completedTask = document.getElementById("completed-task")
    const historyContainer = document.getElementById("history-container")
    const remainingTaskNumber = parseInt(remainingTask.innerText)
    const completedTaskNumber = parseInt(completedTask.innerText)
    remainingTask.innerText = remainingTaskNumber - 1;
    completedTask.innerText = completedTaskNumber + 1;
    const title = document.getElementById('card-5-title').innerText;
    const p = document.createElement("h1");
    const date = new Date();
    const spited = date.toString().split(" ");
    p.innerText = `You have completed the task ${title} at ${spited[4]}`;
    p.classList.add('bg-green-500', 'rounded-xl', 'p-2', 'text-white', 'mb-2');
    historyContainer.appendChild(p);
    document.getElementById('card-5-btn').disabled = true;
    alert(title + ' ' + 'added successful')
    if (remainingTaskNumber === 1) {
        alert('All tasked completed successfully')
    }
});
// Cards-6
document.getElementById('card-6-btn').addEventListener("click", () => {
    const remainingTask = document.getElementById("remaining-task")
    const completedTask = document.getElementById("completed-task")
    const historyContainer = document.getElementById("history-container")
    const remainingTaskNumber = parseInt(remainingTask.innerText)
    const completedTaskNumber = parseInt(completedTask.innerText)
    remainingTask.innerText = remainingTaskNumber - 1;
    completedTask.innerText = completedTaskNumber + 1;
    const title = document.getElementById('card-6-title').innerText;
    const p = document.createElement("h1");
    const date = new Date();
    const spited = date.toString().split(" ");
    p.innerText = `You have completed the task ${title} at ${spited[4]}`;
    p.classList.add('bg-green-500', 'rounded-xl', 'p-2', 'text-white', 'mb-2');
    historyContainer.appendChild(p);
    document.getElementById('card-6-btn').disabled = true;
    alert(title + ' ' + 'added successful')
    if (remainingTaskNumber === 1) {
        alert('All tasked completed successfully')
    }
});

document.getElementById('clear-history').addEventListener('click', ()=>{
    document.getElementById('history-container').innerHTML = ''
})