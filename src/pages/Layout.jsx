// 페이지의 전체 틀 형성 (이페이즈를 중심으로 자식페이지들을 찾아온다.)
// 페이지 라우팅을 위한 환경설정

import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
