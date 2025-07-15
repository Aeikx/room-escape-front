// App.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "./App2.css";

function App() {
  const creators = ["김민규", "이경민", "전민재", "조현우", "최세인"];

  return (
    <div className="app" lang="ko-KR">
      <main className="main-content">
        <h4>
          &nbsp;미궁 게임은 언어 유희, 논리적 사고, 수학적 추론, 그리고 추상적인
          해석을 통해 단서를 찾아내고 다음 장소로 이동하는 방식의 게임입니다.
          문제를 해결하는 데에는 다소 긴 시간이 걸릴 수 있으며, 웹 검색이나 AI를
          활용해야 하는 문제도 존재합니다. 이러한 방식은 금지 대상이 아니며,
          오히려 이 방식을 의도한 문제가 있기도 합니다.
        </h4>
        <h4>
          &nbsp;이 게임에는 하나의 서사가 존재합니다. 스토리가 직접적으로 문제
          해결에 영향을 주는 경우는 드물지만, 일부 문제는 이야기 속 단서에서
          실마리를 얻거나, 스토리 자체가 문제의 핵심이 되기도 하므로 주의 깊게
          읽어주세요.
        </h4>
        <h4>
          &nbsp;문제는 어렵습니다. 제시된 퍼즐에 대해 다른 논리적 접근이
          가능하더라도, 저희가 의도한 해답이 아니라면 정답으로 인정되지
          않습니다. 그러나 바로 그 과정이 미궁의 본질이며, 가장 큰 묘미입니다.
        </h4>
        <h4>
          &nbsp;다른 플레이어와 힌트를 나누는 것은 괜찮지만, 정답이나 정답에
          직결되는 핵심적인 힌트의 공유는 삼가주세요. 미궁은 오직 스스로의
          힘으로 헤매며 풀어갈 때, 비로소 완성되는 게임입니다.
        </h4>

        {/* 버튼 그룹 */}
        <div className="button-group">
          <button
            className="main-button start-button"
            onClick={() => {
              fetch(
                "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/check-login",
                {
                  credentials: "include", // ✅ HttpOnly 쿠키를 자동 포함시킴
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  if (!data.loggedIn) {
                    alert("로그인이 필요합니다.");
                    location = "/login";
                  } else {
                    location = "/start";
                  }
                });
            }}
          >
            시작하기
          </button>
          <button
            className="main-button hall-button"
            onClick={() => (window.location.href = "/hall-of-fame")}
          >
            명예의 전당
          </button>
        </div>

        <p className="contact-email">
          문의사항{" "}
          <a href="mailto:cjhigh2scape@gmail.com">cjhigh2scape@gmail.com</a>
        </p>

        {/* 제작자 명단 */}
        <div className="creator-container">
          <h4>제작자</h4>
          <ul className="creator-list">
            {creators.map((name) => (
              <li key={name} className="creator-item">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
