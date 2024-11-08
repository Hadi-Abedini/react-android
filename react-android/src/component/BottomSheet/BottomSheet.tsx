import React, { ReactNode, CSSProperties } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BottomSheet.css';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  height?: string;
  backgroundColor?: string;
  handleColor?: string;
  animationDuration?: number;
  customStyles?: CSSProperties;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  children,
  height = '50%',
  backgroundColor = '#ffffff',
  handleColor = '#ccc',
  animationDuration = 0.3,
  customStyles,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background overlay */}
          <motion.div
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="bottom-sheet"
            style={{
              height,
              backgroundColor,
              ...customStyles,
            }}
            initial={{ y: '100%' }} // Initial position off-screen
            animate={{ y: 0 }} // Animate to 0 when open
            exit={{ y: '100%' }} // Animate back off-screen when closing
            transition={{ duration: animationDuration, ease: 'easeInOut' }}
          >
            <div className="handle" style={{ backgroundColor: handleColor }} />
            <div className="content">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet;