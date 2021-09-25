import {useContext} from 'react';
import styled from 'styled-components';
import {MenuContext, PageContext, StepContext} from '../../../data/context';
import { LgSpanBlack, LgSpanPrimary, MdSpanBlack, MdSpanPrimary, MdSpanWhite } from '../../StyledText';

const SelectOrderTypeArea = styled.div`
  height: 58.85vh;
  background-color: #f2f2f2;
`;

const StepTitle = styled.div`
  width: 100%;
  height: 19.79vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > span {
    line-height: 72px;
    @media only screen and (max-width: 820px) {
      line-height: 48px;
    }
  }
`;

const OrderCancelArea = styled.div`
  height: 16.67vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrderPriceArea = styled.div`
  width: calc(100% - 130px);
  height: 8.07vh;
  padding: 0 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OrderCancelButton = styled.div`
  position: relative;
  width: 71.3vw;
  height: 5.21vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #000;
`;

const InsertImage = styled.img`
  display: block;
  margin: 0 auto;
  @media only screen and (max-width: 820px) {
    width: 25.45vw;
  }
`

const Pay = () => {
  const {items} = useContext(MenuContext);
  const {setPage} = useContext(PageContext);
  const {setStep} = useContext(StepContext);
  const price = items.reduce((total, item) => {
    switch(item?.setType) {
      case "largeSet":
        return total + parseInt(item?.price || '', 10) + 2700;
      case "set":
        return total + parseInt(item?.price || '', 10) + 2000;
      case "normal":
      default:
        return total + parseInt(item?.price || '', 10);
    }
  }, 0);
  return <>
    <SelectOrderTypeArea>
      <StepTitle>
        <LgSpanPrimary>신용카드를</LgSpanPrimary>
        <LgSpanBlack>투입구에 꽂아주세요</LgSpanBlack>
      </StepTitle>
      <InsertImage onClick={() => setStep(3)} src="order/ic_payment_insert.png"/>
    </SelectOrderTypeArea>
    <OrderCancelArea>
      <OrderPriceArea>
        <MdSpanBlack>총 결제금액</MdSpanBlack>
        <MdSpanPrimary>{price}원</MdSpanPrimary>
      </OrderPriceArea>
      <OrderCancelButton onClick={() => setPage('order')}>
        <MdSpanWhite>결제취소</MdSpanWhite>
      </OrderCancelButton>
    </OrderCancelArea>
  </>;
}

export default Pay;