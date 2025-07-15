import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./Login.css"; // 스타일링을 위해 이 파일을 생성했다고 가정합니다.

function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>로그인</h2>
          <form>
            <div className="input-group">
              <label htmlFor="id">아이디</label>
              <input
                id="id"
                name="id"
                minlength="2"
                maxlength="10"
                placeholder="아이디를 입력해주세요"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
                required
              />
            </div>
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
              onClick={(e) => {
                e.preventDefault();
                const userData = {
                  Id: document.getElementById("id").value,
                  Pw: document.getElementById("password").value,
                };

                if (e.target.disabled) return;
                e.target.disabled = true;

                fetch(
                  "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/login",
                  {
                    method: "post",
                    credentials: "include",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                  }
                )
                  .then((res) => res.json())
                  .then((res) => {
                    console.log(res);
                    if (res.loggedIn) {
                      location.href = "/";
                      alert("로그인 성공");
                    } else {
                      alert("아이디 또는 비밀번호가 잘못되었습니다.");
                      location.reload();
                    }
                  })
                  .catch((error) => {
                    console.error("Login error:", error);
                    alert("로그인 중 오류가 발생했습니다.");
                  })
                  .finally(() => {
                    setTimeout(() => (e.target.disabled = false), 1000);
                  });
              }}
            >
              로그인
            </button>
          </form>
          <p className="signup-link">
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
