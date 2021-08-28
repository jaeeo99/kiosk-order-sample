import React, {useContext, useState, useEffect} from 'react';
import {MenuContext} from '../../data/context';
import styled from 'styled-components';

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
  font-family: S-CoreDream-7;
  font-size: 30px;
  font-weight: 700;
  color: #000000;
`;

const ItemBadge = styled.span`
  margin: 0 0 0 10px;
  padding: 4px 31px;
  border-radius: 30px;
  background-color: ${props => props.active ? '#de0000' : '#828282'};
  font-family: S-CoreDream-7;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
`;

const ItemsPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-family: S-CoreDream-7;
  font-size: 30px;
  font-weight: 700;
  color: #000000;
`;

const Price = styled.span`
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

const CartItemsController = styled.div`
  flex-basis: 65px;
  width: 65px;
  height: 65px;
  background-color: ${(props) => props.active ? '#000000' : '#bdbdbd'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: S-CoreDream-7;
  font-size: 40px;
  font-weight: 900;
  color: #ffffff;
`;

const CartItems = styled.div`
  flex: 1;
  overflow: hidden;
`;

const CartItemsWrapper = styled.div`
  width: ${props => props.itemLength ? props.itemLength * 370 + 'px' : '0'};
  transform: translateX(${props => props.position ? `-${props.position * 370}px` : '0px'});
  transition: .2s transform;
`

const CartItemWrapper = styled.div`
  float: left;
  position: relative;
  margin-left: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  width: 310px;
  height: 140px;
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
  font-family: S-CoreDream-7;
  font-size: 30px;
  font-weight: 900;
`;

const CartItemName = styled.span`
  font-family: S-CoreDream-7;
  font-size: 30px;
  font-weight: 700;
  color: #000000;
`;

const CartItemPrice = styled.span`
  font-family: S-CoreDream-7;
  font-size: 30px;
  font-weight: 700;
  color: #de0000;
`;

const CartItemsEmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CartItemsEmpty = styled.span`
  font-family: S-CoreDream-6;
  font-size: 30px;
  font-weight: 600;
  color: #bdbdbd;
`

const CartItem = (props) => {
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
      <CartItemName>{menuName}</CartItemName>
      <CartItemPrice>{price}원</CartItemPrice>
    </CartItemWrapper>
  );
}

const Cart = () => {
  const menu = useContext(MenuContext);
  const {items} = menu;
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
        <ItemSize>카트<ItemBadge active={items.length !== 0}>{items.length}</ItemBadge></ItemSize>
        <ItemsPrice>총 주문 금액 <Price active={items.length !== 0}>{items.reduce((total, item) => total + parseInt(item.price, 10), 0)}원</Price></ItemsPrice>
      </CartInfo>
      <CartItemList>
        <CartItemsController active={arrowActivate.left} onClick={onClickLeftArrow}>{'<'}</CartItemsController>
        <CartItems>
          {items.length === 0 ?
            <CartItemsEmptyWrapper>
              <CartItemsEmpty>
                카드에 담긴 상품이 없습니다
              </CartItemsEmpty>
            </CartItemsEmptyWrapper>
            :
            <CartItemsWrapper position={position} itemLength={items.length}>
              {items.map((item, idx) => <CartItem key={idx} idx={idx} item={item}/>)}
            </CartItemsWrapper>
          }
        </CartItems>
        <CartItemsController active={arrowActivate.right} onClick={onClickRightArrow}>{'>'}</CartItemsController>
      </CartItemList>
    </CartWrapper>
  );
}

export default Cart;