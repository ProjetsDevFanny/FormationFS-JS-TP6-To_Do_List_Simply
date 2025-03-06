// Créer un form pour taper les todos

// Ajouter sur le DOM ce qui est tapé dans l'input à la validation du form
// monInput.value

// Supprimer un todo quand on click dessus: (.remove()) => bubbles
// eventlistener au click

// Stocker dans le local storage la liste

// Consulter le local storage au lancement de l'application pour rajouter des todos

// -----------------------------------------------------------------------------------------------------------------

const item = document.getElementById("item"); //  id de l'input
const form = document.querySelector("form");
const list = document.getElementById("list"); //  id de l'ul

// Storage part
function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un todo pour la supprimer</li>`;
  }
}

window.addEventListener("load", getTodos());

//  Evenement au submit sur le formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList();
});

//  Evènement au click sur le todo
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storeList();
});
