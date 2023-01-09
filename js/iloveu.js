$(document).ready(function () {
  let entered = false;
  const textRoot = document.getElementById("text-root");
  const slideshow = document.getElementById("slideshow");
  textRoot.innerHTML = "Nghe nhạc tí rồi bấm vào đây nhé béo";

  const textConfigs = [
    "Thời gian trôi nhanh thật",
    "Hôm nay đã là kỷ niệm hai năm chúng mình yêu nhau rồi đấy!",
    "Anh muốn gửi tới em béo của anh những lời yêu thương nhất",
    "Mình cùng xem lại kỷ niệm 2 năm yêu nhau nha em béo",
  ];

  const autoShowContent = () => {
    entered = true;
    let index = 0;
    var idInterval = setInterval(() => {
      console.log(index);
      if (index >= textConfigs.length || textConfigs[index]) {
        console.log("clear timeout");
        clearInterval(idInterval);
        return;
      }
      console.log("set content");
      textRoot.innerHTML = textConfigs[index];
      index++;
    }, 5000);
  };

  document.getElementById("body-root").addEventListener("click", () => {
    console.log("click body");
    if (!entered) {
      autoShowContent();
      $("#slideshow").css({
        opacity: 1,
      });

      var speed = 2500;
      setInterval(() => {
        switchSlide();
      }, speed);
    }
  });
});
