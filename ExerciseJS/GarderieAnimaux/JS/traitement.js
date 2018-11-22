/*Fonction*/
function btnCalculer_onclick()
{
    var nomvet,nbrjours,taux,tot;
    heures = parseInt(document.getElementById("txtNbrHrs").value);
    nbrjours = parseInt(document.getElementById("txtNbreJours").value);
    nomvet = document.getElementById("lstVeterinaire").value;
    saisirRabais();
    saisirVet();
    calculerTarif();
    afficher();
/* Fonction */


}


function calculerTarif()
{
    if (document.getElementById("radChien").checked = true)
    {
        tarif = 18.50
    }
    else
    {
        tarif = 15.00
    }
    {

    }
    if (document.getElementById("chkServ").checked = true)
    {
        tarif = tarif + 5;
    }
    tarif = (tarif*nbrjours) + (taux * heures);

}
function saisirRabais()
{
    if (nbrjours >=1 && nbrjours<5 )
    {
        rabais = 0
    }
    else if (nbrjours >=5 && nbrjours <10)
    {
        rabais = 0.05
    }
    else if (nbrjours >=10 && nbrjours <30)
    {
        rabais = 0.10
    }
    else if (nbrjours >= 30)
    {
        rabais = 0.15
    }
}
/* Fonction */
function saisirVet()
{
    switch (nomvet)
    {
        case "Audrey Bouchard": taux = 25;
            break;
        case "Stéphane Tremblay": taux = 35;
            break;
        case "Maxime Simard": taux = 40;
            break;
        case "Mélissa Caron": taux = 45;
            break;
    }

}
/*Fonction*/
function afficher()
{
    document.getElementById("lblMessage").innerHTML = "Le prix sera de "+tarif +" pour "+nbrjours +" jours.";
}


/*Fonction*/
function radChat_onclick()
{
   document.getElementById("lblimg").src =  "GarderieAnimaux/img/Chat.jpg"
}
/*Fonction*/
function radChien_onclick()
{
    document.getElementById("lblimg").src =  "GarderieAnimaux/img/chien.jpg"
}