import { Route, Routes } from "react-router-dom";
import Layout from "./Components/LAYOUT/Layout";
import Home from "./Pages/Home";

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
         </Route>
      </Routes>
   );
};

export default App;
