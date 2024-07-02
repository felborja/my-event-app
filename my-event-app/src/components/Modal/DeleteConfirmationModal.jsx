import React from "react";
import Button from "../common/Button";

function DeleteConfirmationModal({ onDelete, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-6 rounded shadow-lg">
        <p className="mb-4">Are you sure you want to delete?</p>
        <div className="flex justify-end space-x-4">
          <Button text="Delete" onClick={onDelete} />
          <Button text="No" onClick={onCancel} />
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
