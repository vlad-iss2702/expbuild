$(function () {
  $(".accordion-btn").on("click", function () {
    $(this).next(".accordion-list").slideToggle();
    $(".accordion-line", this).toggleClass("active");
  });
});
