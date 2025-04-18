import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--light-color);
  background: url(https://i.pinimg.com/736x/46/4a/88/464a887afaaba9968d933ca794f8e2c6.jpg)
    center/cover no-repeat;
`;

const Header = styled.div`
  background: var(--title-color);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4rem;
  margin-bottom: 20px;
`;

const Contents = styled.div`
  color: var(--dark-color);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  & > button[type="button"] {
    font-size: 2rem;
  }
`;

const Title = styled.div`
  font-size: 3rem;
`;

const LogoImg = styled.div`
  & > img {
    width: 350px;
    height: 350px;
    border: 4px dashed var(--border-color);
    /* border-radius: 50%; 밑에 부트스트랩 문법으로 줌 */
  }
`;

const Desc = styled.div`
  font-size: 2rem;
  background: var(--accent-color);
  color: var(--light-color);
  padding: 8px 14px;
  border-radius: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  & > button[type="button"] {
    font-size: 2rem;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <Wrapper>
      <Header>예비집사 Selecte</Header>
      <Contents>
        <Title>나에게 맞는 주인님은? 🕵️</Title>
        <LogoImg>
          <img
            className="rounded-circle"
            src="/cat/ggompang.jpeg"
            alt="cat-main"
          />
        </LogoImg>
        <Desc>MBTI를 기반으로 하는 나랑 가장 잘 맞는 🐈‍⬛CAT 찾기</Desc>
        <ButtonGroup>
          <Button onClick={handleClickButton}>테스트 시작하기</Button>
          <KakaoShareButton />
        </ButtonGroup>
      </Contents>
    </Wrapper>
  );
};

export default Home;
