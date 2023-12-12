import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import MakeTogether from "./component/All/MakeTogether";
import SeePost from "./component/All/SeeAllPost/SeePost";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MakeTogether />} />
        <Route path="/view/posts" element={<SeePost/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
