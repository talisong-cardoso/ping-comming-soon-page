const bgPopupActive = document.querySelector(".popup__bg-full-screen");
const closePopup = document.querySelector(".popup__button");
const popup = document.querySelector(".popup");
const form = document.querySelector("#notify");

form.addEventListener('submit', handleSubmit);
closePopup.onclick = () => hiddenPopup();

function isValidEmail(email) {
    return !email
        ? "Field is empty"
        : !testEmail(email)
            ? "Please provide a valid email address"
            : true;
}

function testEmail(email) {
    let regEx = /^\w(\w\.?)+\w+@\w+(\.\w+)*(\w?)$/;
    return regEx.test(email);
}

let isabela = "Isabela"

function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email
    const checkEmail = isValidEmail(email.value);
    const error = e.target.children.error;
    const button = e.target.children.button;

    if (typeof checkEmail === 'string') {
        button.style.top = "30px";
        button.classList.add("animate");
        email.style.borderColor = "var(--error-color)";
        error.style.visibility = "visible";
        error.textContent = checkEmail;

        setTimeout(() => {
            button.classList.remove("animate");
        }, 1000);
    } else {
        bgPopupActive.style.display = "block";
        button.style.top = "0";
        email.style.borderColor = "var(--pale-blue-color)";
        email.value = "";
        error.style.visibility = "hidden";
        popup.style.display = "block";
    }
}

function hiddenPopup() {
    popup.setAttribute("style", "")
    bgPopupActive.setAttribute("style", "")
}
