$('.btn_text > p').click(function () {
	let tabId = $(this).attr('data-tab');

	$('.btn_text > p').removeClass('active');
	$('.content').removeClass('active');

	$(this).addClass('active');
	$('#' + tabId).addClass('active');
});
