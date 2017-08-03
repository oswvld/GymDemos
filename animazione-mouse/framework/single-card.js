$(document).ready(function(){

  var initialDeg = 8;

  var div_Width = null;
  var half_Width = null;
  var cursore_X = null;
  var div_Height = null;
  var half_Height = null;
  var cursore_Y = null;

  var animation_enter = null;

  var inside = false;

  // mouse enter
  $('.card .mousemove-area').on('mouseenter', function(e){

    div_Width = $(this)[0].clientWidth;
    half_Width = div_Width / 2;
    cursore_X = e.offsetX;
    div_Height = $(this)[0].clientHeight;
    half_Height = div_Height / 2;
    cursore_Y = e.offsetY;

    var card_content = $(this).siblings('.card-content');

    // mouse leave
    $(this).on('mouseleave', function(e){
      console.log('mouse leave');

      TweenLite.to( card_content, 0.5, {
        rotationX: 0,
        rotationY: 0
      } )

      inside = false;

    });

    $(this).on('mousemove', function(e){

      if(inside)
      {
        var div_Width = $(this)[0].clientWidth;
        var half_Width = div_Width / 2;
        var cursore_X = e.offsetX;

        var div_Height = $(this)[0].clientHeight;
        var half_Height = div_Height / 2;
        var cursore_Y = e.offsetY;

        deg_Width = (cursore_X - half_Width) * 10 / half_Width;
        deg_Height = (cursore_Y - half_Height) * 10 / half_Height;

        TweenLite.to( card_content, 0.5, {
          rotationX: -deg_Height,
          rotationY: deg_Width
        } )

      }

    });

    animation_enter = TweenLite.fromTo(card_content, 0.3, {
      rotationX: 0,
      rotationY: 0
    }, {
      rotationX: function(){
      if(animation_enter.vars.rotationX)
        return animation_enter.vars.rotationX;
      else
      {
        if(cursore_Y >= half_Width)
          return -initialDeg;
        else
          return initialDeg;
      }
    },
      rotationY: function() {
        if(animation_enter.vars.rotationY)
          return animation_enter.vars.rotationY;
          else
          {
            if(cursore_X >= half_Width)
              return initialDeg;
            else
              return -initialDeg;
          }
        }
      });

      animation_enter.eventCallback("onComplete", function(){
        inside = true;
      });

  });


});
