const input = document.getElementById("email")
const feedback = document.getElementById("newsletterFeedback")


function registerEmail() {
   let email = input.value
    
   if (input.value == "gatinhadasilva@gmail.com") {
      feedback.innerHTML = `<p style="background-color: rgb(0 0 0);">${email} foi registrado<br> oie <b style="color: red;">kamily</b> <3</p>`
   } else {
      feedback.innerHTML = `<p>${email} was registed</p>`
   }
}