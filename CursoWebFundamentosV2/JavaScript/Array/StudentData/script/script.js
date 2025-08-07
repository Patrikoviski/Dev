(function () {
    function getIndice(indice) {
        const trHeader = document.querySelector("thead tr")
        const thsHeader = trHeader.querySelectorAll("th")
        let th
        if (indice === "average") {
            th = trHeader.querySelector(`[student-average="${indice}"]`)
        } else {
            th = trHeader.querySelector(`[student-note="${indice}"]`)
        }
        const i = [...thsHeader].indexOf(th)
        return i;
        }    

        const notes_indice = {
            n1: getIndice("n1"),
            n2: getIndice("n2"),
            n3: getIndice("n3"),
            n4: getIndice("n4"),
            average: getIndice("average")
        }

    const trs = document.querySelectorAll("tbody tr")

    let x = 0;
    while (trs[x]) {
        const tds = trs[x].querySelectorAll("td")
        const avg = window.average(
            parseFloat(tds[notes_indice.n1].textContent),
            parseFloat(tds[notes_indice.n2].textContent),
            parseFloat(tds[notes_indice.n3].textContent),
            parseFloat(tds[notes_indice.n4].textContent)
        );
        tds[notes_indice.average].textContent = avg.toFixed(2)
        x++;
    }
})()