var icon = document.querySelectorAll(".icon");
for (var i = 0; i < icon.length; i++) {
  icon[i].addEventListener("dblclick", function () {
    console.log("I am from AddEventLisenar click function");
    for (let i = 0; i < icon.length; i++) {
      icon[i].classList.remove("active");
    }
    this.classList.add("active");
  });
}

// -----------------------------------------------
// function currentImg(n) {
//   var icon = document.querySelectorAll(".icon");

//   console.log(`I am come from Html`);
//   //   console.log(`First ClassList ${icon.length}`);
//   for (var i = 0; i < icon.length; i++) {
//     icon[i].classList.remove("active");
//   }
//   icon[n - 1].classList.add("active");
// }
