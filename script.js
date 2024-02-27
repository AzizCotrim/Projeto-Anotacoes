$(document).ready(function(){
  $('.btnCreate').click(function(){
    var $note = $('<div class="note"><div class="title flex"><p>Title 1</p></div><div class="content"><p></p></div></div>');
    $('.container').append($note);
  });

  var originalStyles = {};

  $('.note').one('click', function(){
    originalStyles = {
      display: $(this).css('display'),
      width: $(this).css('width'),
      height: $(this).css('height'),
      transform: $(this).css('transform')
    }
    $(this).css({
      'width': '500px',
      'height': '500px',
      'margin': '0',
      'position': 'absolute',
      'top': '50%',
      'left': '50%',
      'transform': 'translate(-50%,-50%)',
      'z-index': '999'
    });
    $('body').append('<div class="blur"></div>');
  });

  $(document).on('click', '.blur', function(){
    $('.note').css(originalStyles);
    $('.blur').remove();
    $('.note').one('click', function() {
      $(this).trigger('click');
    });
  });
});



