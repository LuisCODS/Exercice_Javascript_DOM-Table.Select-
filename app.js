// =========================  EXERCICE 1 ========================= -->

function valider(form){
	
	var imput = request.getParameter("nombre");
	
	if(imput > 1 && imput < 21){
		buildTable();
	}
	else{
	alert("Mauvaise entree!");
	}
	
}

function buildTable(){
	
}

// =========================  EXERCICE 3 ========================= -->

var automobiles = {
    "Acura": ["MDX", "RDX", "TL", "RL"],
    "Audi": ["A4", "A6", "A8", "S4", "S6"],
    "BMW": ["M3", "M5", "M6", "Z4"],
    "Chevrolet": ["Aveo", "Cobalt", "Colorado", "Corvette", "Equinox"],
    "Chrysler": ["300", "Aspen", "PT Cruser", "Sebring"],
    "Ford": ["Edge", "Escape", "Fusion", "Focus"],
    "Honda": ["Accord", "Civic", "Element", "Fit"],
    "Hyundai": ["Accent", "Elantra", "Tiburon", "Sonata", "Tucson"]
};

var marques = document.getElementById("marque");
var modeles = document.getElementById("modele");


for (var propre in automobiles){
    var option = document.createElement("option");
    option.textContent = propre;
    marques.add(option);
}

marques.addEventListener("change", function () {
    modeles.classList.remove('invisible');
    var tab = automobiles[marques.options[marques.selectedIndex].value];
    modeles.innerHTML = null;
    for (var i = 0; i < tab.length; i++) {
        var option = document.createElement("option");
        option.textContent = tab[i];
        modeles.add(option);
    }
})