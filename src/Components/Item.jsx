import React from "react";
import MyInput from "../UI/MyInput";
import MyButton from "../UI/MyButton";
import MyLi from "../UI/MyLi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addSubListCreator,
  addValueCreator,
  removeValueCreator
} from "../reducer/listReducer";

function Item({ element, children, ...props }) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const addElement = (value) => {
    dispatch(addValueCreator(value));
  };
  const removeElement = (id) => dispatch(removeValueCreator(id));
  const addSublist = () => dispatch(addSubListCreator());
  //console.log('Item', element);
  return (
    <MyLi>
      {element.isInputField ? (
        <MyInput
          type="text"
          value={value}
          placeholder="Enter some text here"
          onChange={(event) => setValue(event.target.value)}
        />
      ) : (
        children
      )}

      {element.isSublist ? (
        <MyButton>Delete Sublist</MyButton>
      ) : !element.isAddButton ? (
        <MyButton onClick={() => addSublist()}>Add Sublist</MyButton>
      ) : null}
      {element.isDelButton ? (
        <MyButton onClick={() => removeElement(element.id)}>Remove</MyButton>
      ) : null}
      {element.isAddButton ? (
        <MyButton
          onClick={() => {
            addElement(value);
            setValue("");
          }}
        >
          Add
        </MyButton>
      ) : null}
    </MyLi>
  );
}

export default Item;
