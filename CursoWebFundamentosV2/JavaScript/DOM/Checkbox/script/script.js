const txtEmail = document.getElementById("email")
const txtName = document.getElementById("name")
const button = document.getElementById("btn")
const contract = document.getElementById("test")
contract.style.display = 'none'
button.disabled = true;


function showContractOnBlur() {
    if (txtName.value.trim() !== '' && txtEmail.value.trim() !== '') {
        contract.style.display = 'flex';
    } else {
        contract.style.display = 'none';
    }
}

// Esconde a div sempre que o usuário digita

function hideContractOnInput() {
    contract.style.display = 'none';
}

txtName.addEventListener('input', hideContractOnInput);
txtEmail.addEventListener('input', hideContractOnInput);
txtName.addEventListener('blur', showContractOnBlur);
txtEmail.addEventListener('blur', showContractOnBlur);


function checkedTest() {
    const check = document.getElementById("contract").checked
    
    // if (check) {
    //     button.disabled = false
    // } 
    // else {
    //     button.disabled = true
    // }
    
    button.disabled = !check
}


function emailEdit() {
    const check = document.getElementById("contract").checked
    const area = document.getElementById("area")
    txtEmail.disabled = true
    txtName.disabled = true
    button.disabled = true
    check.disabled = true
    area.disabled = true
    contract.style.display = 'none'

    if (txtName.value == "Kamily" && txtEmail.value == "gatinhadasilva@gmail.com") {
        alert("oie kamily <3 <3")
    }
    else {
        alert(`Hello ${txtName.value}, ${txtEmail.value} was registered successfully!`)
    }
}