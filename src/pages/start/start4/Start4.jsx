import React from "react";
import "../start1/Start1.css";

function Start4() {
  return (
    <div className="start-container">
      <h1>영어전용실 A</h1>
      <img src="/env_img/env4.jpeg" alt="방 이미지" />
      <div className="narrative-text">
        <h4>
          &nbsp;3층에 남은 교실 중 열려 있던 곳은 영어전용실 A, 단 한
          곳뿐이었다. 문을 열자마자 시선이 닿은 곳, 그 자리에 상자가 놓여
          있었다.
        </h4>
        <h4>
          &nbsp;지금까지와 마찬가지로, 한눈에 띄는 위치였다. 의도적으로 보여지길
          바란 것처럼.
        </h4>
        <h4>
          &nbsp;이번 상자는 다소 단출했다. 그림도, 긴 지문도 없었다. 작은 종이
          한 장. 그 위엔 짧은 두 개의 영어 문장이 적혀 있었고, 상자에는 영문
          자물쇠가 걸려 있었다.
        </h4>
      </div>
      <h2 className="question">문제</h2>
      <h4 className="q4">
        Peach is divided into 12 parts. <br />
        Write in English that the symbol is hyperbolic.
      </h4>
      <p className="answer-type">[Answer Type: 영어]</p>
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
            if (ans === "fish") {
              fetch(
                "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/q_ans",
                {
                  method: "post",
                  credentials: "include",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ stage4: "clear" }),
                }
              )
                .then((res) => {
                  if (!res.ok) throw new Error("서버 응답 에러");
                  return res.json();
                })
                .then((data) => {
                  if (data.success) {
                    location.href = "/start4-end";
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

export default Start4;
