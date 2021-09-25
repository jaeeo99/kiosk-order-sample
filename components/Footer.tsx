import React, {useContext} from 'react';
import styled from 'styled-components';
import { SmSpanWhite } from './StyledText';
import {PageContext, MenuContext} from '../data/context';

const Footer = styled.div`
  padding: 0 6.02vw;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 12.04vw);
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
  @media only screen and (max-width: 820px) {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    & > img {
      width: 20px;
    }
  }
`;

const IconImg = styled.img`
`;

interface INavButtonItem {
  icon: string;
  text: string;
  align: string;
  onClick?: (e: any) => void;
}

const NavButtonItem = (props: INavButtonItem) => {
  const {icon, text, onClick, align} = props;
  return (
    <NavButton onClick={onClick} style={{alignSelf: align}}>
      <NavButtonIcon>
        <IconImg src={icon} />
      </NavButtonIcon>
      <SmSpanWhite margin="2px 0 0 0">{text}</SmSpanWhite>
    </NavButton>
  );
}

const NavFooter = () => {
  const {setItems} = useContext(MenuContext);
  const {setPage} = useContext(PageContext);
  const handleClick = (e: any) => {
    e.preventDefault();
    setPage("home");
    setItems([]);
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