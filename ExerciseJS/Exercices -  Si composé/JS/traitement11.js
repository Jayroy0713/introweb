function btnCalculer_onclick()
{ 
  var nbr1,nbr2,signe;
  nbr1 = parseInt(document.getElementById("txtNbre1").value);
  nbr2 = parseInt(document.getElementById("txtNbre2").value);
  if ((nbr1>0 && nbr2>0) || (nbr1<0 && nbr2<0))
  {
      signe = "positif";
  }
  else
  {
      signe = "negatif";
  }
  document.getElementById("lblMessage").innerHTML = "Votre résultat est " +signe;

}