import React from "react";
import "../start1/Start1.css";

function Start13End() {
  return (
    <div className="end-container">
      <h1>탈출</h1>
      <div className="narrative-text">
        <h4>
          &nbsp;자물쇠를 열었다. 드디어 건물 밖으로 나왔다. 이제, 정말 끝이다.
        </h4>
        <h4>
          &nbsp;긴 꿈을 꾼 것만 같다. 신관을 벗어나자마자 시간이 다시 흐르기
          시작하는 느낌이었다. 어둠에 익숙지 않았던 눈도 점차 바깥의 풍경을
          또렷이 받아들이기 시작했다.
        </h4>
        <h4>
          &nbsp;밖에서 본 신관은 이상하리만치 낯설었다. 내내 불이 켜져 있던
          교실들, 그 모든 불빛은 꺼져 있었다. 마치 아무 일도 없었던 것처럼.
        </h4>
        <h4>
          &nbsp;이 말도 안 되는 일을 누군가에게 이야기한다고 해서 과연 믿어줄
          사람이 있을까.
        </h4>
        <h4>
          &nbsp;이 말도 안 되는 일을 누군가에게 이야기한다고 해서 과연 믿어줄
          사람이 있을까.
        </h4>
        <h4>
          &nbsp;모든 것이 흐릿해지고 있어 그저 꿈이었다고 생각하기로 했다. 아니,
          분명하다. 그건 정말, 꿈만 같았다.
        </h4>
      </div>
      <div className="next-button-container">
        <button
          className="next-button"
          onClick={() =>
            fetch(
              "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/clear",
              {
                method: "get",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
              .then((res) => res.json())
              .then((res) => {
                if (res.success) {
                  location.href = "/hall-of-fame";
                } else {
                  alert("문제를 다 풀어주세요");
                  location.href = "/";
                }
              })
          }
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default Start13End;
