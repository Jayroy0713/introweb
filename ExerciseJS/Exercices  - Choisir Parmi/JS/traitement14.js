function btnCalculer_onclick()
{ 
 	nbr1 = parseInt(document.getElementById("txtNbre1").value);
    nbr2 = parseInt(document.getElementById("txtNbre2").value);
    sym = parseInt(document.getElementById("txtOperateur").value);
    tot = 1;

    switch (sym)
    {
        case "+":
            tot = nbr1 + nbr2
            break;
        case "-":
            tot = nbr1 - nbr2
            break;
        case "/":
            tot = nbr1 / nbr2
            break;
        case "x":
            tot = nbr1 * nbr2
            break;
    }
      document.getElementById("lblMessage").innerHTML = "Voici le total :"+tot
}