import {useState} from 'react';
import {MenuContext, PageContext} from '../data/context';
import {Page, PageInnerWrapper} from '../components/Page';
import HomePage from '../components/Home';
import OrderPage from '../components/Order';
import PaymentPage from '../components/Payment';

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