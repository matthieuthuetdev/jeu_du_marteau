const ligne = 5
const colone = 5
const start = document.querySelector("#start")
start.addEventListener("click", function () {
    const body = document.querySelector("body")
    const table = document.createElement("table")
    for (let i_ligne = 0; i_ligne < ligne; i_ligne++) {
        const line = document.createElement("tr")
        for (let i_colone = 0; i_colone < colone; i_colone++) {
            const column = document.createElement("td")
            column.setAttribute("id", i_ligne + "," + i_colone)
            line.appendChild(column)

        }
        table.appendChild(line)
    }
    body.appendChild(table)
    start.classList.add("display-none")
setInterval(1,function() {
    
})










})