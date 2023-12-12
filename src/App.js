import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import MakeTogether from "./component/All/MakeTogether";
import SeePost from "./component/All/SeeAllPost/SeePost";
import SinglePost from "./component/All/SeeAllPost/SinglePost";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MakeTogether />} />
        <Route path="/view/posts" element={<SeePost/>} />
        <Route path="view/post/:id" element={<SinglePost/>} />
        <Route path="/view/posts/view/post/:id" element={<SinglePost/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
