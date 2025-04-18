import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { resultdata } from "../assets/resultdata";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--light-color);
  background: url(https://i.pinimg.com/originals/0e/15/e1/0e15e1707bdc679fbcaa36c9ec3810d9.gif)
    right bottom no-repeat;
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
    border-radius: 50%;
  }
`;

const Desc = styled.div`
  font-size: 2rem;
  background: var(--accent-color);
  color: var(--light-color);
  padding: 8px 14px;
  border-radius: 8px;
`;

const Result = () => {
  const [resultData, setResultData] = useState("");
  const navigate = useNavigate();
  const handleClickButton = (e) => {
    navigate("/");
  };

  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti");
  // console.log(searchParams.get("mbti")); => 쿼리스트링의 value값 찾아온것

  // 여러번 사용하면서 새로 랜더링 되었을때, 해당 지연없이 동일시되는 고양이값을 찾아오기 위해서 사용
  useEffect(() => {
    const result = resultdata.find((item) => item.best === mbti);
    setResultData(result);
  }, [mbti]);

  return (
    <>
      <Wrapper>
        <Header>예비집사 Choice</Header>
        <Contents>
          <Title>결과 보기🤓</Title>
          <LogoImg>
            <img src={resultData.image} alt="cat-main" />
          </LogoImg>
          <Desc>
            예비집사님과 찰떡궁합인 고양이는
            <br />
            {resultData.best}형 {resultData.name} 입니다.
          </Desc>
          <Desc>해당고양이는{resultData.desc}</Desc>
          <Button variant="warning" onClick={handleClickButton}>
            다시 시작하기
          </Button>
        </Contents>
      </Wrapper>
    </>
  );
};

export default Result;
