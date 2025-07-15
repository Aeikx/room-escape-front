import React from "react";
import "../start1/Start1.css";

function Start10() {
  return (
    <div className="start-container">
      <h1>수학 2실</h1>
      <img src="/env_img/env10.jpeg" alt="방 이미지" />
      <div className="narrative-text">
        <h4>
          &nbsp;이번 교실에도 상자가 있기를 내심 기대했지만, 그 흔적은 어디에도
          보이지 않았다.
        </h4>
        <h4>
          &nbsp;눈에 띄는 문제나 종이도 없어 교실 안을 천천히, 샅샅이 살폈다.
        </h4>
        <h4>
          &nbsp;비어 있는 책상들 사이에서 유일하게 정돈되지 않은 책상이 눈에
          들어왔다.
        </h4>
        <h4>
          &nbsp;그 책상의 사물함 안에는 종이 한 장이 접혀 있었다. 쪽지처럼,
          누군가 일부러 감춰둔 듯한 방식으로.
        </h4>
        <h4>
          &nbsp;'나는 누군가의 문제를 푸는 것도 꽤 즐거워했다. 그 중에서도
          성냥개비 문제는 간단한 재료로 상상력을 시험할 수 있어서 좋아했다.
          만들기도 쉬웠고, 무엇보다 창의적인 발상을 담기에 알맞은 형식이었다.
        </h4>
        <h4>
          &nbsp;그러던 어느 날, 지금껏 봐온 것들과는 조금 결이 다른 성냥개비
          문제가 하나 눈에 들어왔다.
        </h4>
        <h4>
          &nbsp;나는 그 문제를 보고 몇 시간 동안 멍하니 생각에 잠겼고, 결국 답을
          떠올려 그 문제를 낸 남성에게 답을 보냈다.'
        </h4>
      </div>
      <h2 className="question">문제</h2>
      <h4>등식을 옳게 고치시오</h4>
      <img src="/q_img/q10.png" alt="문제 이미지" />
      <p className="answer-type">[Answer Type: 한국어]</p>
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
            if (ans === "절댓값") {
              fetch(
                "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/q_ans",
                {
                  method: "post",
                  credentials: "include",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ stage10: "clear" }),
                }
              )
                .then((res) => {
                  if (!res.ok) throw new Error("서버 응답 에러");
                  return res.json();
                })
                .then((data) => {
                  if (data.success) {
                    location.href = "/start10-end";
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

export default Start10;
