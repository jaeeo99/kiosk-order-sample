import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {menuTabItems, menuList} from '../../data/menu';
import SetModal from './SetModal';

const MenuTabWrapper = styled.div`
  flex: 2 2 200px;
  display: grid;
  height: 200px;
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

const MenuTab = (props) => {
  const {index, onClick} = props;
  return (
    <MenuTabWrapper>
      {menuTabItems.map((tabItem, idx) => 
        <MenuTabItem key={idx} onClick={() => onClick(idx)} active={idx === index}>{tabItem.title}</MenuTabItem>
      )}
    </MenuTabWrapper>
  )
}

const MenuListWrapper = styled.div`
  flex: 9.3 9.3 930px;
  display: grid;
  height: 930px;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: ${props => props.length === 6 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'};
`;

const MenuListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: S-CoreDream-7;
  font-size: 30px;
  font-weight: 800;
`;

const MenuListImage = styled.img`
  margin: 10px;
  width: ${props => props.size === 6 ? '250px' : '200px'}
`;

const MenuListName = styled.span`
  font-family: S-CoreDream-7;
  margin: 10px;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: #000000;
`;

const MenuListInfo = styled.span`
  font-family: S-CoreDream-6;
  margin: 10px;
  margin-top: 0;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
`;

const MenuListPrice = styled.span`
  font-family: S-CoreDream-7;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: #de0000;
`;

const MenuList = (props) => {
  const {index} = props;
  const [menus, setMenus] = useState([]);
  const [menuLength, setMenuLength] = useState(0);
  useEffect(() => {
    setMenus(menuList.filter((menu) => menu.type == menuTabItems[index].type));
    setMenuLength(menuTabItems[index].itemLength);
  }, [index]);
  return (
    <MenuListWrapper length={menuLength}>
      {menus.map((menu, idx) => 
        <MenuListItem key={idx}>
          <MenuListImage src={`/menu/${menu.type}_${idx}.png`} size={menuLength}/>
          <MenuListName>{menu.menuName}</MenuListName>
          {menu.menuInfo && <MenuListInfo>{menu.menuInfo}</MenuListInfo>}
          <MenuListPrice>{menu.price}원</MenuListPrice>
        </MenuListItem>
      )}
    </MenuListWrapper>
  )
}

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Menu = () => {
  const [menuTabIndex, setMenuTabIndex] = useState(0);
  const selectMenuTab = (index) => {
    setMenuTabIndex(index);
  };
  return (
    <>
      <MenuWrapper>
        <MenuTab index={menuTabIndex} onClick={selectMenuTab}></MenuTab>
        <MenuList index={menuTabIndex}></MenuList>
      </MenuWrapper>
      <SetModal />
    </>
  );
}

export default Menu;