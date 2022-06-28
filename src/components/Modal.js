import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Modal = () => {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState('submit');

  const goToResult = () => {
    navigate('/result');
  };

  const handleModalType = () => {
    setModalType('result');
  };
  return (
    <ModalBackground>
      <ModalWindow modalType={modalType}>
        <ModalIcon src="/images/modalIcon.png" />
        <ModalDesc>Are you Sure you want {`\n`}to submit Quiz?</ModalDesc>
        <ModalBtnContainer>
          <ModalBtn>No</ModalBtn>
          <ModalBtn
            onClick={() => {
              if (modalType === 'submit') {
                handleModalType();
              } else {
                goToResult();
              }
            }}
          >
            Yes
          </ModalBtn>
        </ModalBtnContainer>
      </ModalWindow>
    </ModalBackground>
  );
};

export default Modal;

const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 10;
`;

const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  ${props =>
    props.modalType === 'submit'
      ? css`
          width: 400px;
        `
      : css`
          width: 511px;
        `}

  height: 402px;
  border: 1px solid #eeeef0;
  border-radius: 30px;
  padding: 48px;
`;

const ModalDesc = styled.p`
  color: black;
  font-weight: 400;
  font-size: 16px;
  white-space: pre-wrap;
  text-align: center;
  line-height: 24px;
`;

const ModalIcon = styled.img`
  width: 140px;
`;

const ModalBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 60px;
  padding: 0, 16px;
`;

const ModalBtn = styled.button`
  font-weight: 700;
  font-size: 16px;
`;
