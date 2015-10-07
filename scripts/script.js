var color_set = ['white','black','blue','green','red','yellow','brown','orange','purple','turquoise'];
var color;
var number;
var restart_loop;
function select_color() {
	return color_set[Math.floor(Math.random() * 10)];
};
function select_square(selected_square) {
	$('.conquered')
		.css('background-color',$(selected_square).css('background-color'))
		.attr('color',$(selected_square).attr('color'));
	$(selected_square).addClass('conquered');
	//for each conquered, check if surrounding are the new color
	loop_conquered()
};
function loop_conquered() {
	$('.conquered').each(function() {

		restart_loop = false;
		number = $(this).attr('title');
		color = $(this).attr('color');
		left_square = $('[title='+(number-1)+']');
		right_square = $('[title='+(number+1)+']');
		up_square = $('[title='+(number-10)+']');
		down_square = $('[title='+(number+10)+']');

		if(left_square.attr('color') == color && left_square.hasClass('conquered') == false) {
			console.log('number: '+number,'title: '+(left_square.attr('title')));
			left_square.addClass('conquered');
		}
		if(right_square.attr('color') == color && right_square.hasClass('conquered') == false) {
			console.log('number: '+number,'title: '+(right_square.attr('title')));
			right_square.addClass('conquered');
			restart_loop = true;
		}
		if(up_square.attr('color') == color && up_square.hasClass('conquered') == false) {
			console.log('number: '+number,'title: '+(up_square.attr('title')));
			up_square.addClass('conquered');
			restart_loop = true;
		}
		if(down_square.attr('color') == color && down_square.hasClass('conquered') == false) {
			console.log('number: '+number,'title: '+(down_square.attr('title')));
			down_square.addClass('conquered');
			restart_loop = true;
		}
		if(restart_loop = true) {
			loop_conquered();
			return false;
		}
	});
}
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
	$('.square').click(function(){
		select_square($(this));
	});
};
function reset_gameboard() {
	generate_gameboard(100,10);
}
$(document).ready(function(){
	generate_gameboard(100,10);
});