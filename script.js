$(document).ready(function(){
  $('.btnCreate').click(function(){
    var $note = $('<div class="note"><div class="title flex"><p>Title 1</p></div><div class="content"><p></p></div></div>');
    $('.container').append($note);
  });

  $('.container').on('click', '.note', function(){
    $(this).addClass('selected');
    $('.blur').remove();
    $('body').append('<div class="blur"></div>');
  });


  $(document).on('click', '.blur', function(){
    $('.note').removeClass('selected');
    $('.blur').remove();
  });
});



