var color_set = ['white','black','blue','green','red','yellow','brown','orange','purple','turquoise'];
var color;
var number;
function select_color() {
	return color_set[Math.floor(Math.random() * 10)];
};
function select_square(selected_square) {
	$('.conquered')
		.css('background-color',$(selected_square).css('background-color'))
		.attr('color',$(selected_square).attr('color'));
	$(selected_square).addClass('conquered');
	//for each conquered, check if surrounding are the new color
	$('.conquered').each(function() {
		number = $(this).attr('title');
		color = $(this).attr('color')
		if($('[title='+(number-1)+']').attr('color') == color) {
			alert('number: '+number,'title: '+($('[title='+(number-1)+']').attr('title')));
			$('[title='+(number-1)+']').addClass('conquered');
		}
		if($('[title='+(number+1)+']').attr('color') == color) {
			alert('number: '+number,'title: '+($('[title='+(number+1)+']').attr('title')));
			$('[title='+(number+1)+']').addClass('conquered');
		}
		if($('[title='+(number-10)+']').attr('color') == color) {
			alert('number: '+number,'title: '+($('[title='+(number-10)+']').attr('title')));
			$('[title='+(number-10)+']').addClass('conquered');
		}
		if($('[title='+(number+10)+']').attr('color') == color) {
			alert('number: '+number,'title: '+($('[title='+(number+10)+']').attr('title')));
			$('[title='+(number+10)+']').addClass('conquered');
		}
	});
};
function generate_gameboard(size,width) {
	//clear board
	$('#gameboard').html('');
	//start first row
	color = select_color();
	$('#gameboard').append('<p class="square conquered" color="'+color+'" title="1">'+1+'</p>');

	for (var i = 2; i <= size; i++) {
		//fill row
		color = select_color();
		$('#gameboard').append('<p class="square" color="'+color+'" title="'+i+'">'+i+'</p>');

		if (i % width == 0) {
			//end row
			$('#gameboard').append('<br>');
		};
	};
};
function reset_gameboard() {
	generate_gameboard(100,10);
	$('.square').click(function(){
		select_square($(this));
	});
}
$(document).ready(function(){
	generate_gameboard(100,10);
	$('.square').click(function(){
		select_square($(this));
	});

});