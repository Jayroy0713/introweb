function btnValider_onclick()  //mettre la fonction dans un IF tester une fonction à la fois
{
    alert(validerTel(document.getElementById("txtValidation").value));
    /*
   if (validerNAS())
   {
       alert(validerNAS(document.getElementById("btnValider").value));
   }
   else if (validerTel())
   {
       alert(validerTel(document.getElementById("btnValider").value));
   }
   else if(validerCar())
   {
       alert(validerCar(document.ElementById("btnValider").value));
   }
   else if(validerNo())
   {
       alert(validerNo(document.getElementById("btnValider").value));
   }
   else if(verifierEntreDixTrente())
   {
       alert(verifierEntreUnVingt(document.getElementById("btnValider").value));
   }
   else if(verifierEntreUnVingt())
   {
       alert(verifierEntreDixTrente(document.getElementById("btnValider").value));
   }
*/
}

function validerNAS( Chaine )  // numéro d'assurance social 418 789 123
{
   return /^[0-9]{3}[ ][0-9]{3}[ ][0-9]{3}$/.test(Chaine)
}

function validerTel( Chaine )  // au format (418) 876-8373  un numéro ça change
{
   return /^[(][0-9]{3}[)][ ][0-9]{3}[-][0-9]{4}$/.test(Chaine)
}

function validerCar( Chaine ) // des chaînes de caractères alphabétiques majuscule et minuscule et accepte le trait d'union pas obligatoire
{
   return /^[A-z]+[-]?$/.test(Chaine)
}

function validerNo( Chaine )   // un chiffre peut etre 0 5 25 200 etc..
{
   return /^\d+$/.test(Chaine)
}

function verifierEntreDixTrente( Chaine ) //un chiffre entre 10 et 30
{
   return /^[1-2]{1}[0-9]{1}|[1-3]{1}[0]{1}$/.test(Chaine)
}

function verifierEntreUnVingt( Chaine ) //un chiffre entre 1 et 20
{
   return /^[1-20]{1}$/.test(Chaine)
}