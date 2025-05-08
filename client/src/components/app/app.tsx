import { MainPage } from "../../pages/main-page/main-page";
import { Favorites } from "../../pages/favorites-page/favorites-page";
import { Login } from "../../pages/login-page/login-page";
import { Offer } from "../../pages/offer-page/offer-page";
import { NotFound } from "../../pages/not-found-page/not-found-page";

function App() {
    return (
        <>
            <MainPage />
            <Favorites />
            <Login />
            <Offer />
            <NotFound />
        </>
    )
}

export { App };