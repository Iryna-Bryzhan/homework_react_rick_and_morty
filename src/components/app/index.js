import { BrowserRouter, Route, Routes } from "react-router-dom";
import { req } from "../../method/method";
import { useState } from "react";
import MainPage from "../../pages/mainPages/mainPage";
import Menu from "../../pages/menu";
import Details from "../../pages/details/details";
import NotFaund from "../../pages/notFaund";

export default function App() {
  const [screen2, setScreen2] = useState({
    display: "",
    status: false,
    page: 1,
  });
  const [reqData, setReqData] = useState([]);

  function clickMenu(e, d, p) {
    setScreen2({ display: d, status: true, page: p });

    req(`https://rickandmortyapi.com/api/${d.toLowerCase()}/?page=${p}`).then(
      (info) => {
        setReqData(info);
      }
    );
  }

  const handlePageChange = (page) => {
    setScreen2({ ...screen2, page });

    req(
      `https://rickandmortyapi.com/api/${screen2.display.toLowerCase()}/?page=${page}`
    ).then((info) => {
      setReqData(info);
    });
  };

  console.log(reqData);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainPage click={clickMenu}></MainPage>}
          ></Route>

          <Route
            path="/character"
            element={
              <Menu
                click={clickMenu}
                displayName={screen2.display}
                data={reqData}
                setPage={handlePageChange}
              ></Menu>
            }
          ></Route>

          <Route
            path="/location"
            element={
              <Menu
                click={clickMenu}
                displayName={screen2.display}
                data={reqData}
                setPage={handlePageChange}
              ></Menu>
            }
          ></Route>

          <Route
            path="/episode"
            element={
              <Menu
                click={clickMenu}
                displayName={screen2.display}
                data={reqData}
                setPage={handlePageChange}
              ></Menu>
            }
          ></Route>
          <Route
            path="/character/:id"
            element={
              <Details url="https://rickandmortyapi.com/api/character/"></Details>
            }
          ></Route>
          <Route
            path="/location/:id"
            element={
              <Details url="https://rickandmortyapi.com/api/location/"></Details>
            }
          ></Route>
          <Route
            path="/episode/:id"
            element={
              <Details url="https://rickandmortyapi.com/api/episode/"></Details>
            }
          ></Route>
          <Route path="*" element={<NotFaund></NotFaund>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
