import React, { useState } from 'react';
import './index.scss';
import Modal from './components/Modal';

export default function App() {

  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div className="App">
      
      <button className="open-modal-btn" onClick={() => setIsOpenModal(!isOpenModal)}>✨ Открыть окно</button>
      
      <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    </div>
  );
}

