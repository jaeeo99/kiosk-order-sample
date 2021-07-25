import React, {useState} from 'react';
import styled from 'styled-components';

const MenuTabWrapper = styled.div`
  flex: 2 2 200px;
  display: grid;
  height: 100px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
`;

const MenuTabItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px rgba(0, 0, 0, 0.4);
  font-family: S-CoreDream-7;
  font-size: 30px;
  font-weight: 800;
  color: ${props => props.active ? '#de0000' : 'rgba(0, 0, 0, 0.4)'};
  border-bottom: ${props => props.active ? '10px solid #de0000' : ''};
`;

const tabList = ['스페셜', '프리미엄', '와퍼&버거', '올데이', '치킨&치킨버거', '사이드', '음료&디저트', ''];

const MenuTab = () => {
  const [index, setIndex] = useState(0);
  const handleClick = (idx) => {
    setIndex(idx);
  }
  return (
    <MenuTabWrapper>
      {tabList.map((tabItem, idx) => <MenuTabItem key={idx} onClick={() => handleClick(idx)} active={idx === index}>{tabItem}</MenuTabItem>) }
    </MenuTabWrapper>
  )
}

const MenuListWrapper = styled.div`
  flex: 9.3 9.3 930px;
`;

const MenuList = () => {
  return (
    <MenuListWrapper>

    </MenuListWrapper>
  )
}

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuTab></MenuTab>
      <MenuList></MenuList>
    </MenuWrapper>
  );
}

export default Menu;