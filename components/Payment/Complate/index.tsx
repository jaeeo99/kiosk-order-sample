import {useContext} from 'react';
import styled from 'styled-components';
import {MenuContext, PageContext} from '../../../data/context';
import { LgSpanBlack, LgSpanPrimary, SmSpanLightBlack } from '../../StyledText';

const ComplateOrderArea = styled.div`
  height: 75.52vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ComplateOrderTitle = styled.div`
  margin: 100px;
  @media only screen and (max-width: 768px) {
    margin: 50px; 
  }
`;

const ComplateOrderNo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > span {
    margin: 20px;
    @media only screen and (max-width: 768px) {
      margin: 10px;
    }
  }
  & > span:nth-child(2) {
    font-family: S-CoreDream-9;
    font-size: 200px;
    font-weight: 900;
    color: #df0000;
    @media only screen and (max-width: 768px) {
      font-size: 140px;
    }
  }
`;

const ComplateOrderMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > span {
    display: block;
    line-height: 36px;
    @media only screen and (max-width: 768px) {
      line-height: 24px;
    }
  }
`;

const ComplateOrderImage = styled.img`
  margin: 120px;
  @media only screen and (max-width: 768px) {
    width: 180px;
    margin: 55px;
  }
`

const Complate = () => {
  const {setItems} = useContext(MenuContext);
  const {setPage} = useContext(PageContext);
  return <>
    <ComplateOrderArea>
      <ComplateOrderTitle>
        <LgSpanBlack>주문이 완료되었습니다!</LgSpanBlack>
      </ComplateOrderTitle>
      <ComplateOrderNo>
        <LgSpanPrimary>주문번호</LgSpanPrimary>
        <span>123</span>
      </ComplateOrderNo>
      <ComplateOrderMessage>
        <SmSpanLightBlack>신용카드를 뽑은 후</SmSpanLightBlack>
        <SmSpanLightBlack>출력된 영수증을 받아가세요!</SmSpanLightBlack>
      </ComplateOrderMessage>
      <ComplateOrderImage onClick={() => {setItems([]); setPage('home')}} src="/order/ic_payment_complate.png"/>
    </ComplateOrderArea>
  </>;
}

export default Complate;