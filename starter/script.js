
function attachEventHandlers() {
	$('.image').on('click', handleImageClick);
}

function handleImageClick(event) {
	const target = $(event.target);
	const images = $('.photo-row .image');
	const info = $('.info-pane');
	const preview = $('.preview-image');
	if(target.hasClass('selected')) {
		target.removeClass('selected');
	}
	else {
		target.addClass('selected');
	}
}

$('document').ready(function() {

	attachEventHandlers();

});
