import * as React from "react";

// Define DialogProps with correct types
export interface DialogProps {
  isOpen: boolean; // boolean to represent if the dialog is open or not
  onClose: () => void; // function to close the dialog
  children: React.ReactNode; // Define children as React.ReactNode to accept any valid React content
}

// Main Dialog component
export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Return nothing if the dialog is closed

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-md p-6">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// DialogContent component
export const DialogContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

// DialogHeader component
export const DialogHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="text-xl font-bold">{children}</div>;
};

// DialogTitle component
export const DialogTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h3 className="text-2xl">{children}</h3>;
};
