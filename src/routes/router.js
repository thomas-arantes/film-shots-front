import React from "react"
import { Switch, Route } from "react-router-dom"
import AddImagePage from "../pages/AddImagePage/AddImagePage"
import FeedPage from "../pages/FeedPage/FeedPage"
import ImageDetailPage from "../pages/ImageDetailPage/ImageDetailPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SingupPage from "../pages/SingupPage/SignupPage"

const Router = ({setRightButtonText}) => {
    return(
            <Switch>
                
                <Route exact path="/user/signup">
                    <SingupPage setRightButtonText = {setRightButtonText}/>
                </Route>

                <Route exact path="/user/login">
                    <LoginPage  setRightButtonText = {setRightButtonText}/>
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
    )
}

export default Router