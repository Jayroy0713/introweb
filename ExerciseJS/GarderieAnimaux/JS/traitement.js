function btnCalculer_onclick()
{
    var tarif,animal,jours;
 	if (Document.GetElementById(lstVeterinaire).value = Document.GetElementById(Audrey).value)
    {
        Document.GetElementById(tarif).value = 48.29;
        Document.GetElementById(radChien).checked = true;
        Document.GetElementById(chkServ).checked = true;
        Document.GetElementById(txtNbreJours).value = 2;

        If (Document.GetElementByIdById(chkServ).checked = true)
        {
            tarif = tarif + 5;
        }

    }
    else if (Document.GetElementById(lstVeterinaire).value = Document.GetElementById(Max).value)
    {
        Document.GetElementById(tarif).value = 77.87;
        Document.GetElementById(radChat).checked = true;
        Document.GetElementById(chkServ).checked = false;
        Document.GetElementById(txtNbreJours).value = 4;

    }
    console.log("Le prix sera donc de "+tarif +" pour "+txtNbreJours +" jours.")
}