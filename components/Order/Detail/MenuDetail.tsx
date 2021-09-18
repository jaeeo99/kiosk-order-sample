import React, {useContext} from 'react';
import styled from 'styled-components';
import { MdSpanWhite, SmSpanBlack, SmSpanPrimary, XsSpanWhite } from '../../StyledText';
// import { menuTabItems, menuList } from '../../../data/menu';
import { MenuContext, IItem } from '../../../data/context';


const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 58.85vh;
`;

const MenuNav = styled.div`
  height: 5.21vh;
  padding: 0 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackBtn = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlankDiv = styled.div`
  width: 85px;
`;

const MenuIntro = styled.div`
  height: 5.21vh;
  padding: 0 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MenuSub = styled.div`
  height: 32.81vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubMenuImg = styled.img`
  width: 23.15vw;
  margin: 20px;
`;
// const SubMenuBtn = styled.div`
//   margin: 60px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 175px;
//   height: 50px;
//   border-radius: 5px;
//   background-color: #000;
// `;

interface ISubmenu {
  item: IItem | null;
}

const SubMenu = (props: ISubmenu) => {
  const {item} = props;
  return <SubMenuWrapper>
    <SubMenuImg src={item?.img}/>
    <SmSpanBlack>{item?.menuName}</SmSpanBlack>
  </SubMenuWrapper>;
}
const MenuPrice = styled.div`
  height: 5.21vh;
  padding: 0 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MenuButtonWrapper = styled.div`
  height: 10.42vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuButton = styled.div`
  width: 74.07vw;
  height: 5.21vh;
  border-radius: 5px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StepLabel = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 20px;
  }
`;

const StepLabelNo = styled.div`
  width: 50px;
  height: 50px;
  background-color: #000;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
`;

const MenuDetail = () => {
  const {item, setItem, items, setItems} = useContext(MenuContext);
  const onBackClicked = () => {
    setItem(null);
  }
  const addToCart = () => {
    if (item) {
      setItems(items.concat(item));
      setItem(null);
    }
  }
  return (
    <>
      <MenuWrapper>
        <MenuNav>
          <BackBtn>
            <SmSpanBlack onClick={onBackClicked}>{'<'} Back</SmSpanBlack>
          </BackBtn>
          <SmSpanBlack>선택한 메뉴를 확인해 주세요</SmSpanBlack>
          <BlankDiv />
        </MenuNav>
        <MenuIntro>
          <StepLabel>
            <StepLabelNo><XsSpanWhite>1</XsSpanWhite></StepLabelNo>
            <SmSpanBlack>선택한 메뉴</SmSpanBlack>
          </StepLabel>
          <SmSpanBlack>
            {item?.setType === 'largeSet' && `${item?.menuName} 라지 세트 ${parseInt(item?.price || '', 10) + 2700}원` }
            {item?.setType === 'set' && `${item?.menuName} 세트 ${parseInt(item?.price || '', 10) + 2000}원` }
            {item?.setType === 'normal' && `${item?.menuName} ${item?.price}원` }
          </SmSpanBlack>
        </MenuIntro>
        <MenuSub>
          <SubMenu item={item}></SubMenu>
          {item?.setType === 'largeSet' && <>
            <SubMenu item={{img: 'menu/sidemenu_8.png', menuName: '프렌치프라이 (L)'}}></SubMenu>
            <SubMenu item={{img: 'menu/drink_4.png', menuName: '코카콜라 (L)'}}></SubMenu>
          </>}
          {item?.setType === 'set' && <>
            <SubMenu item={{img: 'menu/sidemenu_8.png', menuName: '프렌치프라이 (R)'}}></SubMenu>
            <SubMenu item={{img: 'menu/drink_4.png', menuName: '코카콜라 (R)'}}></SubMenu>
          </>}
        </MenuSub>
        <MenuPrice>
          <StepLabel>
            <StepLabelNo><XsSpanWhite>2</XsSpanWhite></StepLabelNo>
            <SmSpanBlack>주문금액</SmSpanBlack>
            <SmSpanPrimary>
              {item?.setType === 'largeSet' && `${parseInt(item?.price || '', 10) + 2700}원` }
              {item?.setType === 'set' && `${parseInt(item?.price || '', 10) + 2000}원` }
              {item?.setType === 'normal' && `${item?.price}원` }
            </SmSpanPrimary>
          </StepLabel>
        </MenuPrice>
        <MenuButtonWrapper>
          <MenuButton onClick={addToCart}>
            <MdSpanWhite>카트담기</MdSpanWhite>
          </MenuButton>
        </MenuButtonWrapper>
      </MenuWrapper>
    </>
  );
}

export default MenuDetail;