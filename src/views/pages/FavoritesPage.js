import Header from "../Header/Header";
import {colors} from "../../data/siteConfig";
import Subcsribe from "../sections/Subscribe/Subscribe";
import Footer from "../Footer/Footer";
import {Favorites} from "../sections/Favorites/Favorites";

const FavoritesPage = () => {
    return (
        <>
            <Header color={colors.black}
                    bg='rgba(208, 196, 185, 0.2)'
                    hoverBg='rgba(208, 196, 185, 0.2)'
            />
            <Favorites/>
            <Subcsribe/>
            <Footer/>
        </>
    )
}

export default FavoritesPage
