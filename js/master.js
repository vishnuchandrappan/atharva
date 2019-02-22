$('.pgm-card').click(function(){
  var id=$(this).parent().attr('id');
  $('body').find('#'+id).find('.pgm-card').append('<p>Hello World</p>');
})
