function btnCalculer_onclick()
{
    var age,categorie;
    age = parseInt(document.getElementById("txtAge").value);
    if (age>=6 && age <= 8)
    {
        categorie = "Poussin";
    }
    else
    if (age >= 9 && age <= 10)
    {
        categorie = "Pupille";
    }
    else
    {
        if (age >= 11 && age <= 11)
        {
            categorie = "Minime";
        }
        else
        {
            categorie = "Cadet";
        }
    }
    document.getElementById("lblMessage").innerHTML = "Votre catégorie est "+categorie;

}