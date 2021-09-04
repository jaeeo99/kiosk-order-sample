import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {menuTabItems, menuList} from '../../../data/menu';
import {MenuContext} from '../../../data/context';

const MenuTabWrapper = styled.div`
  display: grid;
  height: 10.42vh;
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
  overflow: hidden;
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
  height: 48.44vh;
  display: grid;
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
  overflow: hidden;
`;

const MenuListImage = styled.img`
  margin: 10px;
  width: ${props => props.size === 6 ? '23.15vw' : '18.5vw'}
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
  const {items, setItems} = useContext(MenuContext);
  const onMenuClick = (menu) => {
    setItems(items.concat(menu));
  };
  useEffect(() => {
    setMenus(menuList.filter((menu) => menu.type == menuTabItems[index].type));
    setMenuLength(menuTabItems[index].itemLength);
  }, [index]);
  return (
    <MenuListWrapper length={menuLength}>
      {menus.map((menu, idx) => 
        <MenuListItem key={idx} onClick={() => onMenuClick(Object.assign(menu, {img: `/menu/${menu.type}_${idx}.png`}))}>
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
    </>
  );
}

export default Menu;