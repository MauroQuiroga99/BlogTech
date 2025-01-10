import React from "react";

interface SnackbarProps {
  message: string;
  onClose: () => void;
}

const Snackbar = ({ message, onClose }: SnackbarProps) => {
  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center">
      <span>{message}</span>
      <button
        className="ml-4 text-red-500 hover:text-red-700 focus:outline-none"
        onClick={onClose}
      >
        ✖️
      </button>
    </div>
  );
};

export default Snackbar;
