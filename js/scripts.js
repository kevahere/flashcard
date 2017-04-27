$(document).ready(function() {
  $("button#javaScript").click(function() {
    $(".jscript-showing p").show();
    $(".data-types ul").hide();
    $(".jquery p").hide();
    $(".data-types p").hide();



  });

  $("button#dataType").click(function() {
    $(".data-types ul").show();
    $(".data-types p").show();
    $(".jscript-showing p").hide();
    $(".jquery p").hide();


  });

  $("button#jQuery").click(function() {
    $(".jquery p").show();
    $(".jscript-showing p").hide();
    $(".data-types ul").hide();
    $(".data-types p").hide();


  });


});
