import React, { useContext } from "react";
import { data } from "../card/cards-data";
import Card from "../card/Card";
import Title from "../title/Title";
import Tab from "../tab/Tab";
import { MyContext } from "../../../../context/ContextProvider";

import "../style.scss";

const CardList = (props) => {
  const context = useContext(MyContext);
  const getAll = () =>
    data.map((card) => <Card img={card.src} alt={card.title} key={card.id} />);
  const getFavorite = () =>
    data
      .filter((card) => card.favorite === true)
      .map((elem) => <Card img={elem.src} alt={elem.title} key={elem.id} />);

  return (
      <div className="content_wrap">
      <div className="tabs_header_wrap">
        <Title title={"Courses"} />
        <div className="tabs_wrap">
          <Tab title={"Popular"} onClick={context.clickHandler} className={context.state === "Popular" ? "active" : ''}/>
          <Tab title={"Favorite"} onClick={context.clickHandler} className={context.state === "Favorite" ? "active" : ''}/>
          <Tab title={"New"} onClick={context.clickHandler} className={context.state === "New" ? "active" : ''}/>
        </div>
      </div>
        {context.state === "Popular" || context.state === "New" ? (
          getAll()
        ) : !getFavorite().length ? (
          <p>You have not added anything yet...</p>
        ) : (
          getFavorite()
        )}
      </div>
  );
};

export default CardList;
