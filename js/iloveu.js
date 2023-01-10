$(document).ready(function () {
  let entered = false;
  const textRoot = document.getElementById("text-root");
  textRoot.innerHTML = "Nghe nhạc tí rồi bấm vào đây nhé béo";

  let checkingId = setInterval(() => {
    console.log("checking: ", audio.paused);
    if (audio.paused) {
      let playedPromise = audio.play();
      if (playedPromise) {
        playedPromise
          .then(() => {
            console.log("clear interval");
            clearInterval(checkingId);
          })
          .catch((e) => {
            console.log(e);
            if (
              e.name === "NotAllowedError" ||
              e.name === "NotSupportedError"
            ) {
              console.log(e.name);
            }
          });
      }
    }
  }, 1500);
  const textConfigs = [
    "Thời gian trôi nhanh thật",
    "Hôm nay đã là kỷ niệm hai năm chúng mình yêu nhau rồi đấy!",
    "Anh muốn gửi tới em béo của anh những lời yêu thương nhất",
    "Mình cùng xem lại kỷ niệm 2 năm yêu nhau nha em béo",
    "Nụ cười em như tia nắng xuân",
    "Êm đềm mang theo hơi ấm",
    "Âu sầu trong anh như xóa đi chỉ bởi những nụ cười ngây ngô đáng yêu!",
    "Cùng nhau cố gắng",
    "Yêu nhau nhiều hơn",
    "Em béo của đời mình nhé!",
  ];

  const autoShowContent = () => {
    entered = true;
    let index = 0;
    var idInterval = setInterval(() => {
      console.log(index);
      if (index >= textConfigs.length || !textConfigs[index]) {
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

      var speed = 3500;
      setInterval(() => {
        switchSlide();
      }, speed);
    }
  });
});
