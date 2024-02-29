function mt_rand(min, max) {
    return Math.floor(Mathandom() * (max - min + 1)) + min;
}

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
    let case_verte = 0;
    let scor = 0;
    setInterval(function () {
        const td = document.querySelectorAll("td");
        const l = mt_rand(0, ligne - 1);
        const c = mt_rand(0, colonne - 1);
        const verte = document.querySelector("#l" + l + "c" + c);
        
        // Probabilité de 1 chance sur 3 pour que la case soit rouge
        if (Math.random() < 1/3) {
            verte.classList.add("rouge");
        } else {
            verte.classList.add("colorer");
            case_verte++;
        }
    }, 1000);

    document.querySelectorAll("td").forEach(td => {
        td.addEventListener("click", () => {
            let id = td.id;
            if (document.querySelector("#" + id).classList.contains("colorer")) {
                document.querySelector("#" + id).classList.remove("colorer")
                scor++;
                case_verte--;
            } else if (document.querySelector("#" + id).classList.contains("rouge")) {
                document.querySelector("#" + id).classList.remove("rouge");
                scor -= 5; // Retirer 5 points
            } else {
                scor--;
            }
        });
    });
    setInterval(() => {
        if (case_verte >= 5) {
            window.location.href = "./lose.html";
        } else if (scor >= 25) {
            window.location.href = "./win.html";
        }
        const h1 = document.querySelector("h1").innerText = "Score : " + scor + "/25"

    }, 100);
});
