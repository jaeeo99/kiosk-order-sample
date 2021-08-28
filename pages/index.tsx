import {useState, useContext} from 'react';
import {MenuContext, PageContext} from '../data/context';
import Advertise from '../components/Advertise';
import Menu from '../components/Menu';
import Order from '../components/Order';
import Cart from '../components/Cart';
import Payment from '../components/Payment';
import NavFooter from '../components/NavFooter';
import styled from 'styled-components';

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

const Main = styled.main`
  position: relative;
  flex: 1;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-basis: 400px;
  background-color: black;
`;

const TouchIntroduction = styled.span`
  margin: 10px;
  font-family: S-CoreDream-7;
  font-size: 60px;
  font-weight: 700;
  color: #ffffff;
`;

const TouchSubIntroduction = styled.span`
  margin: 8px;
  font-family: S-CoreDream-7;
  font-size: 40px;
  font-weight: 700;
  color: #ffffff;
`;


const HomePage = () => {
  const {setPage} = useContext(PageContext);
  const handleClick = (e: any) => {
    e.preventDefault();
    setPage("order");
  }
  return (
    <Page>
      <PageInnerWrapper onClick={handleClick}>
        <Main>
          <MainImage src="/index/bg_index.jpg" />
        </Main>
        <Footer>
          <TouchIntroduction>화면을 터치하세요</TouchIntroduction>
          <TouchSubIntroduction>Start Order</TouchSubIntroduction>
        </Footer>
      </PageInnerWrapper>
    </Page>
  );
}

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

const OrderArea = styled.div`
  flex: 15.5 15.5 1550px;
`;

const PaymentPage = () => {
  return (
    <>
      <ADArea>
        <Advertise />
      </ADArea>
      <OrderArea>
        <Order />
      </OrderArea>
      <NavArea>
        <NavFooter />
      </NavArea>
    </>
  );
}

const Index = () => {
  const [pageState, setPageState] = useState('home');
  const [selectedMenu, setSelectedMenu] = useState([]);
  const menuContext = {
    items: selectedMenu,
    setItems: setSelectedMenu
  };

  const pageContext = {
    page: pageState,
    setPage: setPageState
  }

  const renderPage = (state) => {
    switch(state) {
      case 'home':
      default:
        return <HomePage />;
      case 'order':
        return <OrderPage />;
      case 'payment':
        return <PaymentPage />;
    }
  }
  return (<Page>
    <PageContext.Provider value={pageContext}>
      <MenuContext.Provider value={menuContext}>
        <PageInnerWrapper>
          {renderPage(pageState)}
        </PageInnerWrapper>
      </MenuContext.Provider>
    </PageContext.Provider>
  </Page>);
}


export default Index;