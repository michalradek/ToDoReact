import React, { useState } from "react";

export const Modal = ({ open, onClose, onSave }) => {

    const [inputValue, setInputValue] = useState("");
    if(!open) return null

    const handleChangeInput = event => {
        setInputValue(event.target.value);
    }

    const handleClose = () => {
        onClose();
        setInputValue("");
    }

    const handleSave = () => {
        if(inputValue.trim() === "") {
            alert("Please write your task");
        }
        else {
            onSave(inputValue);
            setInputValue("");
        }
    }
    return (
        <div className="overlay">
            <div className="modalContainer">
            <p className="modalCloseButtonX" onClick={handleClose}>X</p>
                    <input className="modalInput" type="text" placeholder="Write your task here" onChange={handleChangeInput} value={inputValue}></input>
                    <div className="modalButtonDiv">
                        <button className="modalSaveButton modalButton" onClick={handleSave}>Save</button>
                        <button className="modalCloseButton modalButton" onClick={handleClose}>Close</button>
                    </div>
            </div>
        </div>
    )
}

export default Modal;
