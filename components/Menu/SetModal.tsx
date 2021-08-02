import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const BackgroundMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  z-index: 1;
`;

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalWrapper = styled.div`
  width: 900px;
  height: 1120px;
  background-color: #ffffff;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  font-family: S-CoreDream-7;
  font-size: 35px;
  font-weight: 700;
  color: #000000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 780px;
`;

const ModalContentItem = styled.div`
  flex: 1;
`;

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 220px;
`;

const ModalButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 770px;
  height: 100px;
  border-radius: 5px;
  background-color: #e0e0e0;
  font-family: S-CoreDream-7;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  color: rgba(0, 0, 0, 0.2);
`;

const SetModal = (props) => {
  const [menuTabIndex, setMenuTabIndex] = useState(0);
  const selectMenuTab = (index) => {
    setMenuTabIndex(index);
  };
  return (
    <>
      <BackgroundMask />
      <Modal>
        <ModalWrapper>
          <ModalHeader>원하시는 구성을 선택해주세요</ModalHeader>
          <ModalContent></ModalContent>
          <ModalFooter>
            <ModalButton>확인</ModalButton>
          </ModalFooter>
        </ModalWrapper>
      </Modal>
    </>
  );
}

export default SetModal;