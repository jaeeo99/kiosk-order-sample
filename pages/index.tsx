import React from 'react';
import { useRouter } from 'next/router';
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


const Home = () => {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push('/order');
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

export default Home;