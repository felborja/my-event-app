import React from "react";
import Button from "../common/Button";

function DeleteConfirmationModal({ onDelete, onCancel }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to delete?</p>
        <Button text="Delete" onClick={onDelete} />
        <Button text="No" onClick={onCancel} />
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
