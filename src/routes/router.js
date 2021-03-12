import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import AddImagePage from "../pages/AddImagePage/AddImagePage"
import FeedPage from "../pages/FeedPage/FeedPage"
import ImageDetailPage from "../pages/ImageDetailPage/ImageDetailPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SingupPage from "../pages/SingupPage/SignupPage"

const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                
                <Route exact path="/signup">
                    <SingupPage/>
                </Route>

                <Route exact path="/login">
                    <LoginPage/>
                </Route>

                <Route exact path="/">
                    <FeedPage/>
                </Route>

                <Route exact path="/new-image">
                    <AddImagePage/>
                </Route>

                <Route exact path="/detail/:id">
                    <ImageDetailPage/>
                </Route>

                <Route>
                    <div>
                        Erro
                    </div>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router