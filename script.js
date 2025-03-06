 // Créer un form pour taper les todos

// Ajouter sur le DOM ce qui est tapé dans l'input à la validation du form
// monInput.value

// Supprimer un todo quand on click dessus: (.remove()) => bubbles
// eventlistener au click

// Stocker dans le local storage la liste

// Consulter le local storage au lancement de l'application pour rajouter des todos


 const input = document.getElementById("input");
 const form = document.querySelector("form");
 const ul = document.querySelector("ul");
 
//  Evenement au submit sur le formulaire
 form.addEventListener("submit", function (e) {
     e.preventDefault();
     const inputValue = input.value;
     ul.innerHTML += `<li>${input.value}</li>`;
     input.value = "";
   });

  //  Evènement au click sur le todo
  



 
