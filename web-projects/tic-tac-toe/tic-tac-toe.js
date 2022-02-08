//$( document ).ready(function() {
    console.log( "ready!" );
    var playerNum = 1, countGrid = 0;
        //player1();
    $('#grid-play .elem.gameGrid').click( function() {
      if(playerNum == 1){
        $(this).attr("status", "O");
      //  $(this).css({'background-color': 'red','pointer-events': 'none'});
        $(this).text("O")
        playerNum = 2;
      }
      else if(playerNum == 2){
        $(this).attr("status", "X");
    //    $(this).css({'background-color': 'green','pointer-events': 'none'});
        $(this).text("X");
        playerNum = 1;
      }
      console.log(playerNum);
      countGrid = ++countGrid;
      console.log(countGrid + "=countGrid");
      $(this).css({'pointer-events': 'none'});
      checkGameWin();
    });
//});
function checkGameWin(){
//  console.log("check game win or lost");
  var i=0;
  for(a=0;a<2;a++){
    if(a==0){
      var b="O";
    }
    else{
      var b="X";
    }
var winSenario = [$('#grid-play .gridRow:first-child .elem[status="'+b+'"]'),
 $('#grid-play .gridRow:nth-child(2) .elem[status="'+b+'"]'),
 $('#grid-play .gridRow:last-child .elem[status="'+b+'"]'),

 $('#grid-play .gridRow .elem:first-child[status="'+b+'"]'),
 $('#grid-play .gridRow .elem:nth-child(2)[status="'+b+'"]'),
 $('#grid-play .gridRow .elem:last-child[status="'+b+'"]')

];
 for (j = 0; j < winSenario.length; j++) {
   (winSenario[j]).each(function() {
       i=i+1;
       if(i==3){
         threeInARow(i,b);
       }
     });
	 i=0;
 }

for(g=1;g<=3;g++){
 ($('#grid-play .gridRow:nth-child('+g+') .elem:nth-child('+g+')[status="'+b+'"]')).each(function() {
     i=i+1;
	 console.log("here is my i= "+i)
     if(i==3){
       threeInARow(i,b);
     }
   });
 }i=0;

var r=1,c=3;
for(g=1;g<=3;g++){
 ($('#grid-play .gridRow:nth-child('+r+') .elem:nth-child('+c+')[status="'+b+'"]')).each(function() {
     r=++r;
     c=--c;
     i=i+1;
     if(i==3){
       threeInARow(i,b);
     }
   });
}i=0;

  }
  var count=0;
  ($('#grid-play .gameGrid[status]')).each(function(){
    count=count+1;
    if(count==9){
      callModal(0,"game over");
    }
});
count=0;
}

function threeInARow(n,val){
  console.log(n+"=value of i");
  console.log(val+" wins the game");
  $('#grid-play .elem.gameGrid').css({'pointer-events': 'none'});//freez game
  callModal(1,val);
}

function callModal(gameStat,val){
  if(gameStat==1){
    $("#modalBody .modal-body").text(val+" Wins the game");
  }
  else if(gameStat==0){
    $("#modalBodyLabel").text("Draw!!");
    $("#modalBody .modal-body").text(val);
  }
  $("#modalCall" ).trigger( "click" );
}
/*
//winning logic starts
//gridRow
console.log($("#grid-play .gridRow:first-child .elem"));
console.log($("#grid-play .gridRow:nth-child(2) .elem"));
console.log($("#grid-play .gridRow:last-child .elem"));

//columns
console.log($("#grid-play .gridRow .elem:first-child"));
console.log($("#grid-play .gridRow .elem:nth-child(2)"));
console.log($("#grid-play .gridRow .elem:last-child"));

//diagonal
for(g=1;g<=3;g++){
  console.log(g);
  console.log($("#grid-play .gridRow:nth-child("+g+") .elem:nth-child("+g+")"));
}

var r=1,c=3;
for(g=1;g<=3;g++){
  console.log(r);
  console.log(c);
  console.log($("#grid-play .gridRow:nth-child("+r+") .elem:nth-child("+c+")"));
  r=++r;
  c=--c;
}
//winning logic ends
*/
