import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";
import Search from "../../components/search/search";
import "./mainPage.css";
import "../../index.css";

function MainPage({ click }) {
  return (
    <>
      <div className="main">
        <Header click={click}></Header>
        <Banner></Banner>
        <Search></Search>
      </div>
    </>
  );
}

export default MainPage;
