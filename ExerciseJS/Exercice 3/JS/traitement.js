function btnCalculer_onclick()
{ 
 	var Argent_Can , TauxChEu , Euro;
 	Argent_Can = parseFloat(document.getElementById("txtCan").value);
    TauxChEu = parseFloat(document.getElementById("txtTauxChEu").value);
    Euro = Argent_Can * TauxChEu ;
    console.log("Voici la conversion de votre argent canadien en euro " +Euro +" Euro");

}