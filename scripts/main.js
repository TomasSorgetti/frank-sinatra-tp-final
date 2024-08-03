//*************** Audio *****************/
const audio = $("#myAudio")[0];
const playPauseButton = $("#playPauseButton");

playPauseButton.on("click", function () {
  if (audio.paused) {
    audio.play();
    playPauseButton.addClass("active");
  } else {
    audio.pause();
    playPauseButton.removeClass("active");
  }
});

$(audio).on("ended", function () {
  audio.play();
});

//*************** Album Selector *****************/

const albums = $(".album");
const discografia = $(".discografia");

albums.on("click", function () {
  albums.removeClass("active");
  $(this).addClass("active");

  const albumIndex = $(this).index();
  
  discografia.removeClass("active");
  
  const discografiaActive = discografia.eq(albumIndex);
  
  discografiaActive.addClass("active");
});


