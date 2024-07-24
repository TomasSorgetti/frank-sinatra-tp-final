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

//*************** Parallax Effect *****************/
const parallax = $(".parallax");
const title = $("#title");

$(window).on("scroll", function () {
  let scroll = $(this).scrollTop();
  let newWidth = 300 + scroll * 0.3;
  if (newWidth > 600) {
    newWidth = 600;
  }
  title.css("--width", `${newWidth}px`);

  parallax.css("top", scroll * 0.18 + "px");
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

// for (let i = 0; i < albums.length; i++) {
//   albums.eq(i).on("click", function () {
//     discografia[i]
//       .removeClass("discografia_album_inactive")
//       .addClass("discografia_album_active");
//     albums[index].removeClass("album_inactive").addClass("album_active");

//     for (let j = 0; j < discografia.length; j++) {
//       if (discografia[j] != discografia[i]) {
//         discografia[j]
//           .removeClass("discografia_album_active")
//           .addClass("discografia_album_inactive");
//       }
//     }
//   });
// }