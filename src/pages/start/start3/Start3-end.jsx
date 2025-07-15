import React from "react";
import "../start1/Start1.css";

function Start3End() {
  return (
    <div className="end-container">
      <h1>음악실</h1>
      <div className="narrative-text">
        <h4>
          &nbsp;역시, 이 종이도 일종의 악보였다.<br /> 처음엔 생소해 보였지만, <br />자세히
          들여다보니 어릴 적 피아노 학원에서 몇 번이나 쳐본 기억이 있는 익숙한
          멜로디였다.
        </h4>
        <h4>
          &nbsp;문제를 풀었다는 확신은 있었지만, 이번엔 쪽지가 있지도 않았고,
          무언가가 열린 듯한 기척도 느껴지지 않았다. 정답이 맞았는지 확신할 수는
          없었지만, 이 문제가 악보를 의미하고 있었다는 사실은 분명했다.
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