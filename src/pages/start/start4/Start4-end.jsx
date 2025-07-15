import React from "react";
import "../start1/Start1.css";

function Start4End() {
  return (
    <div className="end-container">
      <h1>영어전용실 A</h1>
      <div className="narrative-text">
        <h4>
          &nbsp;이번에도 쪽지가 있을 거라 생각했지만, 상자 안에는 짧은 메모
          대신, 바닥에 적힌 네 자리 숫자뿐이었다.
        </h4>
        <h4>
          &nbsp;언뜻 떠오른 생각은 하나였다. 혹시 지금 잠겨 있는 교실들 중
          하나의 비밀번호일지도 모른다는 것. 그 가능성에 기대어, 도어락이 달린
          문마다 숫자를 입력해 보기 시작했다.
        </h4>
        <h4>
          &nbsp;하지만 생각보다 쉽지 않았다. 열리는 문은 좀처럼 나타나지 않았고,
          교실 하나하나를 확인하는 일은 점점 기계적인 작업이 되어갔다.
        </h4>
        <h4>
          &nbsp;무심코 손이 움직이고, 발걸음이 이어지다 보니 어느새 나는 1층에
          도착해 있었다.
        </h4>
      </div>
      <div className="next-button-container">
        <button
          className="next-button"
          onClick={() => (location.href = "/start5")}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default Start4End;