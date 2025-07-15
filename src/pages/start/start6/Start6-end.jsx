import React from "react";
import "../start1/Start1.css";

function Start6End() {
  return (
    <div className="end-container">
      <h1>기술공학실</h1>
      <div className="narrative-text">
        <h4>
          &nbsp;두 자리 숫자를 자물쇠에 입력하니, 상자가 열렸다. 이번엔 자물쇠가
          있나 정도만 확인했던 터라, 이게 두 자리 답일 줄 알았으면 그냥 찍어볼
          걸 그랬다는 조금 늦은 후회가 들었다.
        </h4>
        <h4>
          &nbsp;상자 안엔 쪽지는 없었고, 이전처럼 네 자리 숫자가 바닥에 적혀
          있었다. 다만 이번엔 그 숫자가 어떤 교실의 것인지 함께 표시되어 있었다.
          툴툴거리던 내 마음을 눈치라도 챈 걸까. 다음 장소는 컴퓨터실이었다.
        </h4>
        <h4>
          &nbsp;지금까지 풀어온 문제들을 곱씹어 보니 꽤 다양한 분야를 다루고
          있었다. 그리고 그 분야들은, 어쩐지 각 교실의 용도와 관련이 있었던 것
          같았다.
        </h4>
        <h4>
          &nbsp;그중에서도 내가 마음에 드는 문제들은 따로 모아뒀다. 잘
          만들었다고 생각한 것들. 언젠가 누군가 보여줄 수 있으면 좋겠다고
          생각하면서.
        </h4>
        <h4>
          &nbsp;그렇다면, 이번엔 컴퓨터나 프로그래밍과 관련된 문제일까. 그런
          생각을 하며, 문을 열고 컴퓨터실로 향했다.
        </h4>
      </div>
      <div className="next-button-container">
        <button
          className="next-button"
          onClick={() => (location.href = "/start7")}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default Start6End;
