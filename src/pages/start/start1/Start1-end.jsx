import React from "react";
import "./Start1.css";

function Start1End() {
  return (
    <div className="end-container">
      <h1>영어전용실 B</h1>
      <div className="narrative-text">
        <h4>
          &nbsp;'나는 문제를 만든다. <br />
          아무도 풀지 않아도, 묻지도 않아도, <br />
          문제를 짓는 일에는 언제나 이상한 위로가 있었다.
        </h4>
        <h4>
          &nbsp;정답이란 건 애초에 중요하지 않았다.
          <br />
          의문을 어떻게 세우느냐,
          <br />그 물음이 얼마나 오래 나를 붙들어두느냐가 <br />더 큰 문제였다.
        </h4>
        <h4>
          &nbsp;그래서 나는 나름의 기준으로
          <br />잘 만든 문제들만 모아두었다. <br />
          때때로 꺼내 읽고, 흐릿해진 숫자나 문장을 <br />
          다시 손질하기도 했다. <br />
          혼잣말처럼, 오래된 편지를 다듬는 마음으로.
        </h4>
        <h4>
          &nbsp;누가 이 쪽지를 보게 될지는 알 수 없다. <br />
          어쩌면 아무도 보지 못할 수도 있다. <br />
          하지만 만약, 지금 이것을 읽고 있다면 남은 문제들도 조용히 잘 풀어가길.
        </h4>
        <h4>
          &nbsp;거기까지 닿는다면, <br />이 기록은 충분하다.'
        </h4>
      </div>
      <div className="next-button-container">
        <button
          className="next-button"
          onClick={() => (location.href = "/start2")}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default Start1End;