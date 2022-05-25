import {Routes, Route} from "react-router-dom";
import {navigatePageUrl} from "./data/siteConfig";
import MainPage from "./views/pages/MainPage";
import RegistrationPage from "./views/pages/RegistrationPage";

function App() {
  return (
      <Routes>
          <Route path={navigatePageUrl.main} element={<MainPage/>}/>
          <Route path={navigatePageUrl.registration} element={<RegistrationPage/>}/>
      </Routes>
  );
}

export default App;
