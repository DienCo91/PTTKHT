import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navigate from "./Component/Navigate/Navigate";
import Home from "./page/Home/Home";
import ServiceWeb from "./page/ServiceWeb/ServiceWeb";
import MediaAndEntertaiment from "./page/MediaAndEntertaimen/MediaAndEntertaiment";
import Cloud from "./page/Cloud/Cloud.tsx";
import Game from "./page/Game/Game.tsx";
import Design from "./page/DesignUXUI/Design.tsx";
import DevToolBot from "./page/ToolAndBot/ToolAndBot.tsx";
import AboutUS from "./page/AboutUs/AboutUs.tsx";
import Security from "./page/Security/Security.tsx";
import ProcessWork from "./page/ProcessWork/ProcessWork.tsx";
import Human from "page/Human/Human.tsx";
import AiResearch from "./page/AiResearch/AiResearch.tsx";
import Bys from "./Component/BYS/Bys.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/webdesign&development" element={<ServiceWeb />}></Route>
        <Route
          path="/media-and-entertaiment"
          element={<MediaAndEntertaiment />}
        ></Route>
        <Route path="/cloud" element={<Cloud />}></Route>
        <Route path="/games" element={<Game />}></Route>

        <Route path="/design-ui-ux" element={<Design />}></Route>
        <Route path="/about-us" element={<AboutUS />}></Route>
        <Route path="/human" element={<Human />}></Route>
        <Route path="/tool-bot" element={<DevToolBot />}></Route>
        <Route path="/security" element={<Security />}></Route>
        <Route path="/process" element={<ProcessWork />}></Route>
        <Route path="/ai-research" element={<AiResearch />}></Route>
        <Route path="/bys" element={<Bys />}></Route>
        <Route path="/*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
