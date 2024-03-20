import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import Home from "./component/home/Home";
import Details from "./pages/details/Details";
import Search from "./pages/search/Search";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404 page/PageNotFound";
import { useEffect, useState } from "react";
import { FetchApi } from "./utils/Api";
import { useDispatch } from "react-redux";
import { GetApi } from "./redux/slice";



function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    FetchApi("/configuration")
      .then((result) => {
        const url = {
          backdrop: result?.data?.images?.secure_base_url + "original",
          poster: result?.data?.images?.secure_base_url + "original",
          profile: result?.data?.images?.secure_base_url + "original"
        }
        // console.log(url.backdrop)
        dispatch(GetApi(url))
      })
  }, []) 

  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:meadiatype/:id" element={<Details />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
