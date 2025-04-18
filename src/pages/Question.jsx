import React, { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { questionData } from "../assets/questiondata";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(https://i.pinimg.com/originals/47/af/82/47af824852bb6fb9f31e13d3e76a86be.gif)
    center/cover no-repeat;

  @media screen and (max-width: 780px) {
    width: 100%;
    height: 80vh;
    background-position: bottom;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 3rem;
  background: var(--accent-color);
  color: var(--light-color);
  padding: 8px 14px;
  border-radius: 8px;
  margin-bottom: 20px;

  @media screen and (max-width: 780px) {
    font-size: 2.4rem;
    padding: 6px 12px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  & > button[type="button"] {
    width: 300px;
    height: 100px;
    font-size: 1.8rem;
    border-radius: 8px;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    padding: 10px;

    & > button[type="button"] {
      width: 100%;
      height: 100%;
      font-size: 2.3rem;
    }
  }
`;

const Question = () => {
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]); // 여기서 누적되어진 값으로 계산이 된다.
  const navigate = useNavigate();

  // 구버전 : 각각의 버튼 별로 계산을 한것
  /*
  const handleClickButtonA = (no, type) => {
    if (type === "EI") {
      // 위에서 설정해놓은 0번째 "EI"를 가져와서 no = 점수(1,0)를 더해달라는 뜻
      const addScore = totalScore[0].score + no;
      console.log(addScore);
      const newObject = { id: "EI", score: addScore };
      totalScore.splice(0, 1, newObject); // 그 다음번째 질문으로 넘어가기 위한 설정
    } else if (type === "SN") {
      const addScore = totalScore[1].score + no;
      const newObject = { id: "SN", score: addScore };
      totalScore.splice(1, 1, newObject); // 그 다음번째 질문으로 넘어가기 위한 설정
    } else if (type === "TF") {
      const addScore = totalScore[2].score + no;
      const newObject = { id: "TF", score: addScore };
      totalScore.splice(2, 1, newObject); // 그 다음번째 질문으로 넘어가기 위한 설정
    } else if (type === "JP") {
      const addScore = totalScore[3].score + no; // 인덱스 3번째
      const newObject = { id: "JP", score: addScore };
      totalScore.splice(3, 1, newObject); // 인덱스 3번째에서 1개를 바꿔주세요. 그 다음번째 질문으로 넘어가기 위한 설정
    }
    setQuestionNo(questionNo + 1);
  };

  const handleClickButtonB = (no, type) => {
    if (type === "EI") {
      // 위에서 설정해놓은 0번째 "EI"를 가져와서 no = 점수(1,0)를 더해달라는 뜻
      const addScore = totalScore[0].score + no;
      const newObject = { id: "EI", score: addScore };
      totalScore.splice(0, 1, newObject); // 그 다음번째 질문으로 넘어가기 위한 설정
    } else if (type === "SN") {
      const addScore = totalScore[1].score + no;
      const newObject = { id: "SN", score: addScore };
      totalScore.splice(1, 1, newObject); // 그 다음번째 질문으로 넘어가기 위한 설정
    } else if (type === "TF") {
      const addScore = totalScore[2].score + no;
      const newObject = { id: "TF", score: addScore };
      totalScore.splice(2, 1, newObject); // 그 다음번째 질문으로 넘어가기 위한 설정
    } else if (type === "JP") {
      const addScore = totalScore[3].score + no; // 인덱스 3번째
      const newObject = { id: "JP", score: addScore };
      totalScore.splice(3, 1, newObject); // 인덱스 3번째에서 1개를 바꿔주세요. 그 다음번째 질문으로 넘어가기 위한 설정
    }
    setQuestionNo(questionNo + 1);
  };
  */

  // 삼항조건 연산자를 활용한 전체 활용

  // 새로운배열에 공통되는 버튼을 알수 있다.
  // 초기값의 배열 = s(객체 = 매개변수)
  // 해당 id와 일치하는 타입이 온다면 그 객체를 불러와서 점수를 더해주고 그게 아니라면 그냥 불러와라
  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );
    setTotalScore(newScore);
    if (questionData.length !== questionNo + 1) {
      // 예외처리조항 : 질문들의 길이(12개가 아닐시)
      setQuestionNo(questionNo + 1); // 1페이지씩 넘어가달라
    } else {
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({ mbti: mbti })}`,
      });
      // 1번째인자값: 이동하려는 페이지, 2번째 인자값: ?시작하는 쿼리스트링값(key: 변수) -> ``으로넣게 된다.
    }
  };

  // reduce = 누적계산기를 쓸때 >(누적값, 현재객체 값) => , 초기값(두번째 인자값)을 줘야한다.

  return (
    <Container>
      <ProgressBar
        striped
        variant="warning"
        now={(questionNo / questionData.length) * 100}
      />
      {/* // 백분율 계산법 분모/분자 *100 */}
      <Wrapper>
        <Title>{questionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            variant="warning"
            onClick={() => handleClickButton(1, questionData[questionNo].type)}
          >
            {questionData[questionNo].answera}
          </Button>
          <Button
            variant="warning"
            onClick={() => handleClickButton(0, questionData[questionNo].type)}
          >
            {questionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </Wrapper>
    </Container>
  );
};

export default Question;
