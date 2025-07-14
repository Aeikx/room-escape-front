// src/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const form = e.target;
    const userName = form.name.value.trim();
    const userID = form.id.value.trim();
    const userPW = form.password.value;
    const userPW2 = form.confirmPassword.value;

    if (userPW !== userPW2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "https://port-0-room-escape-md2eap8bfeb3cb79.sel5.cloudtype.app/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userID, userName, userPW }),
        }
      );
      const success = await res.json();
      if (success) {
        alert("회원가입 완료");
        navigate("/");
      } else {
        alert("중복된 아이디입니다.");
        form.reset();
      }
    } catch {
      alert("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              minlength="2"
              maxlength="10"
              required
              placeholder="이름을 입력해주세요 (2~10자)"
            />
          </div>
          <div className="input-group">
            <label htmlFor="id">아이디</label>
            <input
              type="text"
              id="id"
              name="id"
              minlength="2"
              maxlength="10"
              required
              placeholder="아이디를 입력해주세요 (2~10자)"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">비밀번호 확인</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              placeholder="비밀번호를 다시 입력해주세요"
            />
          </div>
          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? "가입 중…" : "회원가입"}
          </button>
        </form>
        <div className="login-link">
          계정이 있으신가요? <Link to="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
