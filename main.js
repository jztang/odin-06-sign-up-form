const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const errorMsg = document.querySelector(".input-wrapper .error-msg");

document.querySelectorAll("input[type='password']").forEach((input) => {
  input.addEventListener("input", (e) => {
    console.log("input");
    if (password.value === passwordConfirm.value) {
      password.classList.remove("error");
      passwordConfirm.classList.remove("error");
      errorMsg.style.visibility = "hidden";
    } else {
      password.classList.add("error");
      passwordConfirm.classList.add("error");
      errorMsg.style.visibility = "visible";
    }
  });
});
