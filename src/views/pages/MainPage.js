import Top from "../sections/Top/Top";
import Header from "../Header/Header";
import {useState} from "react";

const MainPage = () => {

    const [userWantsToSearch, setUserWantsToSearch] = useState(false)

    return (
        <main>
            <Header userWantsToSearch={userWantsToSearch}
                    setUserWantsToSearch={setUserWantsToSearch}
            />
            <Top userWantsToSearch={userWantsToSearch}/>
        </main>
    )
}

export default MainPage
