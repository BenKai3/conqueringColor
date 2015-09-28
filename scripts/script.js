var color_set = ['white','black','blue','green','red','yellow','brown','orange','purple','turquoise'];
var color;
function select_color() {
	return color_set[Math.floor(Math.random() * 10)];
};
function generate_gameboard(size,width) {
	//start first row
	color = select_color();
	$('#gameboard').append('<p class="'+color+' square 1 conquered">'+1+'</p>');

	for (var i = 2; i <= size; i++) {
		color = color_set[Math.floor(Math.random() * 10)];
		$('#gameboard').append('<p class="'+select_color()+' square '+i+'">'+i+'</p>');
		if (i % width == 0) {
			$('#gameboard').append('<br>');
		};
	};
};
$(document).ready(function(){
	generate_gameboard(100,10);
	$('.square').click(function(){
		$('.conquered').css('background-color',$(this).css('background-color'));
		$(this).addClass('conquered');
	});
});