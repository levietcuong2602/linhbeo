$(document).ready(function () {
  $("#caption").html($("#slideshow img:first").attr("title"));

  $("#slideshow img:gt(0)").hide();

  $("#previous").click(function () {
    $("#slideshow img:first").fadeOut(1000);
    $("#slideshow img:last").fadeIn(1000).prependTo("#slideshow");
    $("#caption").html($("#slideshow img:first").attr("title"));
  });

  $("#next").click(function () {
    $("#slideshow img:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo("#slideshow");
    $("#caption").html($("#slideshow img:first").attr("title"));
  });
});

function switchSlide() {
  $("#slideshow img:first")
    .fadeOut(1000)
    .next()
    .show()
    .end()
    .appendTo("#slideshow");
  $("#caption").html($("#slideshow img:first").attr("title"));
}
