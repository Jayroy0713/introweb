function btnCalculer_onclick() {
    var Representation, Age, Res, PrixBase, Rabais;
    PrixBase = parseInt(document.getElementById("txtBasePrix").value);
    Age = parseInt(document.getElementById("txtAge").value);
    if (document.getElementById("chkMiSession").checked == true)
    {
        if ((Representation = document.getElementById("radMidi").checked = true) && (age == 16)) ;
        {
            Rabais = 0.4;
        }
        else if ((Representation = document.getElementById("radMidi").checked = true) && (Age <= parseInt(document.getElementById("txtAge").value)))
        {
            Rabais = 0.6;
        }
        else if ((Representation = document.getElementById("radSoir").checked = true) && (Age > parseInt(document.getElementById("txtAge").value)))
        {
                Rabais = 0;
        }
        else
        {
            Rabais = 0.3;
        }

    }
    else
    {
       Rabais = NaN;
    }

    Res = PrixBase * Rabais;
    console.log("le prix total sera de " + Res)
}