import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Report from "../pages/Report";
function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={ <Main /> } />
      <Route exact path="/report" element={ <Report /> } />
    </Routes>
  );
}

export default Routers;