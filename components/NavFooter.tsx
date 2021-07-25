import React from 'react';
import {useRouter} from 'next/router';
import styled from 'styled-components';

const Footer = styled.div`
  padding: 0 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 130px);
  height: 100%;
  background-color: #000000;
`;

const NavButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavButtonIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #ffffff;
`;

const NavButtonText = styled.span`
  margin-top: 2px;
  font-family: S-CoreDream-7;
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
`;

const NavButtonItem = (props) => {
  const {icon, text, onClick, align} = props;
  return (
    <NavButton onClick={onClick} style={{alignSelf: align}}>
      <NavButtonIcon>
        <img src={icon} />
      </NavButtonIcon>
      <NavButtonText>{text}</NavButtonText>
    </NavButton>
  );
}

const NavFooter = () => {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push('/');
  }
  return (
    <Footer>
      <NavButtonItem text='쿠폰사용하기' align='left' icon="/order/ic_nav_coupon.png" />
      <NavButtonItem text='알레르기/영양성분' align='right' icon="/order/ic_nav_info.png" />
      <NavButtonItem onClick={handleClick} text='나가기' align='right' icon="/order/ic_nav_arrow.png" />
    </Footer>
  );
}

export default NavFooter;