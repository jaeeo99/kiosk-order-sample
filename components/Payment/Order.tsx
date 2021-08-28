import React, {useState, useContext} from 'react';
import {MenuContext, PageContext, StepContext} from '../../data/context';
import styled from 'styled-components';
import Stepper from '../Stepper';

const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StepArea = styled.div`
  flex: 1 1 100px;
  height: 100px;
`;

const OrderedMenuArea = styled.div`
  flex: 10.7 10.7 1070px;
  height: 1070px;
  overflow: scroll;
  padding: 30px 65px;
  background-color: #f2f2f2;
`;

const PriceArea = styled.div`
  flex: 2.2 2.2 220px;
  padding: 0 65px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const OrderPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  font-family: S-CoreDream-7;
  font-size: 30px;
  font-weight: 700;
  color: #000;
`;

const DiscountPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  font-family: S-CoreDream-5;
  font-size: 30px;
  font-weight: 500;
  color: #000;
`;

const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  font-family: S-CoreDream-7;
  font-size: 40px;
  font-weight: 700;
  color: #000;
  & > span:nth-child(2) {
    color: #de0000;
  }
`;

const ButtonArea = styled.div`
  flex: 1 1 100px;
  display: flex;
  font-family: S-CoreDream-7;
  font-size: 40px;
  font-weight: 700;
  color: #fff;
`;

const CancelButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

const OrderButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #de0000;
`;

const OrderedItemWrapper = styled.div`
  height: 420px;
  background-color: #fff;
`;

const OrderedItemTitle = styled.div`
  position: relative;
  padding: 0 65px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 220px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  & > span {
    margin: 14px 0;
    font-family: S-CoreDream-7;
    font-size: 30px;
    font-weight: 700;
    color: #000;
  }
  & > span:nth-child(2) {
    color: #de0000;
  }
  & > img {
    position: absolute;
    right: 85px;
    height: 80%;
  }
`;

const OrderedItemSize = styled.div`
  padding: 0 65px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    font-family: S-CoreDream-7;
    font-size: 30px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const OrderedItemPrice = styled.div`
  padding: 0 65px;
  height: 100px;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    font-family: S-CoreDream-7;
    font-size: 30px;
    font-weight: 700;
    color: #000;
  }
  & > span:nth-child(2) {
    color: #de0000;
  }
`;

const OrderedItem = (props) => {
  const {item} = props;
  return <OrderedItemWrapper>
    <OrderedItemTitle>
      <span>{item.menuName}</span>
      <span>{item.price}원</span>
      <img src={item.img}/>
    </OrderedItemTitle>
    <OrderedItemSize>
      <span>수량</span>
      <span>1</span>
    </OrderedItemSize>
    <OrderedItemPrice>
      <span>합계금액</span>
      <span>{item.price}원</span>
    </OrderedItemPrice>
  </OrderedItemWrapper>;
}

const OrderStep1 = () => {
  const {items} = useContext(MenuContext);
  const {setPage} = useContext(PageContext);
  const {setStep} = useContext(StepContext);
  const price = items.reduce((total, item) => total + parseInt(item.price, 10), 0);
  return <>
    <OrderedMenuArea>
      {items.map((item, idx) => <OrderedItem key={idx} item={item} />)}
    </OrderedMenuArea>
    <PriceArea>
      <OrderPrice>
        <span>주문 금액</span><span>{price}원</span>
      </OrderPrice>
      <DiscountPrice>
        <span>할인 금액</span><span>0원</span>
      </DiscountPrice>
      <TotalPrice>
        <span>총 결제금액</span><span>{price}원</span>
      </TotalPrice>
    </PriceArea>
    <ButtonArea>
      <CancelButton onClick={() => setPage('order')}>취소</CancelButton>
      <OrderButton onClick={() => setStep(1)}>결제하기</OrderButton>
    </ButtonArea>
  </>;
}

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
    font-family: S-CoreDream-7;
    font-size: 60px;
    font-weight: 800;
    line-height: 72px;
    color: #000;
  }
  & > span:nth-child(1) {
    color: #de0000;
  }
`;
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

const OrderTypeText = styled.div`
  font-family: S-CoreDream-7;
  font-size: 30px;
  font-weight: 800;
  color: #000;
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
  & > span {
    font-family: S-CoreDream-7;
    font-size: 40px;
    font-weight: 700;
    color: #000;
  }
  & > span:nth-child(2) {
    color: #de0000;
  }
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
  font-family: S-CoreDream-7;
  font-size: 40px;
  font-weight: 800;
  color: #ffffff;
