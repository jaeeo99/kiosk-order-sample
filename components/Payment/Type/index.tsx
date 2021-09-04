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
  width: 475px;
  height: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const OrderTypeIcon = styled.img`
  width: 298.2px;
  height: 256.3px;
`;

const SelectOrderTypeArea = styled.div`
  flex: 11.3 11.3 1130px;
  background-color: #f2f2f2;
`;

const StepTitle = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > span {
    line-height: 72px;
  }
`;

const OrderCancelArea = styled.div`
  flex: 3.2 3.2 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrderPriceArea = styled.div`
  width: calc(100% - 130px);
  height: 155px;
  padding: 0 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OrderCancelButton = styled.div`
  position: relative;
  width: 770px;
  height: 100px;
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
  const price = items.reduce((total, item) => total + parseInt(item.price, 10), 0);
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
        <OrderType onClick={() => setStep(2)}>
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