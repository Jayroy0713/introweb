function btnCalculer_onclick()
{
    var tarif,nomvet,nbrjours,taux,tot;
    heures = parseInt(document.getElementById("txtNbrHrs").value);
    nbrjours = parseInt(document.getElementById("txtNbreJours").value);
    nomvet = document.getElementById("lstVeterinaire").value;

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

    if (document.getElementById("lstVeterinaire").value = document.getElementById("Audrey").value)
    {
        if (document.getElementById("radChien").checked = true)
        {
        tarif = 48.29;
        document.getElementById("chkServ").checked = true;
            nbrjours = 2;

        }


    }
    else if (nomvet = document.getElementById("Max").value)
    {
        if ( document.getElementById("radChat").checked = true)
        {
        tarif = 77.87;
        document.getElementById("chkServ").checked = false;
            nbrjours = 4;
        }
        if (document.getElementById("chkServ").checked = true)
        {
            tarif = tarif + 5;
        }

    }
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
 tarif = tarif + (taux * heures);


    (document.getElementById("lblMessage").innerHTML = "Le prix sera de "+tarif +" pour "+nbrjours +" jours.");
}
function radChat_onclick()
{
   document.getElementById("lblimg").src =  "GarderieAnimaux/img/Chat.jpg"
}
function radChien_onclick()
{
    document.getElementById("lblimg").src =  "GarderieAnimaux/img/chien.jpg"
}