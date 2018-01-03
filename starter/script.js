
function attachEventHandlers() {
	$('.image').on('click', handleImageClick);
}

function handleImageClick(event) {
	const target = $(event.target);
	const images = $('.photo-row .image');
	const info = $('.info-pane');
	const preview = $('.preview-image');
	if(target.hasClass('selected')) {
		images.removeClass('not-selected');
		target.removeClass('selected');
		info.fadeOut(200);
	}
	else {
		images.removeClass('selected');
		images.addClass('not-selected');
		target.addClass('selected');
		target.removeClass('not-selected');
		info.fadeIn(200);
	}
}

$('document').ready(function() {

	attachEventHandlers();

});
