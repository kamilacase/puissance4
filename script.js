//HTML + game var :
var btnTable = document.createElement('table');
btnTable.id = "button";
var btnTr = document.createElement('tr');
btnTable.appendChild(btnTr);
// button gameButton
for (var j = 0; j < 7; j++) {
   var btnTh = document.createElement('th');
   btnTable.lastChild.appendChild(btnTh);
   btnTh.addEventListener("click", addJeton)
   btnTh.innerText = j
}

// GameBoard
var table = document.createElement('table');
table.id = 'P4';
var puissance4 = []; //
for (var i = 0; i < 6; i++) {

   var tr = document.createElement('tr');
   table.appendChild(tr);

   puissance4.push([]);

   for (var j = 0; j < 7; j++) {
       var th = document.createElement('th');
       table.lastChild.appendChild(th);
       puissance4[i].push(0);
   }
}


//Add two table to Dom
document.getElementsByTagName('body')[0].appendChild(btnTable);
document.getElementsByTagName('body')[0].appendChild(table);
console.log(puissance4);



// game function :
function positionJeton(column){
   if ( puissance4[0][column] != 0){
       console.log("full");
       return -1;
   }
   for (var i = 1; i < 6; i++) {
       console.log(column + '>>' + i);
       if ( puissance4[i][column] != 0){
            // console.log(i-1);
           return i-1;
       }
   }
   // console.log(5);
   return 5;
}

// main :


var Joueur  =  1;

function addJeton(){
   var ColorJeton;
   if (Joueur == 1){
       ColorJeton = ".";
   } else if (Joueur == 2) {
       ColorJeton = ".";
   }
   console.log(this);
   var column = this.innerText;
   var cases = document.getElementById('P4').getElementsByTagName('th');
   console.log(cases[30]);
   var ligne = positionJeton(column);
   if( ligne != -1){
       puissance4[ligne][column] = ColorJeton;
       console.log(column + ligne);
       var nbLigne = ligne*7 + parseInt(column);
       console.log(nbLigne);
       cases[ nbLigne ].innerText  = ColorJeton;
       if (Joueur == 1){
           cases[ nbLigne ].style.backgroundColor = 'yellow';
       } else if (Joueur == 2) {
           cases[ nbLigne ].style.backgroundColor = 'red';
       }

   } else {
       alert("Pas plus haut que le trou !!!!");
   }
   console.log(puissance4);
   if (Joueur == 1){
       Joueur = 2;
   } else if (Joueur == 2) {
       Joueur = 1;
   }
}


//////ResetButton///////
var reset = document.getElementById("btn");
// console.log(document.getElementById("btn"))
reset.addEventListener('click', function(){
    window.location.reload();
});
