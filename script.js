function mt_rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let sound_right = false;

const sound_on = document.querySelector("#sound_on");

sound_on.addEventListener("click", function () {
    sound_on.classList.add("display-none");
    sound_right = true;
    const sound = new Audio("./audio/sound.mp3");
    sound.play();
});

const ligne = 5;
const colonne = 5;
const start = document.querySelector("#start");

start.addEventListener("click", function () {
    const table = document.createElement("table");
    for (let i_ligne = 0; i_ligne < ligne; i_ligne++) {
        const line = document.createElement("tr");
        for (let i_colonne = 0; i_colonne < colonne; i_colonne++) {
            const column = document.createElement("td");
            column.setAttribute("id", "l" + i_ligne + "c" + i_colonne);
            line.appendChild(column);
        }
        table.appendChild(line);
    }
    document.body.appendChild(table);
    start.classList.add("display-none");
    let cases_verte = 0;
    let scor = 0;
    setInterval(function () {
        const td = document.querySelectorAll("td");
        const l = mt_rand(0, ligne - 1);
        const c = mt_rand(0, colonne - 1);
        const focus = document.querySelector("#l" + l + "c" + c);
        if (mt_rand(1, 3) !== 3) {
            cases_verte++;
            if (focus.classList.contains("cases_rouge")) {
                focus.classList.remove("cases_rouge");
            }
            focus.classList.add("cases_verte");
        } else {
            if (focus.classList.contains("cases_verte")) {
                focus.classList.remove("cases_verte");
            }
            focus.classList.add("cases_rouge");
        }
        if (sound_right) {
            const apparition_case_colorer = new Audio("./audio/apparition_case_colorer.mp3");
            apparition_case_colorer.play();
        }
    }, 1000);

    document.querySelectorAll("td").forEach(td => {
        td.addEventListener("click", () => {
            let id = td.id;
            if (document.querySelector("#" + id).classList.contains("cases_verte")) {
                document.querySelector("#" + id).classList.remove("cases_verte");
                scor++;
                cases_verte--;
                if (sound_right) {
                    const case_verte = new Audio("./audio/case_verte.mp3");
                    case_verte.play();
                }
            } else if (document.querySelector("#" + id).classList.contains("cases_rouge")) {
                document.querySelector("#" + id).classList.remove("cases_rouge");
                scor = scor - 5;
                if (sound_right) {
                    const case_rouge = new Audio("./audio/case_rouge.mp3");
                    case_rouge.play();
                }
            } else {
                scor--;
                if (sound_right) {
                    const case_vide = new Audio("./audio/case_vide.wav");
                    case_vide.play();
                }
            }
            const h1 = document.querySelector("h1").innerText = "Score : " + scor + "/25";
        });
    });

    setInterval(() => {
        if (cases_verte >= 5) {
            window.location.href = "./lose.html";
        } else if (scor >= 25) {
            window.location.href = "./win.html";
        } else if (scor <= -5) {
            window.location.href = "./lose.html";
        }
    }, 100);
});
