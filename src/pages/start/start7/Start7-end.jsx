import React from "react";
import "../start1/Start1.css";

function Start7End() {
  return (
    <div className="end-container">
      <h1>컴퓨터실</h1>
      <div className="narrative-text">
        <h4>&nbsp;잠겨 있던 파일엔 다음과 같이 쓰여 있다.</h4>
        <h4>
          &nbsp;'이 글을 읽고 있다는 건, 네가 지금까지 꽤 많은 문제들을
          지나왔다는 뜻이겠지. 이제 남은 길은 멀지 않다. 다음 교실은 이미 열려
          있다. 그 교실의 문제를 푼다면 2층으로 올라가라.
        </h4>
        <h4>
          &nbsp;이렇게 오랜 시간, 내가 남긴 문제를 곱씹고, 그 결을 따라가 준
          이는 아마 너 하나뿐일 것이다.
        </h4>
        <h4>
          &nbsp;어쩌면 지금 이 순간이 내가 마지막이라 여겼던 것들을 다시
          처음이라 부를 수 있는 시작이 될지도 모르겠다.
        </h4>
        <h4>
          &nbsp;혹시 그 친구가 이 쪽지를 봤다면, 지금쯤 그 문제들을 풀고
          있을지도 모른다.
        </h4>
        <h4>&nbsp;고맙다.'</h4>
      </div>
      <div className="next-button-container">
        <button
          className="next-button"
          onClick={() => (location.href = "/start8")}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default Start7End;
