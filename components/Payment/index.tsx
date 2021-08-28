import styled from 'styled-components';
import Advertise from '../Advertise';
import Order from './Order';
import NavFooter from '../NavFooter';

const ADArea = styled.div`
  flex: 2.5 2.5 250px;
`;

const NavArea = styled.div`
  flex: 1.2 1.2 120px;
`;

const OrderArea = styled.div`
  flex: 15.5 15.5 1550px;
`

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
};

export default PaymentPage;