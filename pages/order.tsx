import {useState, useContext} from 'react';
import styled from 'styled-components';
import {MenuContext} from '../data/context';
import Advertise from '../components/Advertise';
import Menu from '../components/Menu';
import Cart from '../components/Cart';
import Payment from '../components/Payment';
import NavFooter from '../components/NavFooter';

const Page = styled.div`
  position: relative;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
`;

const PageInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

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


const Order = () => {
  const [selectedMenu, setSelectedMenu] = useState([]);
  const menuContext = {
    items: selectedMenu,
    setItems: setSelectedMenu
  };
  return (
    <Page>
      <MenuContext.Provider value={menuContext}>
        <PageInnerWrapper>
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
        </PageInnerWrapper>
      </MenuContext.Provider>
    </Page>
  );
}

export default Order;