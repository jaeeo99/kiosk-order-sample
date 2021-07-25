import React from 'react';
import styled from 'styled-components';

const PaymentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const CancelButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-family: S-CoreDream-7;
  font-size: 40px;
  font-weight: 700;
  color: #ffffff;
  background-color: ${props => props.active ? '#000000' : '#bdbdbd'};
`;

const PaymentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-family: S-CoreDream-7;
  font-size: 40px;
  font-weight: 700;
  color: #ffffff;
  background-color: ${props => props.active ? '#de0000' : '#828282'};
`;

const Payment = (props) => {
  const {active} = props;
  return (
    <PaymentWrapper>
      <CancelButton active={active}>취소</CancelButton>
      <PaymentButton active={active}>결제하기</PaymentButton>
    </PaymentWrapper>
  );
}

export default Payment;