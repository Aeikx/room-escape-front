import React from "react";
import "../start1/Start1.css";

function Start11() {
  return (
    <div className="start-container">
      <h1>미디어 창작실</h1>
      <img src="/env_img/env11.jpeg" alt="방 이미지" />
      <div className="narrative-text">
        <h4>&nbsp;열린 교실은 바로 옆에 있는 미디어창작실이었다.</h4>
        <h4>
          &nbsp;교실에 상자가 있다는 건, 내가 해야 할 일이 정해졌다는 뜻이다.
        </h4>
      </div>
      <h2 className="question">문제</h2>
      <h4>빨강 + 노랑 = 800080</h4>
      <h4>노랑 + 파랑 = 008000</h4>
      <h4>빨강 + 노랑 + 파랑 = ?</h4>
      <p className="answer-type">[Answer Type: 숫자]</p>
      <div className="answer-section">
        <input type="text" placeholder="답 입력" id="ans" />
        <button
          className="submit-button"
          onClick={() => {
            const ans = document.getElementById("ans").value;
            fetch(
              "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/q_ans",
              {
                method: "post",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ stage11: ans }),
              }
            )
              .then((res) => {
                if (!res.ok) throw new Error("서버 응답 에러");
                return res.json();
              })
              .then((data) => {
                if (data.correct) {
                  location.href = "/start11-end";
                } else {
                  alert("틀렸습니다!");
                }
              })
              .catch((err) => {
                console.error("Fetch Error:", err);
                alert("서버 요청 실패");
              });
          }}
        >
          제출
        </button>
      </div>
    </div>
  );
}

export default Start11;
