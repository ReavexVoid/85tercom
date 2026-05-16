let mode = "";

const sounds = {
    scp: [
        "multiplecbreaches.mp3"
    ],
    mtf: [
        "hammerdownnu7entry.mp3",
        "mazhatbeta7entry.mp3",
        "ntfepsilon11entry.mp3",
        "rrhalpha1entry.mp3"
    ]
};

function setMode(selected) {
    mode = selected;

    document.getElementById("modeTitle").innerText =
        selected.toUpperCase() + " INTERCOM PANEL";

    renderList();
}

function renderList() {
    const list = document.getElementById("list");
    list.innerHTML = "";

    sounds[mode].forEach(file => {
        const btn = document.createElement("button");
        btn.innerText = file;

        btn.onclick = () => playSound(file);

        list.appendChild(btn);
    });
}

function playSound(file) {
    const player = document.getElementById("player");
    player.src = `audio/${mode}/${file}`;
    player.play();
}
