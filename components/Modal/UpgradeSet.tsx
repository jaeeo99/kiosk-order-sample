import {useState, useContext} from 'react';
import styled from 'styled-components';
import { MdSpanBlack, MdSpanWhite, SmSpanBlack, SmSpanPrimary, XsSpanLightGray } from '../StyledText';
import {ModalContext, MenuContext} from '../../data/context';

const ModalHeader = styled.div`
  height: 10.41vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const ModalBody = styled.div`
  height: 24.48vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalFooter = styled.div`
  height: 11.46vh;
  display: flex;
  gap: 2.78vw;
  align-items: center;
  justify-content: center;
`;

const CancelBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 31.4vw;
  height: 5.21vh;
  border-radius: 5px;
  background-color: #000;
`;

const OkBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36.11vw;
  height: 5.21vh;
  border-radius: 5px;
  background-color: #de0000;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.78vw;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 65px;
`;

const Img = styled.img`
  width: 31.48vw;
`;

const SelectSet = () => {
  const { modalProps, closeModal } = useContext(ModalContext);
  const { menu, selected } = modalProps;
  const { setItem } = useContext(MenuContext);
  const isSet = selected === 'set';
  const onCancelBtnClicked = () => {
    closeModal();
    setItem(Object.assign(menu, {setType: selected}));
  }
  const onOkBtnClicked = () => {
    closeModal();
    setItem(Object.assign(menu, {setType: isSet ? 'largeSet' : 'set'}));
  }
  return <>
    <ModalHeader>
      <MdSpanBlack>{isSet ? '700' : '2000'}원을 추가하면, {isSet && '사이드와 음료가'}</MdSpanBlack>
      <MdSpanBlack>{isSet ? '라지사이즈' : '세트'}로 변경 됩니다.</MdSpanBlack>
      <MdSpanBlack>업그레이드 하시겠습니까?</MdSpanBlack>
    </ModalHeader>
    <ModalBody>
      <ImgWrapper>
        <Img src={menu.setImg}/>
      </ImgWrapper>
      <Detail>
        <SmSpanBlack>{menu.menuName} {isSet && '라지'}세트</SmSpanBlack>
        <XsSpanLightGray>{menu.menuName}+프렌치프라이{isSet ? 'L' : 'R'}+콜라{isSet ? 'L' : 'R'}</XsSpanLightGray>
      </Detail>
    </ModalBody>
    <ModalFooter>
      <CancelBtn onClick={onCancelBtnClicked}>
        <MdSpanWhite>아니오</MdSpanWhite>
      </CancelBtn>
      <OkBtn onClick={onOkBtnClicked}>
        <MdSpanWhite>업그레이드 하기</MdSpanWhite>
      </OkBtn>
    </ModalFooter>
  </>;
}

export default SelectSet;