import React from "react";
import "../start1/Start1.css";

function Start3End() {
  return (
    <div className="end-container">
      <h1>음악실</h1>
      <div className="narrative-text">
        <h4>
          &nbsp;문제를 풀었다는 확신은 있었지만, 이번엔 쪽지가 있지도 않았고,
          무언가가 열린 듯한 기척도 느껴지지 않았다. 정답이 맞았는지 확신할 수는
          없었지만, 답에는 어느 정도 확신이 있었다.
        </h4>
        <h4>
          &nbsp;숫자를 보고 한참을 고민했다. 이게 무엇을 뜻하는지 확신은
          없었지만, 문득 떠오른 가능성이 하나 있었다. 혹시, 잠겨 있는 교실의
          자물쇠나 도어락의 비밀번호는 아닐까.
        </h4>
        <h4>
          &nbsp;그 생각 하나로 나는 3층의 닫힌 교실 문들을 하나씩 확인해보기로
          했다.
        </h4>
      </div>
      <div className="next-button-container">
        <button
          className="next-button"
          onClick={() => (location.href = "/start4")}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default Start3End;
