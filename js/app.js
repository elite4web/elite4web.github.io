
var current=$('.banner li').first();

$('.next').on('click', function() {
    current.hide();
    if (current.index() == $('.banner li').length - 1){
        	$('.banner li').first().fadeIn();
        	current=$('.banner li').first();
        }
    else{
            current.next().fadeIn();
            current=current.next();
        }
});

$('.prev').on('click', function() {
    current.hide();
    if (current.index() ==0 ){
        	$('.banner li').last().fadeIn();
        	current=$('.banner li').last();
        }
    else{
            current.prev().fadeIn();
            current=current.prev();
        }
});