$(document).ready(function(){

  // var inst_cards = $(this).find('.inst-card');
  //
  // for(var i = 0; i < inst_cards.length; i++)
  // {
  //   var single_card = inst_cards[i];
  //
  // }

  $.ajax({
    type: 'POST',
    url: './single-card.php',
    dataType: 'text',
    success: function(result){
      console.log(result);
    }
  });

});
