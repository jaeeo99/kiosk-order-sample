import {useContext} from 'react';
import styled from 'styled-components';
import {MenuContext, PageContext, StepContext, IItem} from '../../../data/context';
import { MdSpanBlack, MdSpanPrimary, MdSpanWhite, SmSpanBlack, SmSpanLightBlack, SmSpanBoldGray, SmSpanPrimary } from '../../StyledText';

const OrderedItemWrapper = styled.div`
  height: 21.87vh;
  background-color: #fff;
`;

const OrderedItemTitle = styled.div`
  position: relative;
  padding: 0 65px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 11.46vh;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  & > span {
    margin: 14px 0;
  }
  & > img {
    position: absolute;
    right: 85px;
    height: 80%;
  }
`;

const OrderedItemSize = styled.div`
  padding: 0 65px;
  height: 5.21vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OrderedItemPrice = styled.div`
  padding: 0 65px;
  height: 5.21vh;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OrderedItemImg = styled.img`
`;

interface IOrderedItem {
  item: IItem;
}

const OrderedItem = (props: IOrderedItem) => {
  const {item} = props;
  const {menuName, price, img, setImg, setType} = item;
  const getPrice = () => {
    switch(setType) {
      case 'largeSet':
        return parseInt(price || '', 10) + 2700;
      case 'set':
        return parseInt(price || '', 10) + 2000;
      case 'normal':
      default:
        return parseInt(price || '', 10);
    }
  }
  const menuPrice = getPrice();
  return <OrderedItemWrapper>
    <OrderedItemTitle>
      <MdSpanBlack>{menuName} {setType === 'largeSet' && '라지세트'}{setType === 'set' && '세트'}</MdSpanBlack>
      <MdSpanPrimary>{menuPrice}원</MdSpanPrimary>
      <OrderedItemImg src={setType === 'set' || setType === 'largeSet' ? setImg : img}/>
    </OrderedItemTitle>
    <OrderedItemSize>
      <SmSpanBoldGray>수량</SmSpanBoldGray>
      <SmSpanBoldGray>1</SmSpanBoldGray>
    </OrderedItemSize>
    <OrderedItemPrice>
      <SmSpanBlack>합계금액</SmSpanBlack>
      <SmSpanPrimary>{menuPrice}원</SmSpanPrimary>
    </OrderedItemPrice>
  </OrderedItemWrapper>;
}

const OrderedMenuArea = styled.div`
  height: calc(58.85vh - 60px);
  overflow: scroll;
  padding: 30px 65px;
  background-color: #f2f2f2;
`;

const PriceArea = styled.div`
  height: 11.46vh;
  padding: 0 65px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const OrderPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const DiscountPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const TotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const ButtonArea = styled.div`
  height: 5.21vh;
  display: flex;
`;

const CancelButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

const OrderButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #de0000;
`;


const Confirm = () => {
  const {items} = useContext(MenuContext);
  const {setPage} = useContext(PageContext);
  const {setStep} = useContext(StepContext);
  const price = items.reduce((total, item) => {
    switch(item?.setType) {
      case "largeSet":
        return total + parseInt(item?.price || '', 10) + 2700;
      case "set":
        return total + parseInt(item?.price || '', 10) + 2000;
      case "normal":
      default:
        return total + parseInt(item?.price || '', 10);
    }
  }, 0);
  return <>
    <OrderedMenuArea>
      {items.map((item, idx) => <OrderedItem key={idx} item={item} />)}
    </OrderedMenuArea>
    <PriceArea>
      <OrderPrice>
        <SmSpanBlack>주문 금액</SmSpanBlack><SmSpanBlack>{price}원</SmSpanBlack>
      </OrderPrice>
      <DiscountPrice>
        <SmSpanLightBlack>할인 금액</SmSpanLightBlack><SmSpanLightBlack>0원</SmSpanLightBlack>
      </DiscountPrice>
      <TotalPrice>
        <MdSpanBlack>총 결제금액</MdSpanBlack><MdSpanPrimary>{price}원</MdSpanPrimary>
      </TotalPrice>
    </PriceArea>
    <ButtonArea>
      <CancelButton onClick={() => setPage('order')}>
        <MdSpanWhite>취소</MdSpanWhite>
      </CancelButton>
      <OrderButton onClick={() => setStep(1)}>
        <MdSpanWhite>결제하기</MdSpanWhite>
      </OrderButton>
    </ButtonArea>
  </>;
}

export default Confirm;