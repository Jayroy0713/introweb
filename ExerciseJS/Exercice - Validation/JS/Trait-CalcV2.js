function btnCalculer_onclick()
{
    if(valideChampsOblig() === true)
    {
        traiterInfos();
    }
}

function traiterInfos()
{
    var nbr1,nbr2,sym,tot;
    nbr1 = parseInt(document.getElementById("txtNbre1").value);
    nbr2 = parseInt(document.getElementById("txtNbre2").value);
    sym = document.getElementById("txtOperateur").value;
    tot = calculer(nbr1,nbr2,sym);
    document.getElementById("lblMessage").innerHTML = "Voici le total :"+tot;
}
function calculer(nbr1,nbr2,sym)
{
    switch (sym)
    {
        case "+":
            tot = nbr1 + nbr2;
            break;
        case "-":
            tot = nbr1 - nbr2;
            break;
        case "/":
            tot = nbr1 / nbr2;
            break;
        case "x":
            tot = nbr1 * nbr2;
            break;
    }
    return tot;
}

function valideChampsOblig()
{
    var valide = false;
    if((validExist("txtNbre1")===true)&&(validExist("txtNbre2")===true)&&(validExist("txtOperateur")))
    {
        valide = true;
    }
    return valide;
}
function validExist(nomId)
{
    var valide;
    if(document.getElementById(nomId).value ==="")
    {
        valide = false;
        document.getElementById(nomId).style.backgroundColor = "red";
    }
    else
    {
        valide = true;
        document.getElementById(nomId).style.backgroundColor = "white";
    }
    return valide;
}


