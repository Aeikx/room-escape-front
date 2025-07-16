import React from "react";
import "../start1/Start1.css";

function Start2() {
  return (
    <div className="start-container">
      <h1>미술실</h1>
      <img src="/env_img/env2.jpeg" alt="방 이미지" />
      <div className="narrative-text">
        <h4>
          &nbsp;문을 열고 나서자, 익숙한 신관의 복도가 모습을 드러냈다. 하지만
          늘 다니던 길인데도, 이 시간의 신관은 어딘가 낯설게 느껴졌다. 조명이
          켜져 있음에도 공기엔 정적이 깔려 있었고, 발소리조차 허용되지 않는
          분위기였다.
        </h4>
        <h4>
          &nbsp;예상대로 3층 끝의 본관 연결문은 잠겨 있었고, 1층과 2층에 있는
          출구들도 모두 굳게 닫혀 있었다.
        </h4>
        <h4>
          &nbsp;복도를 따라 걸으며 교실 문을 살펴봤다. 대부분은 잠겨 있었지만,
          이상하게도 3층에 있는 교실들 중 몇 군데만 열려 있었다. 누군가
          의도적으로 정리해둔 듯한 질서였다.
        </h4>
        <h4>
          &nbsp;미술실의 문을 열었을 때, 가장 먼저 시야에 들어온 것은
          영어전용실B에서 봤던 것과 같은 형태의 금속 상자였다. 그 위치, 크기,
          자물쇠까지 똑같았다.
        </h4>
        <h4>
          &nbsp;문득 떠올랐다. 아까 상자의 자물쇠를 열고 나서, 닫혀 있던 문이
          열렸던 기묘한 상황. 우연이라기엔 너무 또렷한 연결이었다.
        </h4>
        <h4>
          &nbsp;이번 상자도, 아마 신관을 나가는 데 필요한 과정 중 하나일 것이다.
          그런 확신에 가까운 생각이 들자, 거의 망설임 없이 상자 쪽으로 발걸음을
          옮겼다.
        </h4>
        <h4>
          &nbsp;상자 위에는 역시 종이가 놓여 있었다. 하지만 이번에는 한 장이
          아니었다. 종이는 두 장.
        </h4>
      </div>
      <h2 className="question">문제</h2>
      <div className="narrative-text">
        <h4>
          &nbsp;'상고의 세월에 천지가 어지럽고, 음양이 갈피를 잃으매, 하늘이
          크게 노하여 사방에 수호의 형상을 내려 보냈더라. 그들은 각각 짐승의
          형상이되, 하늘의 뜻을 품고 땅의 이치를 지켰으니, 세인은 이들을 가리켜
          사신이라 일컬었도다.
        </h4>
        <h4>
          &nbsp;먼저 해 뜨는 방향에 긴 몸을 휘감은 자가 구름을 가르고 솟구쳤다.
          그의 움직임에 바람이 일고, 하늘이 끓으며 대지는 굽이치니, 이내 그 몸이
          하늘을 감돌아 동방을 <b>덮었다.</b> 그 아래로 흩어진 기운이 얌전히
          가라앉고, 동녘의 문이 감춰졌도다.
        </h4>
        <h4>
          &nbsp;이어 해 지는 하늘 끝에서 이빨을 드러낸 자가, 산을 넘고 골을 달려
          허공을 찢으며 달려들었다. 그의 발걸음 아래 날카로운 기세가 퍼지며,
          삽시간에 어지러운 틈을 <b>덮고,</b> 서쪽의 경계는 철벽이 되었더라.
        </h4>
        <h4>
          &nbsp;남녘 하늘에서는 날개를 지닌 존재가 불을 끌고 내려왔다. 허공을
          휘돌며 타오르는 숨결로 온 들판을 감싸 안고, 타락한 열기를 정화하니, 그
          날개 아래 남쪽은 조용히 숨을 돌렸다. 그는 하늘을 활처럼 휘감아 남방을
          넓게 <b>덮었노라.</b>
        </h4>
        <h4>
          &nbsp;북방의 어둠 속에서는 거대한 형상이 말없이 고개를 들었다. 뱀과
          거북이 합쳐진 기이한 그 존재는 무겁고도 냉정하였으며, 그 움직임마다
          대지가 멎고 숨결이 얼었도다. 이내 북녘 땅은 그의 긴 그림자에 온전히
          <b> 덮이니,</b> 빛조차 스미지 못하였더라.
        </h4>
        <h4>
          &nbsp;이렇듯 그 네 형상은 동을 감고, 서를 막고, 남을 감싸고, 북을
          가려, 사방을 완연히 <b>덮어</b> 지키니, 천하는 고요하고, 만물은
          제자리에 돌아갔더라.'
        </h4>
      </div>
      <img src="/q_img/q2.png" alt="문제 이미지" />
      <p className="answer-type">[Answer Type: 숫자]</p>
      <div className="answer-section">
        <input type="text" placeholder="답 입력" id="ans" />
        <button
          className="submit-button"
          onClick={() => {
            const ans = document.getElementById("ans").value;
            if (ans === "7953") {
              fetch(
                "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/q_ans",
                {
                  method: "post",
                  credentials: "include",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ stage2: ans }),
                }
              )
                .then((res) => {
                  if (!res.ok) throw new Error("서버 응답 에러");
                  return res.json();
                })
                .then((data) => {
                  if (data.success) {
                    location.href = "/start2-end";
                  } else {
                    alert(data.message || "문제 풀이 실패");
                  }
                })
                .catch((err) => {
                  console.error("Fetch Error:", err);
                  alert("서버 요청 실패");
                });
            } else {
              alert("틀렸습니다!");
            }
          }}
        >
          제출
        </button>
      </div>
    </div>
  );
}

export default Start2;
