let playGround = [[]];

let boxes = document.body.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
