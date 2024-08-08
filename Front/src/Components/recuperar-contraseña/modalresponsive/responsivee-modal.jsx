import  { useState } from 'react';
import { FormRecovery } from '../form-recovery';


const ModalResponsiveRecovery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="p-2 bg-blue-500 text-white rounded">
        Abrir modal
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-full w-full z-50">
          <div className="bg-[#181C20] rounded-lg p-4 h-full w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
      
            </div>
            <div>
            <FormRecovery onclose={closeModal} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalResponsiveRecovery;
