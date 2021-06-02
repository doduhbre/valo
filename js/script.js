$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 4,
      rewind: true,
      
    });
    $(".next").click(function(){
        var active = document.getElementById('active-agent')
        var count = $('.agent').index(active);
        
        var length = $('.agent').length;
        var need = count+1;
        if(need >= 4){
            owl.trigger("next.owl.carousel");
        }
        if(need >= length){
            need = 0;
        }
        $('.agent').eq(count).removeAttr('id');
        $('.agent').eq(need).attr('id','active-agent');

    });
  });

  $('img.skill-svg').each(function(){
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function(data) {
      var $svg = $(data).find('svg');
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });

  $('.agent').click(function(){
    var active = document.getElementById('active-agent')
    var count = $('.agent').index(active);
    $('.agent').eq(count).removeAttr('id');
    $(this).attr('id','active-agent');
  });

