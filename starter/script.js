
function attachEventHandlers() {
	$('.image').on('click', handleImageClick);
}

function handleImageClick(event) {
	const target = $(event.target);
	const images = $('.photo-row .image');
	const info = $('.info-pane');
	const preview = $('.preview-image');

	// TODO
	console.log('hello world!');
}

$('document').ready(function() {

	attachEventHandlers();

});
