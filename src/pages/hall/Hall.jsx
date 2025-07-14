import React, { useEffect, useState } from "react";
import "./Hall.css";

function Hall() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/hall",
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
        setList(res);
      });
  }, []);

  const getRankEmoji = (index) => {
    return index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "";
  };

  return (
    <div className="hall-container">
      <h1 className="hall-title">명예의 전당</h1>
      <div className="hall-list">
        {list.map((item, index) => (
          <div
            className={`hall-entry ${index === 0 ? "rank-1" : ""}`}
            key={index}
          >
            <div className="rank-number">
              {getRankEmoji(index)} {index + 1}위
            </div>
            <div className="nickname">{item.userName}</div>
            <div className="clear-time">{item.clearTime}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hall;
