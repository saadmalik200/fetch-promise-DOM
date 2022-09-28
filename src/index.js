// The following line makes sure your styles are included in the project. Don't remove this.
import "./styles/main.scss";
// Import any additional modules you want to include below \/
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
// \/ All of your javascript should go here \/

const promiseFunction = new Promise((resolve, reject) => {
  //   console.log("Inside a promise");
  setTimeout(() => {
    resolve();
  }, 60000);
});

promiseFunction.then(() => {
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});
