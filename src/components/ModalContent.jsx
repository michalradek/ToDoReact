import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CustomStyles = {
  content: {
    backgroundColor: "grey",
    border: "none",
    height: "15vh",
  },
  overlay: {
    backgroundColor: "transparent",
  },
};

export const ModalContent = ({ isOpen, closeModal, onSave}) => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  }

  const handleSaveButtonClick = () => {
    
    if(inputValue.trim() === "") {
      alert("Write your task");
    }
    else {
      onSave(inputValue);
    }
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={CustomStyles}>
      <div className="modalDivContent">
        <input
          placeholder="Write your task here"
          type="text"
          className="modalInput"
          onChange={(e) => handleInputChange(e.target.value)}></input>
        <div className="modalButtonDiv">
          <button className="modalButton modalSaveButton" onClick={handleSaveButtonClick}>Save</button>
          <button onClick={closeModal} className="modalButton modalCloseButton">Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalContent;
