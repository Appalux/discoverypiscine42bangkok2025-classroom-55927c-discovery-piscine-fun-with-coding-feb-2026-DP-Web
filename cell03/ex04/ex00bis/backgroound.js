$("#changeBtn").on("click", function () {
  $("body").css("background-color", `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`);
});
