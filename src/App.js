import {Routes, Route} from "react-router-dom";
import {navigatePageUrl} from "./data/siteConfig";
import MainPage from "./views/pages/MainPage";
import RegistrationPage from "./views/pages/RegistrationPage";
import GoodPage from "./views/pages/GoodPage/GoodPage";
import BagPage from "./views/pages/BagPage";
import FavoritesPage from "./views/pages/FavoritesPage";

function App() {

    return (
        <Routes>
            <Route path={navigatePageUrl.main} element={<MainPage/>}/>
            <Route path={navigatePageUrl.registration} element={<RegistrationPage/>}/>
            <Route path={navigatePageUrl.good} element={<GoodPage/>}/>
            <Route path={navigatePageUrl.bag} element={<BagPage/>}/>
            <Route path={navigatePageUrl.favorites} element={<FavoritesPage/>}/>
        </Routes>
    );
}

export default App;