`;

const OrderStep2 = () => {
  const {items} = useContext(MenuContext);
  const {setPage} = useContext(PageContext);
  const {setStep} = useContext(StepContext);
  const price = items.reduce((total, item) => total + parseInt(item.price, 10), 0);
  return <>
    <SelectOrderTypeArea>
      <StepTitle>
        <span>결제수단을</span>
        <span>선택해주세요</span>
      </StepTitle>
      <OrderTypeArea>
        <OrderType onClick={() => setStep(2)}>
          <OrderTypeIcon src="/order/ic_payment_card.png" />
          <OrderTypeText>신용카드</OrderTypeText>
        </OrderType>
        <OrderType onClick={() => setStep(2)}>
          <OrderTypeIcon src="/order/ic_payment_payco.png" />
          <OrderTypeText>페이코</OrderTypeText>
        </OrderType>
      </OrderTypeArea>
    </SelectOrderTypeArea>
    <OrderCancelArea>
      <OrderPriceArea>
        <span>총 결제금액</span>
        <span>{price}원</span>
      </OrderPriceArea>
      <OrderCancelButton onClick={() => setPage('order')}>결제취소</OrderCancelButton>
    </OrderCancelArea>
  </>;
}

const InsertImage = styled.img`
  display: block;
  margin: 0 auto;
`

const OrderStep3 = () => {
  const {items} = useContext(MenuContext);
  const {setPage} = useContext(PageContext);
  const {setStep} = useContext(StepContext);
  const price = items.reduce((total, item) => total + parseInt(item.price, 10), 0);
  return <>
    <SelectOrderTypeArea>
      <StepTitle>
        <span>신용카드를</span>
        <span>투입구에 꽂아주세요</span>
      </StepTitle>
      <InsertImage onClick={() => setStep(3)} src="order/ic_payment_insert.png"/>
    </SelectOrderTypeArea>
    <OrderCancelArea>
      <OrderPriceArea>
        <span>총 결제금액</span>
        <span>{price}원</span>
      </OrderPriceArea>
      <OrderCancelButton onClick={() => setPage('order')}>결제취소</OrderCancelButton>
    </OrderCancelArea>
  </>;
}

const ComplateOrderArea = styled.div`
  flex: 1 1 1450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ComplateOrderTitle = styled.div`
  margin: 100px;
  font-family: S-CoreDream-7;
  font-size: 60px;
  font-weight: 800;
  color: #000;
`;

const ComplateOrderNo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > span {
    margin: 20px;
    font-family: S-CoreDream-7;
    font-size: 40px;
    font-weight: 800;
    color: #de0000;
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
  font-family: S-CoreDream-5;
  font-size: 30px;
  font-weight: 500;
  color: #000;
  & > span {
    display: block;
    line-height: 36px;
  }
`;

const ComplateOrderImage = styled.img`
  margin: 120px;
`

const OrderStep4 = () => {
  const {setItems} = useContext(MenuContext);
  const {setPage} = useContext(PageContext);
  return <>
    <ComplateOrderArea>
      <ComplateOrderTitle>주문이 완료되었습니다!</ComplateOrderTitle>
      <ComplateOrderNo>
        <span>주문번호</span>
        <span>123</span>
      </ComplateOrderNo>
      <ComplateOrderMessage>
        <span>신용카드를 뽑은 후</span>
        <span>출력된 영수증을 받아가세요!</span>
      </ComplateOrderMessage>
      <ComplateOrderImage onClick={() => {setItems([]); setPage('home')}} src="/order/ic_payment_complate.png"/>
    </ComplateOrderArea>
  </>;
}

const renderStep = (index) => {
  switch(index) {
    case 0:
    default:
      return <OrderStep1 />;
    case 1:
      return <OrderStep2 />;
    case 2:
      return <OrderStep3 />;
    case 3:
      return <OrderStep4 />;
  }
}

const Order = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const stepContext = {step: stepIndex, setStep: setStepIndex};
  return (
    <>
      <OrderWrapper>
        <StepContext.Provider value={stepContext}>
          <StepArea>
            <Stepper step={stepIndex} />
          </StepArea>
          {renderStep(stepIndex)}
        </StepContext.Provider>
      </OrderWrapper>
    </>
  );
}

export default Order;