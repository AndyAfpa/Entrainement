//*************************************Demandez à l'utilisateur de saisir le prix unitaire et la quantité commandée***************************************************************//
var PU = parseInt(window.prompt("Entrez le prix unitaire du produit :"));
var QTECOM = parseInt(window.prompt("Entrez la quantité commandée :"));

//***************************************************Calcule de prix unité * quantité****************************************//
var TOT = PU * QTECOM;

//***************************************************On veut calculer REM , si entre 100-200 alors rem = 5 % , si > 200  alors rem = 10%****************************************//
var REM = 0;
if (TOT >= 100 && TOT <= 200) 
{
  REM = TOT * 0.05; 
}

else if (TOT > 200) 
{
  REM = TOT * 0.10;
}
//***************************************************On veut calculer le PORT , donc si tot remisé > 500 port = 0  , si ****************************************//
var PORT = 0;
if (TOT - REM > 500) {
  PORT = 0; 
}
 //***************************************************Ici on veut que  la valeur mini du PORT selon le tot remise soit toujours grand que 6 € ****************************************//

else 
{
    PORT = Math.max(6, (TOT - REM) * 0.02);  //**Ici on explique que si le port est inférieur à 6  , le code va séléctionner 6 ( le chiffre le plus grand entre max et port**//
}




//***************************************************Ici on explique que PAP = Tot - la remise + le port ***************************************//
var PAP = TOT - REM + PORT;



//***************************************************On affiche le résultat , on utilise la commande .tofixed(2) pour que l'affichage s'arrête à 2 decimal après la , ***************************************//

window.alert("Remise : " + REM.toFixed(2) + " €\nFrais de port : " + PORT.toFixed(2) + " €\nPrix à payer : " + PAP.toFixed(2) + " €"); //\n sert à renvoyer les résultat à la ligne//
