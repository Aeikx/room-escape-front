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
    <div className="start-container">
      <h1>메인 스토리</h1>
      <h4>
        긴 잠에서 깨어났다. 몸은 묘하게 개운했지만, 사지를 움직일 때마다 저릿한
        감각이 따라붙었다. 눈앞은 흐렸고, 어둠에 익숙해지는 데 시간이 필요했다.
        창문 밖에선 달빛이 스며들고 있었지만, 어딘가 멍한 그 빛은 시야를
        밝혀주지 못했다.
      </h4>
      {Object.entries(stageClear)
        .filter(([k, v]) => k.startsWith("stage") && v === "clear")
        .map(([k]) => {
          const n = k.replace("stage", "");
          return (
            <div key={k} style={{ margin: "8px 0" }}>
              {/* 일반 페이지 링크 */}
              <a
                href={`/start${n}`}
                style={{ marginRight: "12px", color: "#5a48a3" }}
              >
                Stage {n} 페이지로 이동
              </a>
              {/* 완료 페이지 링크 */}
              <a href={`/start${n}-end`} style={{ color: "#5a48a3" }}>
                Stage {n} 완료 페이지로 이동
              </a>
            </div>
          );
        })}

      <button
        style={{
          padding: "12px 24px",
          fontSize: "1rem",
          backgroundColor: "#5a48a3",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "background-color 0.2s ease",
          width: "100%",
          marginTop: "20px",
        }}
        onClick={() => (location.href = "/start1")}
      >
        다음
      </button>
    </div>
  );
}

export default Start;
