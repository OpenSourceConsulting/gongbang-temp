$(document).ready(function() {
  $('#header #gnb>ul>li>a').mouseenter(function(){
		$('#header').addClass('active');
  });

  $('#header').mouseleave(function(){
		$('#header').removeClass('active');
  });
})
