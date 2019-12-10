$(document).ready(function() {
  $('#header #gnb>ul>li>a').mouseenter(function(){
		$('#header').addClass('active');
  });

  $('#header').mouseleave(function(){
		$('#header').removeClass('active');
  });
})

$(document).ready(function(){
  $("#devopsMsa #tab-01").click(function(){
      $("#tab-02-contents").css("display", "none");
      $("#tab-01-contents").css("display", "block");
  });

  $("#devopsMsa #tab-02").click(function(){
    $("#tab-01-contents").css("display", "none");
    $("#tab-02-contents").css("display", "block");
  });

  $("#migration .section-3 #tab-02").click(function(){
    $("#tab-01-contents").css("display", "none");
    $("#tab-02-contents").css("display", "block");
  });

  $("#migration .section-3 #tab-03").click(function(){
    $("#tab-01-contents").css("display", "none");
    $("#tab-03-contents").css("display", "block");
  });

  $("#migration .section-4 #tab-01").click(function(){
    $("#tab-02-contents").css("display", "none");
    $("#tab-01-contents").css("display", "block");
  });

  $("#migration .section-4 #tab-03").click(function(){
    $("#tab-02-contents").css("display", "none");
    $("#tab-03-contents").css("display", "block");
  });

  $("#migration .section-5 #tab-01").click(function(){
    $("#tab-03-contents").css("display", "none");
    $("#tab-01-contents").css("display", "block");
  });

  $("#migration .section-5 #tab-02").click(function(){
    $("#tab-03-contents").css("display", "none");
    $("#tab-02-contents").css("display", "block");
  });

  $("#family-site-btn").click(function(){
    $("#family-site-list").toggle();
  });
});
