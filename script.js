function mt_rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ligne = 5;
const colonne = 5;
let score = 0;

const start = document.querySelector("#start");

start.addEventListener("click", function () {
    const body = document.querySelector("body");
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
    body.appendChild(table);
    start.classList.add("display-none");

    const tds = document.querySelectorAll("td");
    let cases_verte = [];

    let temps = setInterval(function () {
        if (cases_verte.length < 5 && score < 25) {
            const l = mt_rand(0, colonne - 1);
            const c = mt_rand(0, ligne - 1);
            const verte = document.querySelector("#l" + l + "c" + c);
            verte.classList.add("colorer");
            cases_verte.push(verte);
        }
    }, 1000);

    const h1 = document.querySelector("h1");

    tds.forEach(td => {
        td.addEventListener("click", function () {
            let id = td.id;
            let click = document.querySelector("#" + id);
            if (click.classList.contains("colorer")) {
                click.classList.remove("colorer");
                score++;
                h1.innerText = score;
                if (score === 25 || cases_verte.length === 5) {
                    clearInterval(temps);
                }
            } else {
                score--;
                h1.innerText = score;
            }
        });
    });
});
