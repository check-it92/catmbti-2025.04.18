import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

// 카카오는 윈도우 객체안에 SDK를 찾아오는 것이기 때문에 함수로 불러와야 한다.
const { kakao } = window;

const KakaoShareButton = () => {
  const url = "https://mbti-cats.netlify.app/"; // 공유하려는 페이지의 값
  const resultURL = window.location.href; // 공유된사람의 마지막 페이지값

  console.log("TEST : ", url, resultURL);

  useEffect =
    (() => {
      kakao.cleanup(); // 기존(앞단의 캐쉬값)입력 값이 있다면 정리해주는 함수
      kakao.init("440a5a33bff6aef998285947dcbb1d5d"); // 초기값 입력함수
    },
    []); // 사용자가 처음 페이지 마운트를 하였을때의 목록을 가져와라

  // 카카오 API를 활용하기 위한 변수 설정
  const sharekakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "오늘의 디저트",
        description: "아메리카노, 빵, 케익",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
      itemContent: {
        profileText: "Kakao",
        profileImageUrl:
          "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        titleImageUrl:
          "https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        titleImageText: "Cheese cake",
        titleImageCategory: "Cake",
        items: [
          {
            item: "Cake1",
            itemOp: "1000원",
          },
          {
            item: "Cake2",
            itemOp: "2000원",
          },
          {
            item: "Cake3",
            itemOp: "3000원",
          },
          {
            item: "Cake4",
            itemOp: "4000원",
          },
          {
            item: "Cake5",
            itemOp: "5000원",
          },
        ],
        sum: "총 결제금액",
        sumOp: "15000원",
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
        {
          title: "앱으로 이동",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
      ],
    });
  };

  return (
    <>
      <Button variant="warning" onClick={sharekakao}>
        카카오톡 공유하기
      </Button>
    </>
  );
};

export default KakaoShareButton;
