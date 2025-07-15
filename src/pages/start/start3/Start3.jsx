import React from "react";
import "../start1/Start1.css";

function Start3() {
  return (
    <div className="start-container">
      <h1>음악실</h1>
      <img src="/env_img/env3.jpeg" alt="방 이미지" />
      <div className="narrative-text">
        <h4>
          &nbsp;쪽지를 조심스레 접어 주머니에 넣고, 주변을 한 번 더 둘러본 뒤
          교실을 나섰다. 이번엔 복도 끝, 음악실을 향해 곧장 걸었다. 이제는 어느
          정도 감이 온다. 이 교실에도, 아마 상자가 있을 것이다.
        </h4>
        <h4>
          &nbsp;그러나 막상 문을 열고 들어섰을 때, 지금까지와 같은 상자는 보이지
          않았다. 음악실은 평소와 다를 것 없이 조용했고, 책상과 피아노, 악보장과
          의자들이 제자리에 놓여 있었다.
        </h4>
        <h4>
          &nbsp;여긴 따로 문제가 없나, 교실을 가볍게 훑어보던 중, 선생님의 책상
          위에서 눈에 띄는 것이 하나 있었다.
        </h4>
        <h4>
          &nbsp;여러 장의 피아노 오선보 사이에 조심스럽게 끼워진 종이 한 장이
          눈에 띄었다. 처음엔 다른 종이와 같이 평범한 악보인가 싶어 이 종이들을
          자세히 보고 있지는 않았지만, 들여다보니 이건 음표나 리듬 기호가 아니라
          몇 개의 알파벳과 숫자들만이 단조롭게 나열된 종이였다.
        </h4>
        <h4>
          &nbsp;악보라기보다는, 그저 음악실 안에 있을 법하지 않은 조금 엉뚱한
          메모에 가까웠다.
        </h4>
      </div>
      <h2 className="question">문제</h2>
      <img src="/q_img/q3.png" alt="문제 이미지" />
      <p className="answer-type">[Answer Type: 숫자]</p>
      <div className="answer-section">
        <input type="text" placeholder="답 입력" id="ans" />
        <button
          className="submit-button"
          onClick={() => {
            if (document.getElementById("ans").value === "105123") {
              fetch(
                "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/q_ans",
                {
                  method: "post",
                  credentials: "include",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ stage3: "clear" }),
                }
              )
                .then((res) => {
                  if (!res.ok) throw new Error("서버 응답 에러");
                  return res.json();
                })
                .then((data) => {
                  if (data.success) {
                    location.href = "/start3-end";
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

export default Start3;
