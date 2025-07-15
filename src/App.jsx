import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app" lang="ko-KR">
      <main className="main-content">
        <h1>청주고 팬티도둑 찾기 대작전!!</h1>
        <p>문의사항 cjhigh2scape@gmail.com</p>
        <button
          style={{
            padding: "12px 24px",
            fontSize: "1rem",
            backgroundColor: "#5a48a3", // 보라색
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
            transition: "background-color 0.3s ease",
          }}
          onClick={() => (window.location.href = "/hall-of-fame")}
        >
          명예의 전당
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
