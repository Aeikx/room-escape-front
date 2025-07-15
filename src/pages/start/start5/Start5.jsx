import React from "react";
import "../start1/Start1.css";

function Start5() {
  return (
    <div className="start-container">
      <h1>보건실</h1>
      <img src="/env_img/env5.jpeg" alt="방 이미지" />
      <div className="narrative-text">
        <h4>
          &nbsp;상자에 적혀 있던 네 자리 숫자는 보건실 도어락의 비밀번호였다.
          평소에도 잘 오지 않던 공간이라 낯설었고, 무엇보다 지금처럼 사람이 없는
          깊은 밤엔 공기 자체가 무겁게 가라앉아 있는 듯한 느낌이었다.
        </h4>
        <h4>
          &nbsp;그 안에도 상자가 있었다. 이쯤 되니, 다시 이 상황에 대한 의심이
          들기 시작했다. 누군가 이 공간을 계획적으로 구성한 것이 분명했다.
          단서들은 정해진 순서로 배치되어 있었고, 나는 그 흐름에 이끌리듯
          움직이고 있었다.
        </h4>
        <h4>
          &nbsp;왜 이런 일이 벌어지는지, 왜 하필 내가 이 안에 있는지, 무엇 하나
          명확한 건 없었다.
        </h4>
        <h4>
          &nbsp;상자 위에는 익숙한 형식의 종이가 놓여 있었다. 이제는 단순한
          장난이 아니라는 생각이 들었다.문제를 넘기듯, 조심스럽게 종이를 펼쳤다.
        </h4>
      </div>
      <h2 className="question">문제</h2>
      <div className="narrative-text">
        <h4>
          <b>3-&gt;1</b> 에서 증가하고, <b>4-&gt;2</b> 에서 감소하는 것
        </h4>
      </div>
      <img src="/q_img/q5.png" alt="문제 이미지" />
      <p className="answer-type">[Answer Type: 영어&숫자]</p>
      <div className="answer-section">
        <input type="text" placeholder="답 입력" id="ans" />
        <button
          className="submit-button"
          onClick={() => {
            if (document.getElementById("ans").value === "O2") {
              fetch(
                "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/q_ans",
                {
                  method: "post",
                  credentials: "include",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ stage5: "clear" }),
                }
              )
                .then((res) => {
                  if (!res.ok) throw new Error("서버 응답 에러");
                  return res.json();
                })
                .then((data) => {
                  if (data.success) {
                    location.href = "/start5-end";
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

export default Start5;
