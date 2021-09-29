// Validação do formulário de contato

var form = document.querySelector("form");

// Inputs
var email = document.getElementById("email");
var nameInput = document.getElementById("name");
var message = document.getElementById("message");

// Spans de erro
var errorName = document.querySelector(".error.name");
var errorEmail = document.querySelector(".error.email");
var errorMessage = document.querySelector(".error.message");

// Campo de nome

nameInput.addEventListener(
    "input",
    () => {
        nameInput.classList.remove('invalid'); // Remove a classe invalid ao digitar um novo falor no campo
        errorName.innerHTML = ""; // Apaga a mensagem de erro
    },
    false
);

// Campo de e-mail

email.addEventListener(
    "input",
    () => {
        email.classList.remove('invalid'); // Remove a classe invalid ao digitar um novo falor no campo
        errorEmail.innerHTML = ""; // Apaga a mensagem de erro
    },
    false
);

// Campo de mensagem

message.addEventListener(
    "input",
    () => {
        message.classList.remove('invalid'); // Remove a classe invalid ao digitar um novo falor no campo
        errorMessage.innerHTML = ""; // Apaga a mensagem de erro
    },
    false
);

form.addEventListener(
    // Ao clicar no botão de enviar
    "submit",
    (event) => {
        // Checa se o campo de nome está vazio
        if (nameInput.value == "") {
            // Exibe mensagem de erro
            errorName.innerHTML =
                "<i class='ri-error-warning-line'></i> Ei, você esqueceu de digitar o seu nome!";
            // Add efeito visual com classe invalid
            nameInput.classList.add('invalid');

            // Impede o envio do form
            event.preventDefault();
        } 

         // Checa se o campo de e-mail está vazio
         if (email.value == "") {
            // Exibe mensagem de erro
            errorEmail.innerHTML =
                "<i class='ri-error-warning-line'></i> Esse campo não pode ficar vazio!";
            // Add efeito visual com classe invalid
            email.classList.add('invalid');

            // Impede o envio do form
            event.preventDefault();

        // Checa se o e-mail informado é válido 
        } else if (!email.validity.valid) {
            errorEmail.innerHTML =
                "<i class='ri-error-warning-line'></i> Insira um endereço de e-mail válido!";
            email.classList.add('invalid');

            // Impede o envio do form
            event.preventDefault();
        }

         // Checa se o campo de mensagem está vazio
         if (message.value == "") {
            // Exibe mensagem de erro
            errorMessage.innerHTML =
                "<i class='ri-error-warning-line'></i> Digite uma mensagem bonita, por gentileza.";
            // Add efeito visual com classe invalid
            message.classList.add('invalid');

            // Impede o envio do form
            event.preventDefault();
        } 

    },
    false
);

