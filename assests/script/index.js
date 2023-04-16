const mediaRun = new IntersectionObserver((views) => {
  views.forEach((view) => {
    if (view.isIntersecting) {
      view.target.classList.add("show");
    } else {
      view.target.classList.remove("show");
    }
  });
});

const mediaElements1 = document.querySelectorAll(".page3-box");
mediaElements1.forEach((e) => mediaRun.observe(e));

const mediaElements2 = document.querySelectorAll(".page3-box-1");
mediaElements2.forEach((e) => mediaRun.observe(e));

// function saveData() {
//   let email, password;
//   email = document.getElementById("email").value;
//   password = document.getElementById("password").value;

//   let user_records = new Array();
//   user_records = JSON.parse(localStorage.getItem("users"))
//     ? JSON.parse(localStorage.getItem("users"))
//     : [];
//   if (
//     user_records.some((v) => {
//       return v.email == email && v.password == password;
//     })
//   ) {
//     console.log("Logged in");
//     window.location.href = "home.html";
//   } else {
//     console.log("Login error");
//     const errorElement = document.getElementById("error-message");
//     errorElement.textContent = "Invalid email or password. Please try again.";
//   }
// }

const button = document.getElementById("save_btn");
const errorElement = document.getElementById("error-message");

function saveData() {
  let userName = document.getElementById("email");
  let passWord = document.getElementById("password");
  localStorage.setItem("email", "uday@gmail.com");
  localStorage.setItem("password", "uday123");

  let correctEmail = localStorage.getItem("email");
  let correctPassword = localStorage.getItem("password");

  if (userName.value === correctEmail && passWord.value === correctPassword) {
    window.location.href = "home.html";
    console.log("Logged in");
  } else {
    errorElement.textContent = "Invalid email or password. Please try again.";
  }
}

button.addEventListener("click", () => {
  saveData();
});
