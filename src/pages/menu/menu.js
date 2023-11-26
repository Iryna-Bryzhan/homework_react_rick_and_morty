import Cards from "../../components/cards";
import Header from "../../components/header/header";
import React, { useState, useEffect } from "react";

import "./menu.css";

function Menu({ displayName, click, data, setPage }) {
  const { results, info } = data;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [displayName]);

  const handlePageClick = (page) => {
    setPage(page);
    setCurrentPage(page);
  };

  return (
    <div className="screen2">
      <Header click={click}></Header>
      <h1 displayName={displayName}>{displayName}</h1>
      {displayName && data && results && (
        <>
          <Cards data={data} category={displayName.toLowerCase()}></Cards>
          {info && (
            <div className="pagination">
              {[...Array(info.pages).keys()].map((page) => (
                <button
                  key={page + 1}
                  onClick={() => handlePageClick(page + 1)}
                  className={page + 1 === currentPage ? "active" : ""}
                  disabled={page + 1 === currentPage}
                >
                  {page + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Menu;
