import React from "react";
import "../start1/Start1.css";

function Start12() {
  return (
    <div className="start-container">
      <h1>회의실</h1>
      <img src="/env_img/env12.jpeg" alt="방 이미지" />
      <div className="narrative-text">
        <h4>
          &nbsp;지금까지의 쪽지들을 되짚어보면, 이 문제들을 만들어 놓은 사람은
          어쩌면 이미, 더는 문제를 만들 수 없는 시간 속에 머물고 있는 듯했다.
        </h4>
        <h4>
          &nbsp;그러나 그가 몸조차 일으킬 수 없었다면, 도대체 이 수많은 문제들은
          어떻게 이 교실 곳곳에 남겨진 것일까.
        </h4>
        <h4>
          &nbsp;그리고 그 쪽지들은, 누가, 언제, 어떤 방식으로 이 자리에 두었던
          걸까.
        </h4>
        <h4>&nbsp;이해되지 않는 것들이 하나둘씩 고여간다.</h4>
        <h4>
          &nbsp;꽤 오랜 시간이 흐른 것 같은데도, 창밖의 어둠은 조금도 옅어질
          기미를 보이지 않는다. 마치 이 공간의 시계만 어딘가에서 멈춰 있는
          것처럼.
        </h4>
        <h4>
          &nbsp;나는 상자에 적혀 있던 ‘회의실’로 발을 옮겼다. 그곳에도 상자는
          놓여 있었다.
        </h4>
        <h4>
          &nbsp;그리고 문득, 무언가가 끝에 가까워지고 있다는 예감이 들었다.
        </h4>
      </div>
      <h2 className="question">문제</h2>
      <img src="/q_img/q12.png" alt="문제 이미지" />
      <h4>가능한 &lt;a,b&gt;순서쌍의 개수는?</h4>
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
            if (ans === "20") {
              fetch(
                "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/q_ans",
                {
                  method: "post",
                  credentials: "include",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ stage11: "clear" }),
                }
              )
                .then((res) => {
                  if (!res.ok) throw new Error("서버 응답 에러");
                  return res.json();
                })
                .then((data) => {
                  if (data.success) {
                    location.href = "/start12-end";
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

export default Start12;
