    var tabJoueur=new Array(4), tabNom=new Array(4),cpt,tot,pts;
    cpt = 0;
    function btnAjouter_onclick()
    {
        var NewJ;

        NewJ=document.getElementById("txtNom").value;
        pts=parseInt(document.getElementById("txtPoints").value);
        tot=0;
        tot=tot + pts;
        cpt = cpt+1;
        if (cpt >=4)
        {
            document.getElementById("btnTrouverMoy").disabled = false;
            document.getElementById("btnTrouverMeilleur").disabled = false;
            document.getElementById("btnTrouverPire").disabled = false;
            document.getElementById("btnRechercher").disabled = false;
            document.getElementById("btnAjouter").disabled = true;
        }
        alert(tot);

        document.getElementById("lblNbreJoueur").innerHTML = "Numéro du joueur "+cpt;
    }

       function btnTrouverMoy()
       {
            var moy,joueur;
            moy=0;
            for(joueur=1; joueur <4; joueur++)
           {
               moy = joueur(pts);
               document.getElementById("lblReponse").innerHTML = "Voici la moyenne :"+moy;
           }

       }


        function btnRechercher()
        {
            // tableau joueur et tableau numero

        }
        function btnTrouverMeilleur_onclick()
        {
            document.getElementById("lblReponse").innerHTML = "Voici le meilleur :"+(Math.max(tabJoueur));
        }