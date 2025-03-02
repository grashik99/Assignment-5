// Background color change
document.getElementById('theme-btn').addEventListener("click", ()=>{
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
document.getElementById('discover').addEventListener('click', ()=>{
    window.location.href= '../question.html';
    console.log("clicked")
})

const div = document.createElement('div')