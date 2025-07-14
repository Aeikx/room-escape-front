import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app" lang="ko-KR">
      <main className="main-content">
        <h1>청주고 팬티도둑 찾기 대작전!!</h1>
        <p>문의사항 cjhigh2scape.gmail.com</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
