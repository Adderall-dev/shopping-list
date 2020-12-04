import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";

function ShoppingList() {
  const allItems = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({
      type: "DELETE_ALL",
      payload: {
        allItems: allItems,
      },
    });
  };

  return (
    <div className="ShoppingList">
      <ul style={{ listStyle: "none" }}>
        {allItems.map((item) => (
          <Item key={item.id} id={item.id} name={item.name} />
        ))}
      </ul>
      {!allItems.length <= 0 ? (
        <button className="delBtn" onClick={handleDelete}>
          DELETE ALL
        </button>
      ) : null}
    </div>
  );
}

export default ShoppingList;
