function mt_rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
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
            column.setAttribute("id","l"+i_ligne + "c"+ i_colone)
            await(100)
            line.appendChild(column)

        }
        await(100)
        table.appendChild(line)
    }
    body.appendChild(table)
    start.classList.add("display-none")
    const td = document.querySelectorAll("td")
    setInterval(function () {
        const l = mt_rand(0,colone -1)
        const c = mt_rand(0,ligne -1)
        const verte = document.querySelector("#l"+l+"c"+ c)
        verte.classList.toggle("colorer")
        console.error(document.querySelectorAll(".colorer").length)
    }, 1000)










})