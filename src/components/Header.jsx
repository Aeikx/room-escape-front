import React, { useState, useEffect } from "react";
import "../App.css";
import Cookies from "js-cookie";

function Header() {
  useEffect(() => {
    fetch(
      "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/check-login",
      {
        credentials: "include", // ✅ HttpOnly 쿠키를 자동 포함시킴
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) {
          document.getElementById("login").style.display = "None";
          document.getElementById("signup").style.display = "None";
          document.getElementById("logout").textContent =
            data.userId + " 로그아웃";
          document.getElementById("logout").style.display = "";
        } else {
          document.getElementById("login").style.display = "";
          document.getElementById("signup").style.display = "";
          document.getElementById("logout").style.display = "None";
        }
      });
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-title">
        {/* <img src="./logo.png" alt="logo" /> */}
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
            fontSize: "1.5rem",
            letterSpacing: "1px",
          }}
        >
          신관
        </a>
      </div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className={`header-links ${menuOpen ? "open" : ""}`}>
        <nav className="nav-links">
          <a href="/" className="blue-links">
            메인페이지
          </a>
          <a
            className="blue-links"
            onClick={() => {
              fetch(
                "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/check-login",
                {
                  credentials: "include", // ✅ HttpOnly 쿠키를 자동 포함시킴
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  if (!data.loggedIn) {
                    alert("로그인이 필요합니다.");
                    location = "/login";
                  } else {
                    location = "/start";
                  }
                });
            }}
          >
            시작하기
          </a>
          <a href="/hall-of-fame" className="blue-links">
            명예의 전당
          </a>
        </nav>
        <div className="auth-links">
          <a href="/login" id="login" className="blue-links">
            로그인
          </a>
          <a href="/signup" id="signup" className="blue-links">
            회원가입
          </a>
          <a
            id="logout"
            className="red-links"
            onClick={() => {
              fetch(
                "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/logout",
                {
                  credentials: "include",
                }
              );
              location.href = "/";
            }}
          >
            로그아웃
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
