import React from "react";
// import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./tailwind.css";

import Beginning from "./Pages/Beginning";
import Decision from "./Pages/Decision";
import Backstory from "./Pages/Backstory";
import Training from "./Pages/Training";
// import InBerlin from "./Pages/InBerlin"
import PostWW2 from "./Pages/PostWW2";
import BOarticles from "./Pages/BOarticles";
import MyPhotos from "./Pages/MyPhotos";
import Archives from "./Pages/Archives";
import About from "./Pages/About";
import ArticleJul1770 from "./Pages/ArticleJul1770";
import ArticleJuly3071 from "./Pages/ArticleJul3071";
import ArticleDec1170 from "./Pages/ArticleDec1170";
import ArticleDec1870 from "./Pages/ArticleDec1870";
import ArticleFeb0571 from "./Pages/ArticleFeb0571";
import ArticleFeb1271 from "./Pages/ArticleFeb1271";
import ArticleFeb1971 from "./Pages/ArticleFeb1971";
import ArticleMar0571 from "./Pages/ArticleMar0571";
import ArticleMay0771 from "./Pages/ArticleMay0771";
import ArticleMay1471 from "./Pages/ArticleMay1471";
import ArticleMay2171 from "./Pages/ArticleMay2171";
import ArticleMay2871 from "./Pages/ArticleMay2871";
import ArticleJun2571 from "./Pages/ArticleJun2571";
import ArticleJul0271 from "./Pages/ArticleJul0271";
import ArticleJul0971 from "./Pages/ArticleJul0971";
import ArticleJul1671 from "./Pages/ArticleJul1671";
import ArticleJul3071 from "./Pages/ArticleJul3071";
import ArticleAug2071 from "./Pages/ArticleAug2071";
import ArticleAug2771 from "./Pages/ArticleAug2771";
import ArticleSep2471 from "./Pages/ArticleSep2471";
import ArticleOct1571 from "./Pages/ArticleOct1571";
import ArticleNov0571 from "./Pages/ArticleNov0571";
import ArticleNov2671 from "./Pages/ArticleNov2671";
import ArticleDec0371 from "./Pages/ArticleDec0371";
import ArticleDec1071 from "./Pages/ArticleDec1071";
import ArticleDec1771 from "./Pages/ArticleDec1771";
import ArticleDec2371 from "./Pages/ArticleDec2371";
// import RandomComp from "./Components/RandomComp"

import ArticlePages from "./Components/ArticlePages";

import ScrollToTop from "./Components/ScrollToTop";

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
          <Route exact path="/ArticlePages" element={<ArticlePages />}></Route>

          <Route
            exact
            path="/ArticleJul1770"
            element={<ArticleJul1770 />}
          ></Route>

          <Route
            exact
            path="/ArticleDec1170"
            element={<ArticleDec1170 />}
          ></Route>

          <Route
            exact
            path="/ArticleDec1870"
            element={<ArticleDec1870 />}
          ></Route>

          <Route
            exact
            path="/ArticleFeb0571"
            element={<ArticleFeb0571 />}
          ></Route>

          <Route
            exact
            path="/ArticleFeb1271"
            element={<ArticleFeb1271 />}
          ></Route>

          <Route
            exact
            path="/ArticleFeb1971"
            element={<ArticleFeb1971 />}
          ></Route>

          <Route
            exact
            path="/ArticleMar0571"
            element={<ArticleMar0571 />}
          ></Route>

          <Route
            exact
            path="/ArticleMay0771"
            element={<ArticleMay0771 />}
          ></Route>

          <Route
            exact
            path="/ArticleMay1471"
            element={<ArticleMay1471 />}
          ></Route>

          <Route
            exact
            path="/ArticleMay2171"
            element={<ArticleMay2171 />}
          ></Route>

          <Route
            exact
            path="/ArticleMay2871"
            element={<ArticleMay2871 />}
          ></Route>

          <Route
            exact
            path="/ArticleJun2571"
            element={<ArticleJun2571 />}
          ></Route>

          <Route
            exact
            path="/ArticleJul0271"
            element={<ArticleJul0271 />}
          ></Route>
          <Route
            exact
            path="/ArticleJul0971"
            element={<ArticleJul0971 />}
          ></Route>

          <Route
            exact
            path="/ArticleJul1671"
            element={<ArticleJul1671 />}
          ></Route>

          <Route
            exact
            path="/ArticleJul3071"
            element={<ArticleJul3071 />}
          ></Route>

          <Route
            exact
            path="/ArticleAug2071"
            element={<ArticleAug2071 />}
          ></Route>
          <Route
            exact
            path="/ArticleAug2771"
            element={<ArticleAug2771 />}
          ></Route>
          <Route
            exact
            path="/ArticleSep2471"
            element={<ArticleSep2471 />}
          ></Route>
          <Route
            exact
            path="/ArticleOct1571"
            element={<ArticleOct1571 />}
          ></Route>
          <Route
            exact
            path="/ArticleNov0571"
            element={<ArticleNov0571 />}
          ></Route>
          <Route
            exact
            path="/ArticleNov2671"
            element={<ArticleNov2671 />}
          ></Route>
          <Route
            exact
            path="/ArticleDec0371"
            element={<ArticleDec0371 />}
          ></Route>
          <Route
            exact
            path="/ArticleDec1071"
            element={<ArticleDec1071 />}
          ></Route>
          <Route
            exact
            path="/ArticleDec1771"
            element={<ArticleDec1771 />}
          ></Route>
          <Route
            exact
            path="/ArticleDec2371"
            element={<ArticleDec2371 />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
