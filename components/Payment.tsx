import React, { useEffect, useState, useContext } from 'react';
import {MenuContext, PageContext} from '../data/context';
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

const Payment = () => {
  const [active, setActive] = useState(false);
  const menu = useContext(MenuContext);
  const {items, setItems} = menu;
  const {setPage} = useContext(PageContext);
  const setPaymentOrder = (e: any) => {
    if(active) {
      e.preventDefault();
      setPage("payment");
    }
  }

  const clearItems = () => {
    if(active) {
      setItems([]);
    }
  }
  useEffect(() => {
    setActive(items.length !== 0);
  }, [items]);
  return (
    <PaymentWrapper>
      <CancelButton active={active} onClick={clearItems}>취소</CancelButton>
      <PaymentButton active={active} onClick={setPaymentOrder}>결제하기</PaymentButton>
    </PaymentWrapper>
  );
}

export default Payment;