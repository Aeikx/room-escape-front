import React from "react";
import "../start1/Start1.css";

function Start8End() {
  return (
    <div className="end-container">
      <h1>학생 동아리실</h1>
      <div className="narrative-text">
        <h4>
          &nbsp;교실이 열려 있었다는 건 문제를 풀어야 한다는 뜻일지도 모른다.
          하지만 이번엔 답을 맞혔는지 아닌지를 확인할 수 있는 방법이 없었다.
          그저, 이것도 신관을 벗어나기 위한 하나의 과정 중 하나일 거라는 생각만
          들었다.
        </h4>
        <h4>
          &nbsp;그래도 적어도 한 층의 문제들을 모두 풀었다고 생각하니, 조금은
          나아가고 있다는 느낌이 들었다.
        </h4>
        <h4>
          &nbsp;그런데, 2층의 교실들은 단 하나도 열려 있지 않았다. 혹시, 아까
          동아리실에서 풀었던 문제가 도어락의 비밀번호가 아닐까 하는 생각이
          들었다. 그렇지 않다면 굳이 답을 구할 이유가 없었을 테니까.
        </h4>
        <h4>
          &nbsp;조심스레 각 교실의 도어락에 그 숫자를 하나씩 입력해보았다. 열린
          곳은 복도 끝에 있는 AI융합실이었다.
        </h4>
      </div>
      <div className="next-button-container">
        <button
          className="next-button"
          onClick={() => (location.href = "/start9")}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default Start8End;
