$(document).ready(function () {
  $("#caption").html($("#slideshow img:first").attr("title"));

  $("#slideshow img:gt(0)").hide();

  $("#previous").click(function () {
    $("#slideshow img:first").fadeOut(3500);
    $("#slideshow img:last").fadeIn(3500).prependTo("#slideshow");
    $("#caption").html($("#slideshow img:first").attr("title"));
  });

  $("#next").click(function () {
    $("#slideshow img:first")
      .fadeOut(3500)
      .next()
      .fadeIn(3500)
      .end()
      .appendTo("#slideshow");
    $("#caption").html($("#slideshow img:first").attr("title"));
  });
});

function switchSlide() {
  console.log("auto switch slide");
  $("#slideshow img:first")
    .fadeOut(2500)
    .next()
    .show()
    .end()
    .appendTo("#slideshow");
  $("#caption").html($("#slideshow img:first").attr("title"));
}
