import React from "react"
// import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./tailwind.css"

import Beginning from "./Pages/Beginning"
import Decision from "./Pages/Decision"
import Backstory from "./Pages/Backstory"
import Training from "./Pages/Training"
// import InBerlin from "./Pages/InBerlin"
import PostWW2 from "./Pages/PostWW2"
import BOarticles from "./Pages/BOarticles"
import MyPhotos from "./Pages/MyPhotos"
import Archives from "./Pages/Archives"
import About from "./Pages/About"
import ArticleJuly1770 from "./Pages/ArticleJuly1770"
import ArticleJuly3071 from "./Pages/ArticleJuly3071"
import ArticleDec1170 from "./Pages/ArticleDec1170"
import ScrollToTop from "./Components/ScrollToTop"

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />

        <Routes>
          <Route exact path="/" element={<Decision />}></Route>
          <Route exact path="/Decision" element={<Decision />}></Route>
          <Route exact path="/Beginning" element={<Beginning />}></Route>
          <Route exact path="/Backstory" element={<Backstory />}></Route>
          <Route exact path="/Training" element={<Training />}></Route>
          <Route exact path="/PostWW2" element={<PostWW2 />}></Route>
          {/* <Route exact path="/InBerlin" element={<InBerlin />}></Route> */}
          <Route exact path="/BOarticles" element={<BOarticles />}></Route>
          <Route exact path="/MyPhotos" element={<MyPhotos />}></Route>
          <Route exact path="/Archives" element={<Archives />}></Route>
          <Route exact path="/About" element={<About />}></Route>

          <Route
            exact
            path="/ArticleJuly1770"
            element={<ArticleJuly1770 />}
          ></Route>
          <Route
            exact
            path="/ArticleDec1170"
            element={<ArticleDec1170 />}
          ></Route>

          <Route
            exact
            path="/ArticleJuly3071"
            element={<ArticleJuly3071 />}
          ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
