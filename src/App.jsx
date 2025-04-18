import GlobalStyles from "./styles/GlobalStyles.Styles";
import "bootstrap/dist/css/bootstrap.min.css"; // 리액트 부트스트랩 필수요소
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // 전역요소에 영향을 미치는
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
