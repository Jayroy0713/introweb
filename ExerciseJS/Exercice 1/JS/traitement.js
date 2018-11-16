function btnCalculer_onclick()
{ 
 	var Poidslivre , kg;
 	Poidslivre = parseFloat(document.getElementById("txtPoidslivre").value);
    kg = Poidslivre * 0.4536;
    console.log("Voici votre poid en kg " +kg);

}