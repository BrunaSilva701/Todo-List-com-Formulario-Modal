import { useState } from "react";
import styles from "./Modal.module.css";
import ContactForm from "../contactForm/ContactForm";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Abrir Modal</button>

      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Modal Title</h3>
            {/* Formulario de Contato */}
            <ContactForm />
            <button
              onClick={() => setIsOpen(false)}
              className={styles.closeButton}
            >
              Fechar Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
