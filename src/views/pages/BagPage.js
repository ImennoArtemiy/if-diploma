import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Subcsribe from "../sections/Subscribe/Subscribe";
import Bag from "../sections/Bag/Bag";
import {colors} from "../../data/siteConfig";

const BagPage = () => {
    return (
        <>
            <Header color={colors.black}
                    bg='rgba(208, 196, 185, 0.2)'
                    hoverBg='rgba(208, 196, 185, 0.2)'
            />
            <Bag/>
            <Subcsribe/>
            <Footer/>
        </>
    )
}

export default BagPage
