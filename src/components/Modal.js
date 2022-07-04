import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Modal = ({ setQuestionIndex, questionIndex }) => {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState('submit');
  const leftTime = useSelector(state => state.timer.leftTime);
  console.log(leftTime);
  const goToResult = () => {
    navigate('/result');
  };

  const handleModalType = () => {
    setModalType('result');
  };

  const handleSubmitBtn = () => {
    //결과 POST통신 함수
  };

  return (
    <ModalBackground>
      <ModalWindow modalType={modalType}>
        <ModalIcon src="/images/modalIcon.png" />
        {modalType === 'submit' ? (
          <>
            <ModalDesc>Are you Sure you want {`\n`}to submit Quiz?</ModalDesc>
            <ModalBtnContainer>
              <ModalBtn
                onClick={() => {
                  setQuestionIndex(9);
                }}
              >
                No
              </ModalBtn>
              <ModalBtn
                onClick={() => {
                  handleModalType();
                }}
              >
                Yes
              </ModalBtn>
            </ModalBtnContainer>
          </>
        ) : (
          <>
            <ModalDesc>
              Congratulations you have passed {'\n'} You scored 80%
            </ModalDesc>
            <ModalBtn
              onClick={() => {
                goToResult();
              }}
            >
              Review Quiz
            </ModalBtn>
          </>
        )}
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
