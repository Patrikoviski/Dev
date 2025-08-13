 document.getElementById("txtnascimento").addEventListener("change", checkBirthday)

        function checkBirthday(e) {
            console.log(e.target.value)
            const container = document.getElementById("quantoFalta")
            const arr = e.target.value.split("-")
            console.log(arr)
            console.log(arr.length)
            if (arr.length > 2) {

                container.innerHTML = `
            <p>Falta(m) ${quantoFaltaPara(arr[1], arr[2])} dias para o seu aniversario</p>
        `
            } else {
                container.textContent = "  "
            }
        }