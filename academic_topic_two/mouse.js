document.addEventListener("DOMContentLoaded", function () {
  var isMouseDown = false;
  var cursor = document.getElementById("customCursor");

  function updateCursorImage() {
    cursor.style.backgroundImage = isMouseDown
      ? 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><text x="0" y="20" font-size="20" fill="white" transform="rotate(45 12 12)">⬤</text></svg>\')'
      : 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><text x="0" y="20" font-size="20" fill="white" transform="rotate(45 12 12)">◯</text></svg>\')';
  }

  document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX - 12 + "px";
    cursor.style.top = e.clientY - 12 + "px";
  });

  document.addEventListener("mousedown", function () {
    console.log("mousedown");
    isMouseDown = true;
    updateCursorImage();
  });

  document.addEventListener("mouseup", function () {
    console.log("mouseup");
    isMouseDown = false;
    updateCursorImage();
  });

  // Initialize cursor image
  updateCursorImage();
});
