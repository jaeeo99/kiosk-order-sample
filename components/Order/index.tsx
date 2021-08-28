import styled from 'styled-components';
import Advertise from '../Advertise';
import Cart from './Cart';
import Payment from './Payment';
import NavFooter from '../NavFooter';
import Menu from './Menu';

const ADArea = styled.div`
  flex: 2.5 2.5 250px;
`;

const MenuArea = styled.div`
  flex: 11.3 11.3 1130px;
`;

const CartArea = styled.div`
  flex: 3.2 3.2 320px;
`;

const PaymentArea = styled.div`
  flex: 1 1 100px;
`;

const NavArea = styled.div`
  flex: 1.2 1.2 120px;
`;

const OrderPage = () => {
  return (
    <>
      <ADArea>
        <Advertise />
      </ADArea>
      <MenuArea>
        <Menu />
      </MenuArea>
      <CartArea>
        <Cart />
      </CartArea>
      <PaymentArea>
        <Payment />
      </PaymentArea>
      <NavArea>
        <NavFooter />
      </NavArea>
    </>
  );
}

export default OrderPage;