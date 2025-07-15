import React from "react";
import "../start1/Start1.css";

function Start6() {
  return (
    <div className="start-container">
      <h1>기술공학실</h1>
      <img src="/env_img/env6.jpeg" alt="방 이미지" />
      <div className="narrative-text">
        <h4>
          &nbsp;이번에도 문마다 비밀번호를 입력하며 신관을 돌아다녀야 하나 싶어
          막막했지만, 다행히 멀리 갈 필요는 없었다. 상자 바닥에 적힌 네 자리
          숫자는 곧장 한 교실의 도어락을 풀어주었고, 문이 열린 곳은
          기술공학실이었다.
        </h4>
        <h4>
          &nbsp;교실 안엔 익숙한 상자가 놓여 있었다. 이젠 익숙해졌다고
          생각했지만, 상자 근처에 놓인 물건은 조금 달랐다.
        </h4>
        <h4>
          &nbsp;문제가 적힌 종이 한 장과 함께 작은 정사각형 나무 블럭들이 바닥에
          가지런히 놓여 있었다.
        </h4>
      </div>
      <h2 className="question">문제</h2>
      <h4>3x3x3 블럭으로 이루어진 도형에 사용된 블럭의 수는?</h4>
      <img src="/q_img/q6.png" alt="문제 이미지" />
      <p className="answer-type">[Answer Type: 숫자]</p>
      <div className="answer-section">
        <input type="text" placeholder="답 입력" id="ans" />
        <button
          className="submit-button"
          onClick={() => {
            if (document.getElementById("ans").value === "11") {
              fetch(
                "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/q_ans",
                {
                  method: "post",
                  credentials: "include",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ stage6: "clear" }),
                }
              )
                .then((res) => {
                  if (!res.ok) throw new Error("서버 응답 에러");
                  return res.json();
                })
                .then((data) => {
                  if (data.success) {
                    location.href = "/start6-end";
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

export default Start6;
