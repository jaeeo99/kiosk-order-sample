import React, {useContext, useState, useEffect} from 'react';
import styled from 'styled-components';
import {MdSpanWhite, SmSpanBlack, SmSpanLightGray, SmSpanPrimary, SmSpanWhite} from '../StyledText';
import {IItem, MenuContext, PageContext} from '../../data/context';

interface IActivable {
  active?: boolean;
}

interface ISlideItems {
  position?: number;
  itemLength?: number;
}

const PaymentWrapper = styled.div`
  width: 100%;
  height: 5.21vh;
  display: flex;
`;

const CancelButton = styled.div<IActivable>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${props => props.active ? '#000000' : '#bdbdbd'};
`;

const PaymentButton = styled.div<IActivable>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${props => props.active ? '#de0000' : '#828282'};
`;

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const CartInfo = styled.div`
  display: flex;
  flex-basis: 100px;
  background-color: #e0e0e0;
`;

const ItemSize = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ItemBadge = styled.span<IActivable>`
  margin: 0 0 0 10px;
  padding: 4px 31px;
  border-radius: 30px;
  background-color: ${props => props.active ? '#de0000' : '#828282'};
`;

const ItemsPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Price = styled.span<IActivable>`
  margin-left: 20px;
  font-family: S-CoreDream-7;
  font-size: 30px;
  font-weight: 700;
  color: ${props => props.active ? '#de0000' : '#828282'};
`;

const CartItemList = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 220px;
  background-color: #e0e0e0;
`;

const CartItemsController = styled.div<IActivable>`
  width: 6vw;
  height: 6vw;
  background-color: ${(props) => props.active ? '#000000' : '#bdbdbd'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 900;
  color: #ffffff;
`;

const CartItems = styled.div`
  flex: 1;
  overflow: hidden;
`;

const CartItemsWrapper = styled.div<ISlideItems>`
  width: ${props => props.itemLength ? props.itemLength * 370 + 'px' : '0'};
  transform: translateX(${props => props.position ? `-${props.position * 370}px` : '0px'});
  transition: .2s transform;
`

const CartItemWrapper = styled.div`
  float: left;
  position: relative;
  margin-left: 1.85vw;
  padding: 1.85vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  width: 28.7vw;
  height: 7.3vh;
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`;

const CartItemClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 900;
`;

const CartItemsEmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ICartItem {
  item: IItem;
  idx: number;
}

const CartItem = (props: ICartItem) => {
  const {item, idx} = props;
  const {menuName, price} = item;

  const menu = useContext(MenuContext);
  const {items, setItems} = menu;
  const onClickDelete = () => {
    const temp = [].concat(items);
    temp.splice(idx,1)
    setItems(temp);
  }
  return (
    <CartItemWrapper>
      <CartItemClose onClick={onClickDelete}>X</CartItemClose>
      <SmSpanBlack>{menuName}</SmSpanBlack>
      <SmSpanPrimary>{price}원</SmSpanPrimary>
    </CartItemWrapper>
  );
}

const Cart = () => {
  const menu = useContext(MenuContext);
  const {items, setItems} = menu;
  const {setPage} = useContext(PageContext);
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState(0);
  const [arrowActivate, setArrowActivate] = useState({left: false, right: false});
  const onClickLeftArrow = () => {
    if(arrowActivate.left) {
      setPosition(position - 1);
    }
  };
  const onClickRightArrow = () => {
    if(arrowActivate.right) {
      setPosition(position + 1);
    }
  }
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

  useEffect(() => {
    const leftActivate = position !== 0;
    const rightActivate = items.length > position + 2;
    setArrowActivate({
      left: leftActivate,
      right: rightActivate
    });
    if (position > items.length - 2) {
      setPosition(items.length - 2);
    }
  }, [position, items]);
  
  return (
    <CartWrapper>
      <CartInfo>
        <ItemSize>
          <SmSpanBlack>카트</SmSpanBlack>
          <ItemBadge active={items.length !== 0}>
            <SmSpanWhite>{items.length}</SmSpanWhite>
          </ItemBadge>
        </ItemSize>
        <ItemsPrice>
          <SmSpanBlack>총 주문 금액</SmSpanBlack>
          <Price active={items.length !== 0}>{items.reduce((total, item) => total + parseInt(item.price, 10), 0)}원</Price>
        </ItemsPrice>
      </CartInfo>
      <CartItemList>
        <CartItemsController active={arrowActivate.left} onClick={onClickLeftArrow}>{'<'}</CartItemsController>
        <CartItems>
          {items.length === 0 ?
            <CartItemsEmptyWrapper>
              <SmSpanLightGray>카드에 담긴 상품이 없습니다</SmSpanLightGray>
            </CartItemsEmptyWrapper>
            :
            <CartItemsWrapper position={position} itemLength={items.length}>
              {items.map((item, idx) => <CartItem key={idx} idx={idx} item={item}/>)}
            </CartItemsWrapper>
          }
        </CartItems>
        <CartItemsController active={arrowActivate.right} onClick={onClickRightArrow}>{'>'}</CartItemsController>
      </CartItemList>
      <PaymentWrapper>
        <CancelButton active={active} onClick={clearItems}>
          <MdSpanWhite>취소</MdSpanWhite>
        </CancelButton>
        <PaymentButton active={active} onClick={setPaymentOrder}>
          <MdSpanWhite>결제하기</MdSpanWhite>
        </PaymentButton>
      </PaymentWrapper>
    </CartWrapper>
  );
}

export default Cart;