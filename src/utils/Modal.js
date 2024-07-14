import { HiXMark } from 'react-icons/hi2';
import { createPortal } from 'react-dom';

function Modal({ children, onClose }) {
  return createPortal(
    <div className="overlay">
      <div className="styled-modal">
        <button
          className="absolute right-16 top-8 bg-black p-2 text-white"
          onClick={onClose}
        >
          <HiXMark />
        </button>

        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
