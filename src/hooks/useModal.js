import { useState } from 'react';

const useModal = () => {
const [isModalVisible, setIsModalVisible] = useState(false);

  const toggle = () => {
    setIsModalVisible(!isModalVisible);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };
  return {
    isModalVisible,
    toggle,
    showModal,
    hideModal
  }
};

export default useModal;
