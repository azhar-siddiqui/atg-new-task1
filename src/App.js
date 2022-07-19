import "./App.css";
// import Header from "./Components/Header/Header";
// import Hero from "./Components/Hero/Hero";
// import PostHeader from "./Components/PostHeader/PostHeader";
// import { Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import CombineComponents from "./Components/CombineComponents";
import AllPost from "./Components/PostHeader/pages/AllPost";
import Article from "./Components/PostHeader/pages/Article";
import Event from "./Components/PostHeader/pages/Event";
import Education from "./Components/PostHeader/pages/Education";
import Job from "./Components/PostHeader/pages/Job";
import WriteAPost from "./Components/PostHeader/pages/WriteAPost";
import JoinGroup from "./Components/PostHeader/pages/JoinGroup";
function App() {
  return (
    <>
      <CombineComponents />
      <Routes>
        <Route path="/*" element={<AllPost />} />
        <Route path="/article" element={<Article />} />
        <Route path="/event" element={<Event />} />
        <Route path="/education" element={<Education />} />
        <Route path="/job" element={<Job />} />
        <Route path="/writepost" element={<WriteAPost />} />
        <Route path="/joingroup" element={<JoinGroup />} />
      </Routes>
    </>
  );
}

export default App;
