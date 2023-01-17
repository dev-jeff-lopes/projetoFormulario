function validateForm() {
    var form = document.getElementById("myForm");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var cpf = document.getElementById("cpf");
    var password = document.getElementById("password");

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var cpfError = document.getElementById("cpfError");
    var passwordError = document.getElementById("passwordError");
    var sucesso = document.getElementById("sucesso")
    var isValid = true;

    if (name.value === "") {
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    if (email.value === "") {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    if (phone.value === "") {
        phoneError.style.display = "block";
        isValid = false;
    } else {
        phoneError.style.display = "none";
    }

    if (cpf.value === "") {
        cpfError.style.display = "block";
        isValid = false;
    } else {
        cpfError.style.display = "none";
    }

    if (password.value === "") {
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (password.value || cpf || phone.value || email.value || name.value == "") {
        document.getElementById("erro").innerText = "Campos obrigatórios não registrados."

    } else {
        sucesso.style.display = "block";
    }

   function sucesso() {
        if (password.value && cpf && phone.value && email.value && name.value != "") {
            return alert("oi")
        }
    }
}


sucesso()

