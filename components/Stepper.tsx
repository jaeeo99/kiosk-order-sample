import React, {useState} from 'react';
import styled from 'styled-components';

const StepperWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const StepItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 65px;
  background-color: ${props => props.passed ? '#eec2c2' : '#ffffff'}
`;

const paymentSteps = [
  {no: 1, name: '주문 확인'},
  {no: 2, name: '결제수단선택'},
  {no: 3, name: '신용카드결제'},
  {no: 4, name: '주문완료'},
];

const StepNo = styled.span`
  font-family: S-CoreDream-6;
  font-size: 20px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
`;

const StepName = styled.span`
  font-family: S-CoreDream-7;
  font-size: 30px;
  font-weight: 700;
  color: #000;
  margin: 10px 0;
`;

const Stepper = (props) => {
  const {step} = props;
  return (<StepperWrapper>
    {paymentSteps.map((paymentStep, idx) => (
      <StepItem key={idx} passed={idx <= step}>
        <StepNo>STEP {paymentStep.no}</StepNo>
        {step === idx && <StepName>{paymentStep.name}</StepName>}
      </StepItem>
    ))}
  </StepperWrapper>);
}

export default Stepper;