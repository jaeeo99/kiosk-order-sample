import {useContext} from 'react';
import styled from 'styled-components';
import {Page, PageInnerWrapper} from '../Page';
import {PageContext} from '../../data/context';

const Main = styled.main`
  position: relative;
  height: 79.17vh;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Footer = styled.footer`
  height: 20.83vh;
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

export default HomePage;