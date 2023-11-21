import React from "react";

function TextAreaInput(props) {
  const postHandler = (e) => {
    props.setPostText((previous) => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div >
      <textarea
      className="textInputAreaBox"
        name="textArea"
        id="inputText"
        cols="72"
        rows="5"
        onChange={(e) => {
          postHandler(e);
        }}
        value={props.postText.textArea || ""}
      ></textarea>
    </div>
  );
}

export default TextAreaInput;
