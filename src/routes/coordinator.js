export const goToLogin = (history) => {
    history.push("/user/login")
}

export const goToSignup = (history) => {
    history.push("/user/signup")
}

export const goToFeed = (history) => {
    history.push("/")
}

export const goToAddImage = (history) => {
    history.push("/new-image")
}

export const goToDetail = (history) => {
    history.push("/detail/:id")
}