function validateForm() {
    var valid = true;
    resetErrorMessages();

    // Validation du champ Nom
    var nom = document.getElementById("nom").value;
    if (nom === "") {
        document.getElementById("error-nom").textContent = "Le champ Nom est obligatoire.";
        valid = false;
    }

    // Validation du champ Prénom
    var prenom = document.getElementById("prenom").value;
    if (prenom === "") {
        document.getElementById("error-prenom").textContent = "Le champ Prénom est obligatoire.";
        valid = false;
    }

    // Validation du champ Sexe
    var sexeMasculin = document.getElementById("masculin").checked;
    var sexeFeminin = document.getElementById("feminin").checked;
    if (!sexeMasculin && !sexeFeminin) {
        document.getElementById("error-sexe").textContent = "Le champ Sexe est obligatoire.";
        valid = false;
    }

    // Validation du champ Date de Naissance
    var dateNaissance = document.getElementById("date_naissance").value;
    if (dateNaissance === "") {
        document.getElementById("error-date_naissance").textContent = "Le champ Date de Naissance est obligatoire.";
        valid = false;
    }

    // Validation du champ Code Postal
    var codePostal = document.getElementById("code_postal").value;
    if (codePostal === "") {
        document.getElementById("error-code_postal").textContent = "Le champ Code Postal est obligatoire.";
        valid = false;
    } else {
        // Expression régulière pour valider le code postal (5 chiffres)
        var codePostalPattern = /^\d{5}$/;
        if (!codePostalPattern.test(codePostal)) {
            document.getElementById("error-code_postal").textContent = "Le code postal doit contenir 5 chiffres.";
            valid = false;
        }
    }

    // Validation du champ Email
    var email = document.getElementById("email").value;
    if (email === "") {
        document.getElementById("error-email").textContent = "Le champ Email est obligatoire.";
        valid = false;
    } else {
        // Expression régulière pour valider l'email
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            document.getElementById("error-email").textContent = "Veuillez entrer une adresse email valide.";
            valid = false;
        }
    }

    // ... (autres validations)

    // Validation de l'acceptation du traitement
    var accepteTraitement = document.getElementsByName("accepte_traitement")[0].checked;
    if (!accepteTraitement) {
        alert("Veuillez accepter le traitement informatique de ce formulaire.");
        valid = false;
    }

    return valid;
}

function resetErrorMessages() {
    var errorElements = document.getElementsByClassName("error");
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = "";
    }
}