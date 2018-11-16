function btnCalculer_onclick()
{ 
 	var MoyKmMois , totKm;
 	MoyKmMois = parseFloat(document.getElementById("txtMoy").value);
    totKm = MoyKmMois * 60;
    console.log("Voici votre total de km " +totKm);

}