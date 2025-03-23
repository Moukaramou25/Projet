document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll("nav ul li a");
    menuItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            this.style.color = "#00d1b2 ";
        });

        item.addEventListener("mouseout", function() {
            this.style.color = "#fff";
        });
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let prenom = document.getElementById('prenom').value.trim();
    let nom = document.getElementById('nom').value.trim();
    let sujet = document.getElementById('sujet').value.trim();
    let message = document.getElementById('message').value.trim();
    
    if (prenom === '' || nom === '' || sujet === '' || message === '') {
        alert('Veuillez remplir tous les champs !');
        return;
    }
    alert('Message envoyé avec succès !');
    document.getElementById('contactForm').reset();
});