import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import MakeTogether from "./component/All/MakeTogether";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MakeTogether />} />
        {/* <Route path="/" element={<All />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
