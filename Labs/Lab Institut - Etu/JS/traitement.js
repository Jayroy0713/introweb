function frmMembre_onclick()
{
 var Valide = false;
 if(valideChampsOblig()===true);
    {
        traiterInfos();
    }
}
function traiterInfos()
{
   var nom,prenom,age;

    age = (document.getElementById("type").value);
    if (age = "adulte")
    {
        prix = 90;
    }
    else if (age = "étudiant")
    {
        prix = 60;
    }
    else if (age = "retraité")
    {
        prix = 80;
    }
    return prix
}
function valideChampsOblig()
{
    var Valide = true, tabNomId = new Array("txtNom","txtPrenom","txtAdresse","txtVille","txtTel");
    for (i=0;i<5;i++)
    {
        if (validExist(tabNomId[i])==false)
        {
            Valide = false
        }
    }
    return Valide
}
function validExist(nomId)
{
    var Valide;
    if(document.getElementById(nomId).value ==="")
    {
        Valide = false;
        document.getElementById(nomId).style.borderColor = "red";
        document.getElementById("lblMessageErreur").innerHTML ="Tous les champs possédant une étoiles sont obligatoires!!"
    }
    else
    {
        Valide = true;
        document.getElementById(nomId).style.borderColor = "white";
    }
    return Valide
}
function ValideFormat(nomId)
{
    var Valide = true;
    if (ValideChaine(document.getElementById("txtNom").value) === false);
    {
        Valide = false;
        document.getElementById("txtNom").style.borderColor = "red";
    }
    if (ValideChaine(document.getElementById("txtPrenom").value) === false);
    {
        Valide = false;
        document.getElementById("txtPrenom").style.borderColor = "red";
    }
    if (ValideChaine(document.getElementById("txtVille").value) === false);
    {
        Valide = false;
        document.getElementById("txtVille").style.borderColor = "red";
    }
    if ((ValideCodePost(document.getElementById("txtCodePostal").value) === false)  && document.getElementById("txtCodePostal").value != false);
    {
        Valide = false;
        document.getElementById("txtCodePostal").style.borderColor = "red";
    }
    if (ValideTel(document.getElementById("txtTel").value) === false);
    {
        Valide = false;
        document.getElementById("txtTel").style.borderColor = "red";
    }
    if ((ValideCodePerm(document.getElementById("txtCodePerm").value) === false) && document.getElementById("txtCodePostal").value != false);
    {
        Valide = false;
        document.getElementById("txtCodePerm").style.borderColor = "red";
    }
    if (ValideAdresse(document.getElementById("txtAdresse").value) === false);
    {
        Valide = false;
        document.getElementById("txtAdresse").style.borderColor = "red";
    }
}
function ValideChaine(Chaine)
{
    return /^[A-z]+\-?[A-z]+?$/.test(Chaine)
}
function ValideCodePost(Chaine)
{
    return /^[A-Z][0-9][A-Z] [0-9][A-z][0-9]|[a-z][0-9][a-z] [0-9][a-z][0-9]$/.test(Chaine)
}
function ValideTel(Chaine)
{
    return /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}|[(][0-9]{3}[)] [0-9]{3}\-[0-9]{4}$/.test(Chaine)
}
function ValideCodePerm(Chaine)
{
    return /^[A-Z]{4}[0-9]{8}|^[[a-z]{4}[0-9]{8}$/.test(Chaine)
}