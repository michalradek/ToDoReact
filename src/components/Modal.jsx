import React from "react";

export const Modal = ({ open, onClose }) => {

    if(!open) return null

    return (
        <div className="overlay">
            <div className="modalContainer">
            <p className="modalCloseButtonX" onClick={onClose}>x</p>
                    <input className="modalInput" type="text" placeholder="Write your task here"></input>
                    <div className="modalButtonDiv">
                        <button className="modalSaveButton modalButton">Save</button>
                        <button className="modalCloseButton modalButton" onClick={onClose}>Close</button>
                    </div>
            </div>
        </div>
    )
}

export default Modal;
