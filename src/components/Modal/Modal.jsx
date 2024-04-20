import { useEffect } from 'react';
import './Modal.css';

const Modal = ({ children, isOpen, setIsOpen }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }    
  }, [isOpen]);


  useEffect(() => {
    const closeModal = (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("click", closeModal);
    return () => window.removeEventListener("click", closeModal);
  }, []);

  return (
    <section className="modal">
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <section className="modal-content">
          <button className="btn-close" onClick={() => setIsOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          {children}
        </section>
      </div>
    </section>
  )
}

export { Modal };