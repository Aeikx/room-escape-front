import React from "react";
import "../start1/Start1.css";

function Start9() {
  return (
    <div className="start-container">
      <h1>AI 융합실</h1>
      <img
        src="/env_img/env9.jpeg
      "
        alt="방 이미지"
      />
      <div className="narrative-text">
        <h4>
          &nbsp;AI융합실에도 상자가 있었다. 당연한 건 아닐 텐데도, 그 존재가
          나에게 이상할 만큼 안도감을 준다.
        </h4>
        <h4>
          &nbsp;답을 맞혔는지조차 알 수 없는 문제들이 있었으니까. 적어도 상자가
          있다는 건, 지금 여기에 있어야 할 자리에 내가 도달했다는 표시처럼
          느껴졌다.
        </h4>
        <h4>
          &nbsp;상자는 선생님 책상 위에 놓여 있었다. 하지만 이번엔, 종이에
          문제가 적혀 있지는 않았다.
        </h4>
        <h4>
          &nbsp;대신 옆에 있는 모니터에 여러 개의 시간이 길게 나열되어 있었다.
          이게 문제일까. 숫자들이 지나치게 구체적이라는 점이 오히려 더 낯설게
          보인다.
        </h4>
      </div>
      <h2 className="question">문제</h2>
      <img src="/q_img/q9.png" alt="문제 이미지" />
      <p className="answer-type">[Answer Type: 문자]</p>
      <div className="answer-section">
        <input type="text" placeholder="답 입력" id="ans" />
        <button
          className="submit-button"
          onClick={() => {
            if (document.getElementById("ans").value === "gpt") {
              fetch(
                "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/q_ans",
                {
                  method: "post",
                  credentials: "include",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ stage9: "clear" }),
                }
              )
                .then((res) => {
                  if (!res.ok) throw new Error("서버 응답 에러");
                  return res.json();
                })
                .then((data) => {
                  if (data.success) {
                    location.href = "/start9-end";
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

export default Start9;
