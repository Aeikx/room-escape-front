import React from "react";
import "../start1/Start1.css";

function Start7() {
  return (
    <div className="start-container">
      <h1>컴퓨터실</h1>
      <img src="/env_img/env7.jpeg" alt="방 이미지" />
      <div className="narrative-text">
        <h4>
          &nbsp;불이 꺼진 넓은 컴퓨터실에 발을 들였다. 언제나처럼 상자를 먼저
          찾으려 했지만, 어두운 실내에서 유일하게 빛을 내는 컴퓨터 모니터가 먼저
          시야에 들어왔다.
        </h4>
        <h4>
          &nbsp;그 자리로 다가가니, 컴퓨터는 켜진 상태였고 배경화면만 조용히 떠
          있었다.
        </h4>
        <h4>
          &nbsp;혹시 이걸로 누군가에게 연락할 수 있지 않을까 싶었지만 곧바로
          인터넷 연결이 끊겨 있다는 걸 확인했다.
        </h4>
        <h4>
          &nbsp;배경화면엔 ‘README’라는 이름의 텍스트 파일이 두 개 있었다. 내가
          지금까지 움직여온 흐름처럼, 이 파일들 역시 누군가가 미리 놓아둔 다음
          과정이라는 생각이 들었다.
        </h4>
        <h4>
          &nbsp;첫 번째 파일은 알 수 없는 기호들로 가득 차 있었다. 둘째 파일은
          암호화되어 있었고, 내용을 열람하려면 코드를 입력해야 했다.
        </h4>
      </div>
      <h2 className="question">문제</h2>
      <img src="/q_img/q7.png" alt="문제 이미지" />
      <p className="answer-type">[Answer Type: 숫자]</p>
      <div className="answer-section">
        <input type="text" placeholder="답 입력" id="ans" />
        <button
          className="submit-button"
          onClick={() => {
            const ans = document.getElementById("ans").value;
            fetch(
              "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/q_log",
              {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ answer: ans }),
              }
            ).catch((e) => console.warn("Logging Error:", e));
            if (ans === "101") {
              fetch(
                "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/q_ans",
                {
                  method: "post",
                  credentials: "include",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ stage7: "clear" }),
                }
              )
                .then((res) => {
                  if (!res.ok) throw new Error("서버 응답 에러");
                  return res.json();
                })
                .then((data) => {
                  if (data.success) {
                    location.href = "/start7-end";
                  } else {
                    alert(data.message || "문제 풀이 실패");
                  }
                })
                .catch((err) => {
                  console.error("Fetch Error:", err);
                  alert("서버 요청 실패");
                });
            } else {
              alert("틀렸습니다!");
            }
          }}
        >
          제출
        </button>
      </div>
    </div>
  );
}

export default Start7;
