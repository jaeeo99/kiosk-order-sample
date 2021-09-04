import {useContext} from 'react';
import styled from 'styled-components';
import {MenuContext, PageContext, StepContext} from '../../../data/context';
import { LgSpanBlack, LgSpanPrimary, SmSpanLightBlack } from '../../StyledText';

const ComplateOrderArea = styled.div`
  height: 75.52hv;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ComplateOrderTitle = styled.div`
  margin: 100px;
`;

const ComplateOrderNo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > span {
    margin: 20px;
  }
  & > span:nth-child(2) {
    font-family: S-CoreDream-9;
    font-size: 200px;
    font-weight: 900;
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
  }
`;

const ComplateOrderImage = styled.img`
  margin: 120px;
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