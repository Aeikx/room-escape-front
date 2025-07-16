import React from "react";
import "../start1/Start1.css";

function Start8() {
  return (
    <div className="start-container">
      <h1>학생 동아리실</h1>
      <img src="/env_img/env8.jpeg" alt="방 이미지" />
      <div className="narrative-text">
        <h4>
          &nbsp;갑작스런 고백처럼 느껴진 ‘고맙다’는 말에 당황스러움이 앞섰지만,
          그간 받아온 쪽지들 중 가장 직접적이고 무슨 말을 하려는지 명확하게
          전해지는 글이었다.
        </h4>
        <h4>
          &nbsp;그 순간부터, 이 문제들을 만들고 교실마다 배치한 ‘누군가’의
          정체에 대한 호기심이 점점 더 뚜렷해졌다.
        </h4>
        <h4>
          &nbsp;컴퓨터실을 나와 1층의 아직 가보지 않은 교실들을 하나씩
          열어보았다. 결국 열려 있는 문은 학생 동아리실 하나뿐이었다.
        </h4>
        <h4>
          &nbsp;처음 들어오는 공간이었다. 다른 학생들도 자주 쓰지 않는 듯 항상
          잠겨 있던, 잊힌 교실.
        </h4>
        <h4>
          &nbsp;책상 위에는 수학 문제처럼 보이는 종이 한 장이 놓여 있었다.
        </h4>
      </div>
      <h2 className="question">문제</h2>
      <img src="/q_img/q8.png" alt="문제 이미지" />
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
                body: JSON.stringify({ stage8: ans }),
              }
            )
              .then((res) => {
                if (!res.ok) throw new Error("서버 응답 에러");
                return res.json();
              })
              .then((data) => {
                if (data.correct) {
                  location.href = "/start8-end";
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

export default Start8;
