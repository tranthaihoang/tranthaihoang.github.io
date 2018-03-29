$(document).ready(function() {
  $(".hamburger").click(function() {
    $(this).toggleClass("is-active");
  });
  $(".hamburger").click(function() {
    $("#sidebar").toggleClass("expanded");
  });
  $(".loaded").click(function() {
    $("#sidebar").toggleClass("expanded");
  });
  $(".hamburger").click(function() {
    $(".sidebartitle").toggleClass("sidebartitle_expanded");
  });
  $(".hamburger").click(function() {
    $("#menu").toggleClass("expanded");
  });
  $("h1.one").click(function() {
    $("#sidebar").toggleClass("expanded"),$("#menu").toggleClass("expanded"), $(".sidebartitle").toggleClass("sidebartitle_expanded"),$("#contact").toggleClass("expanded"),$(".hamburger").toggleClass("is-active");
  });
  $("h1.two").click(function() {
    $("#sidebar").toggleClass("expanded"),$("#menu").toggleClass("expanded"), $(".sidebartitle").toggleClass("sidebartitle_expanded"),$("#contact").toggleClass("expanded"),$(".hamburger").toggleClass("is-active");
  });
  $("h1.three").click(function() {
    $("#sidebar").toggleClass("expanded"),$("#menu").toggleClass("expanded"), $(".sidebartitle").toggleClass("sidebartitle_expanded"),$("#contact").toggleClass("expanded"),$(".hamburger").toggleClass("is-active");
  });
  $(".hamburger").click(function() {
    $("#contact").toggleClass("expanded");
  });
  $("#projectone").click(function() {
    $("body").toggleClass("step-inside");
  });
  $("#projecttwo").click(function() {
    $("body").toggleClass("step-inside");
  });

  $("#trigger-1").hover(function() {
    $(".pop-media").toggleClass("result_hover");
  });
  $("#trigger-2").hover(function() {
    $(".pop-media2").toggleClass("result_hover");
  });
  $("#trigger-3").hover(function() {
    $(".pop-media3").toggleClass("result_hover");
  });

});

