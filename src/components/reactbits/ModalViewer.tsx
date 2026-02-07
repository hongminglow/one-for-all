"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ModalViewer.css";

interface ModalViewerProps {
  triggerText?: string;
  title?: string;
  content?: React.ReactNode;
}

const ModalViewer: React.FC<ModalViewerProps> = ({
  triggerText = "Open Modal",
  title = "Modal Title",
  content = "This is a modal viewer component.",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="modal-viewer-container">
      <button onClick={() => setIsOpen(true)} className="modal-trigger-btn">
        {triggerText}
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="modal-overlay" onClick={() => setIsOpen(false)}>
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="modal-title">{title}</h2>
              <div className="modal-body">{content}</div>
              <div className="modal-footer">
                <button
                  className="modal-close-btn"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalViewer;
