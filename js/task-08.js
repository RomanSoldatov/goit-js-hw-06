const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Поля повинні бути заповнені всі!");
  } else {
    const Data = {
      email: email.value,
      password: password.value,
    };

    console.log(Data);
    event.currentTarget.reset();
  }
}
