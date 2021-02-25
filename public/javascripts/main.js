const loginBtn = document.querySelector(".login-btn")
const closeForm = document.querySelectorAll(".fa-times")
const signupLink = document.querySelector(".signup-link")
const loginLink = document.querySelector(".login-link")
const loginForm = document.querySelector(".login-form")
const signupForm = document.querySelector(".signup-form")
const submitBtn = document.querySelectorAll(".submit-btn")

loginBtn.addEventListener("click", () => {
    loginForm.classList.add("show-form")
})

closeForm.forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
        if(closeBtn.classList.contains("login"))
        {
            loginForm.classList.remove("show-form")
        }
        else
        {
            signupForm.classList.remove("show-form")
        }
    })
})

signupLink.addEventListener("click", (e) => {
    e.preventDefault()
    loginForm.classList.remove("show-form")
    signupForm.classList.add("show-form")
})

loginLink.addEventListener("click", (e) => {
    e.preventDefault()
    signupForm.classList.remove("show-form")
    loginForm.classList.add("show-form")
})


