$(function() {	
//panel search
	$('.but-search').click(function(){
		$('.panel-search').fadeIn();
	});
	
	$(document).click(function(event)
	{
		if($(event.target).closest('.but-search, .panel-search').length) return;
		$('.panel-search').hide();
		event.stopPropagation();
	});

//list ask	
	$('.head-ask').click(function(){
		$(this).next('.body-ask').toggle().parent().toggleClass('active')
	});
	
//filter	
	$('.block-filter ul').each(function(){
		var num_li = $(this).find('li').length;
		if(num_li > 8){
			$(this).next('.more-filter').show()
		}
	});
	
	$('.more-filter a').click(function(){
		$(this).parent().hide().prev().find('li').show()
		return false;
	});
	
//tabs
	$('.tabs-tb').each(function(){
		$(this).find('.tab-tb').hide();
		$(this).find('.tab-tb:eq(0)').show();
		$(this).find('.nav-tb li:eq(0)').addClass('active');
		$(this).find('.nav-tb li').click(function () {
			var ind = $(this).index();
			$(this).parents('.tabs-tb').find('.cont-tb').find('.tab-tb:eq(' + ind + ')').show().siblings('.tab-tb:visible').hide();
			$(this).addClass('active');
			$(this).siblings('.nav-tb li').removeClass('active')
			return false;
		});
	});
});

