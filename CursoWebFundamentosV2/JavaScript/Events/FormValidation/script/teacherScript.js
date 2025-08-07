(function(){
    'use strict';

    let txtTitle = document.getElementById("title")
    let formRegister = document.querySelector(".task_form")

    // btn.addEventListener("click", function(e){
        
    // })


    formRegister.addEventListener("submit", function(e){
        if(!txtTitle.value){
            showErrorMessage("Fill in all fields", function(){
                txtTitle.focus()
            })
            e.preventDefault()
        }
    })

    let feedbackMessage = document.getElementById("feedbackMessage")
    let feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]

    function showErrorMessage(msg, cb) {
        feedbackMessage.classList.add("show")
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg

        feedbackMessageCloseBtn.focus()

        function hideErrorMessage() {
            feedbackMessage.classList.remove("show")

            feedbackMessageCloseBtn.removeEventListener("click", hideErrorMessage)

            feedbackMessageCloseBtn.removeEventListener("keyup", pressedKeyboardOnBtn)

            // txtTitle.focus()

            if (typeof cb == "function"){
                cb()
            }
        }

        function pressedKeyboardOnBtn(e) {
            if (e.keyCode == 27) {
                hideErrorMessage()
            }
        }

        feedbackMessageCloseBtn.addEventListener("click", hideErrorMessage)

        feedbackMessageCloseBtn.addEventListener("keyup", pressedKeyboardOnBtn)
    }


    let txtDescription = document.getElementById("task")
    let containerCounter = document.getElementById("counter")
    let rest = containerCounter.getElementsByTagName("span")[0]
    let max = txtDescription.maxLength
    showNumber(max)

    function checkLength() {
        let numberLetterTyped = this.value.length
        let restCaracters = parseInt(max) - parseInt(numberLetterTyped)
        showNumber(restCaracters)
    }

    function showNumber(n) {
        rest.textContent = n
    }

    txtDescription.addEventListener("input", checkLength)

    // containerCounter.removeAttribute("style")
    containerCounter.style.display = "block"
})()