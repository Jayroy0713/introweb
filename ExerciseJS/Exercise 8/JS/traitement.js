function btnCalculer_onclick()
{
//declaration des variables
    var  nbrEtu, nbr65Ans, NbrNormal, nbrBillet, res, prixBilletEtu, prixBillet65Ans, prixBilletNormal;

    nbrEtu = parseInt(document.getElementById("NbEtu").value);
    prixBilletEtu = 12*nbrEtu;
    nbr65Ans = parseInt(document.getElementById("Nb65plus").value);
    prixBillet65Ans = 15*nbr65Ans;
    nbrNormal = parseInt(document.getElementById("NbAdultes").value);
    prixBilletNormal = 20*nbrNormal;
    res = parseInt(document.getElementById("NbEtu").value);
    if (nbrBillet > 5)
    {
        res = (prixBillet65Ans + prixBilletEtu + prixBilletNormal) * (prixBillet65Ans + prixBilletEtu + prixBilletNormal * .1);
    }
    else
    {
        res = prixBillet65Ans + prixBilletEtu + prixBilletNormal;
    }
    //Afichage

}
