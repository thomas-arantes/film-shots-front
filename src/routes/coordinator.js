export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSingup = (history) => {
    history.push("/singup")
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