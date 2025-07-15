// Start.js
import React, { useState, useEffect } from "react";
import "./Start.css";

function Start() {
  const [stageClear, setStageClear] = useState({});

  useEffect(() => {
    fetch(
      "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/clear-stage",
      {
        // 실제 엔드포인트로 변경하세요
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => setStageClear(data))
      .catch((e) => console.error("StageFetchError:", e));
  }, []);

  return (
    <div className="start1-container">
      <h1>메인 스토리</h1>
      <h4>
        &nbsp;긴 잠에서 깨어났다. 몸은 묘하게 개운했지만, 사지를 움직일 때마다
        저릿한 감각이 따라붙었다. 눈앞은 흐렸고, 어둠에 익숙해지는 데 시간이
        필요했다. 창문 밖에선 달빛이 스며들고 있었지만, 어딘가 멍한 그 빛은
        시야를 밝혀주지 못했다.
      </h4>
      <button
        className="next-button"
        onClick={() => (location.href = "/start1")}
      >
        다음
      </button>
      {Object.entries(stageClear)
        .filter(([key, value]) => key.startsWith("stage") && value === "clear")
        .map(([key]) => {
          const stageNum = key.replace("stage", "");
          return (
            <div key={key} className="stage-link-row">
              <a href={`/start${stageNum}`} className="stage-link">
                Stage {stageNum}
              </a>
              <a href={`/start${stageNum}-end`} className="stage-link">
                Stage {stageNum} Clear
              </a>
            </div>
          );
        })}
    </div>
  );
}

export default Start;
