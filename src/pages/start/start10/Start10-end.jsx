import React from "react";
import "../start1/Start1.css";

function Start10End() {
  return (
    <div className="end-container">
      <h1>수학 2실</h1>
      <div className="narrative-text">
        <h4>&nbsp;결국 그 문제의 답은 0이었다.</h4>
        <h4>
          &nbsp;다른 방들처럼 문이 열린다거나 상자가 열리는 뚜렷한 반응은
          없었다. 이제는 익숙하다.
        </h4>
        <h4>
          &nbsp;이전의 어떤 교실들처럼, 이번에도 문제의 답이 다른 교실 도어락의
          비밀번호가 아닐까 싶었다.
        </h4>
        <h4>
          &nbsp;직접적인 피드백은 없지만, 이 모든 게 어딘가 설계된 흐름이라는
          감각은 점점 더 선명해진다.
        </h4>
        <h4>&nbsp;나는 다시, 잠겨 있던 교실들을 향해 걸음을 옮겼다.</h4>
      </div>
      <div className="next-button-container">
        <button
          className="next-button"
          onClick={() => (location.href = "/start11")}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default Start10End;
