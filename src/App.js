import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import SeePost from "./component/SeeAllPost/SeePost";
import Contact from "./component/Contact/Contact";
import RecentWorks from "./component/RecentWorks/RecentWorks";
import SinglePost from "./component/SeeAllPost/SinglePost";
import AllView from "./screen/AllView";
import AboutMe from "./component/AboutMe/AboutMe";
import AllProjects from "./component/AllProjects/AllProjects";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllView />} />
        <Route path="/view/all/projects" element={< AllProjects/>} />
        <Route path="/view/posts" element={<SeePost />} />
        <Route path="view/post/:id" element={<SinglePost />} />
        <Route path="/view/posts/view/post/:id" element={<SinglePost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/view/projects" element={<RecentWorks />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
