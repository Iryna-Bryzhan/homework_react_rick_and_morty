import React from "react";
import Card from "./card";

function Cards({ data, category }) {
  if (
    !data ||
    !data.results ||
    !Array.isArray(data.results) ||
    data.results.length === 0
  ) {
    return <div>No data available</div>;
  }

  return (
    <div className="cards">
      {data.results.map((e) => (
        <Card key={e.id} data={e} category={category} />
      ))}
    </div>
  );
}

export default Cards;
