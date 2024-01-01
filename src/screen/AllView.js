import React from "react";
import Collaboration from "../component/Collaboration/Collaboration";
import SmoothSailing from "../component/Smooth/SmoothSailing";
import FlowLess from "../component/FlowLess/FlowLess";
import RecentWorks from "../component/RecentWorks/RecentWorkMainPage";
import MainView from "../component/MainView/MainView";
import PostMainPage from "../component/MyPosts/PostMainPage";
import MyInfo from "../component/MyInfo/MyInfo";

const AllView = () => {
  return (
    <div className="bg-gray-100">
      <MainView />
      <Collaboration />
      <SmoothSailing />
      <FlowLess />
      <MyInfo />
      <RecentWorks />
      <PostMainPage />
    </div>
  );
};

export default AllView;
