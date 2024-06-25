// ModalContext.tsx
import React, { createContext, useState } from 'react';
import Modal from './modal';

type Modal = {
  id: string;
  content: React.ReactNode;
}

type ModalContextType = {
  modals: Modal[];
  openModal: (modal: Modal) => void;
  closeModal: (id: string) => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

type props={
    children:JSX.Element
}
export const ModalProvider = ({ children }:props) => {
  const [modals, setModals] = useState<Modal[]>([]);

  const openModal = (modal: Modal) => {
    setModals([...modals, modal]);
  }

  const closeModal = (id: string) => {
    setModals(modals.filter(modal => modal.id !== id));
  }

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children}
      <div>
        {modals.map(modal => (
          <Modal key={modal.id} id={modal.id} content={modal.content} />
        ))}
      </div>
    </ModalContext.Provider>
  );
}


