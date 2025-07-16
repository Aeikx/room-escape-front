import React from "react";
import "../start1/Start1.css";

function Start13() {
  return (
    <div className="start-container">
      <h1>복도, 출구 앞</h1>
      <img src="/env_img/env13.jpeg" alt="방 이미지" />
      <div className="narrative-text">
        <h4>
          &nbsp;수많은 문제를 풀어왔다. 그것들은 마치, 시 한 편을 해석하는 일과
          같았다. 난해함과 지루함이 번갈아 밀려왔고, 그 속에서 어쩌면 즐거움이라
          불릴 수 있는 감정이 가끔, 스치듯 지나가기도 했다.
        </h4>
        <h4>
          &nbsp;이제 더 이상 남은 단서는 없다. 그러나 어쩌면, 그는 이미 나에게
          마지막 문제를 건넨 것인지도 모른다.
        </h4>
        <h4>
          &nbsp;지금까지 모아온 쪽지들, 그 모든 문장과 침묵, 그의 부재를 닮은
          말들.
        </h4>
        <h4>
          &nbsp;나는 그 쪽지들을 손에 쥔 순서대로 조용히, 하나씩 늘어놓았다.
        </h4>
        <h4>
          &nbsp;그리고 그 순간, 어디선가 본 듯한 익숙한 문장들이 슬며시 눈에
          들어오기 시작했다.
        </h4>
      </div>
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
                body: JSON.stringify({ stage13: ans }),
              }
            )
              .then((res) => {
                if (!res.ok) throw new Error("서버 응답 에러");
                return res.json();
              })
              .then((data) => {
                if (data.correct) {
                  location.href = "/start13-end";
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

export default Start13;
