"use strict";

function main() {

    const form = document.querySelector(".form-container form");

    const firstNameInput = form.querySelector("input[name='first-name']");
    const lastNameInput = form.querySelector("input[name='last-name']");
    const emailInput = form.querySelector("input[name='email']");
    const passwordInput = form.querySelector("input[name='password']");
    const confirmPasswordInput = form.querySelector(
        "input[name='confirm-password']"
    );
    const submitButton = form.querySelector("button[type='submit']");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password !== confirmPassword) {
            const passwordError = form.querySelector(
                "input[name='password'] + .error"
            );
            passwordError.textContent = "Password does not match";

            passwordInput.classList.add("error-active");
            confirmPasswordInput.classList.add("error-active");
            return;
        }

        console.log({
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        });

        alert("Congrats! You have successfully signed up to a fake page!");
    });

    // If the password has input error and error message and starts to type, the error message should disappear

    passwordInput.addEventListener("input", (event) => {
        const passwordInput = form.querySelector("input[name='password']");
        const passwordError = form.querySelector(
            "input[name='password'] + .error"
        );
        const confirmPasswordInput = form.querySelector(
            "input[name='confirm-password']"
        );

        if (passwordInput.classList.contains("error-active")) {
            passwordError.textContent = "";
            passwordInput.classList.remove("error-active");
            confirmPasswordInput.classList.remove("error-active");
        }
    });

    // checking function
}

window.onload = main;
