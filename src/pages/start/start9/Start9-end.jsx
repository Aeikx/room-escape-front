import React from "react";
import "../start1/Start1.css";

function Start9End() {
  return (
    <div className="end-container">
      <h1>AI 융합실</h1>
      <div className="narrative-text">
        <h4>
          &nbsp;꽤 시간이 걸리는 문제였다. 그래도 답으로 하나의 단어가 명확하게
          떠올랐다. 그 단어가 이 문제의 답이라는 확신이 들어, 영문 자물쇠에
          조심스레 입력했다.
        </h4>
        <h4>
          &nbsp;상자는 열렸다. 그 안엔 네 자리 숫자와 함께 다음 교실인 수학2실이
          적혀 있었다.
        </h4>
      </div>
      <div className="next-button-container">
        <button
          className="next-button"
          onClick={() => (location.href = "/start10")}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default Start9End;
