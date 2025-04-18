import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

// 카카오는 윈도우 객체안에 SDK를 찾아오는 것이기 때문에 함수로 불러와야 한다.
const { Kakao } = window;

const KakaoShareButton = () => {
  const url = "https://mbti-cats.netlify.app/"; // 공유하려는 페이지의 값
  const resultURL = window.location.href; // 공유된사람의 마지막 페이지값

  useEffect(() => {
    Kakao.cleanup(); // 기존(앞단의 캐쉬값)입력 값이 있다면 정리해주는 함수
    Kakao.init("440a5a33bff6aef998285947dcbb1d5d"); // 초기값 입력함수
    Kakao.isInitialized();
  }, []); // 사용자가 처음 페이지 마운트를 하였을때의 목록을 가져와라

  // 카카오 API를 활용하기 위한 변수 설정
  const sharekakao = ({ data }) => {
    console.log(data);

    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비집사 판별기 결과",
        description: `예비집사님이 고양이를 키운다면 잘 맞는 고양이는 ${data.name}입니다.`,
        imageUrl: `${url}${data.image}`,
        link: {
          mobileWebUrl: resultURL,
          webUrl: resultURL,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };

  return (
    <>
      <Button variant="warning" onClick={sharekakao}>
        결과 공유하기
      </Button>
    </>
  );
};

export default KakaoShareButton;
