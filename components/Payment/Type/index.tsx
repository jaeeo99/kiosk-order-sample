import { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext, PageContext, StepContext } from '../../../data/context';
import { LgSpanBlack, LgSpanPrimary, MdSpanWhite, MdSpanBlack, MdSpanPrimary, SmSpanBlack } from '../../StyledText';

const OrderTypeArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OrderType = styled.div`
  width: 44vw;
  height: 24.48vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const OrderTypeIcon = styled.img`
  width: 27.61vw;
`;

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

const Type = () => {
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
        <LgSpanPrimary>결제수단을</LgSpanPrimary>
        <LgSpanBlack>선택해주세요</LgSpanBlack>
      </StepTitle>
      <OrderTypeArea>
        <OrderType onClick={() => setStep(2)}>
          <OrderTypeIcon src="/order/ic_payment_card.png" />
          <SmSpanBlack>신용카드</SmSpanBlack>
        </OrderType>
        <OrderType>
          <OrderTypeIcon src="/order/ic_payment_payco.png" />
          <SmSpanBlack>페이코</SmSpanBlack>
        </OrderType>
      </OrderTypeArea>
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

export default Type;