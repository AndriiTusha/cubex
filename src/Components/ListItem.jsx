import React, { useState } from "react";
import Item from "../Components/Item";
import { useSelector } from "react-redux";
import MyLi from "../UI/MyLi";

const ListItem = () => {
  const elements = useSelector((state) => state.elements);
  console.log("List elems ", elements);
  return (
    <ul>
      {elements
        .map((element) => (
          <Item element={element} key={element.id}>
            {element.text}
            {element.isSublist
              ? element.subList
                  .map((sub) => (
                    <ul>
                      <Item key={sub.id} element={sub}>
                        {sub.text}
                      </Item>
                    </ul>
                  ))
                  .reverse()
              : null}
          </Item>
        ))
        .reverse()}
    </ul>
  );
};

export default ListItem;
