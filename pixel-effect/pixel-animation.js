/*
*
* PIXEL ANIMATION
* v1
*
*/

/* Shuffling */
function shuffle (array) {
  var i = 0
  , j = 0
  , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}


/* =========================== RunTime =========================== */


/* N° Colonne */
var nColumns = 10;

/* N° Righe */
var nRows = 10;

var nQuadratini = nColumns * nRows;
    
var widthPixel = $('.immagine-completa').width()/nColumns;
var heightPixel = $('.immagine-completa').height()/nRows;

var counterTasselli = 0;
var arrayTasselli = new Array();
var array_delays = [0.05, 0.07, 0.08]

var tl = new TimelineMax();


// ciclo righe
for(var j = 0; j < nRows; j++)
{
  // ciclo colonne
  for(var i = 0; i < nColumns; i++)
  {
    var imgUrl = 'cropped_pieces/'+j+'-'+i+'.jpeg';
    counterTasselli++;
    var random_number = Math.floor((Math.random() * 3)+1);
    $('.immagine-completa').append('<div class="tassello tassello-'+counterTasselli+'" style="position: absolute; top: '+(j*heightPixel)+'px; left: '+(i*widthPixel)+'px; width: '+widthPixel+'px; height: '+heightPixel+'px;" data-delay="'+(counterTasselli/100)+'"><img style="width: 100%; height: 100%;" src="'+imgUrl+'"></div>');
    arrayTasselli.push( $('.tassello-'+counterTasselli) );
  }
}



shuffle(arrayTasselli);

var nArray = 10;
var animArrays = new Array();

for( var nA = 0; nA <= nQuadratini; nA += nColumns)
{
  if( nA == 0 )
    continue;
  else
  {

    animArrays[nA] = new Array();

    for( var v = (nA - nColumns); v < nA; v++ )
    {
      animArrays[nA].push( arrayTasselli[v] );
    }
  }
}

tl.add("start", 0.5);


animArrays.forEach(function(currentValue, index, arr){
  var random_number = Math.floor((Math.random() * 3)+1);

  tl.staggerFromTo(currentValue, 0.2,{opacity: 1}, {y: "-500px",opacity:0}, array_delays[random_number-1], "start");

});


setTimeout(function(){tl.reverse();}, 2000);

