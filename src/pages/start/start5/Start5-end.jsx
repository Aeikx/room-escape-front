import React from "react";
import "../start1/Start1.css";

function Start5End() {
  return (
    <div className="end-container">
      <h1>보건실</h1>
      <div className="narrative-text">
        <h4>
          &nbsp;답을 떠올리고 상자를 열려고 했는데, 자물쇠는 처음부터 잠겨 있지
          않았다.
        </h4>
        <h4>
          &nbsp;설마 싶었다. 혹시 애초에 열려 있었는데 괜히 혼자 문제를 푼 건
          아닐까.
        </h4>
        <h4>
          &nbsp;잠깐 허탈한 기분이 들었지만, 그럴 수도 있겠다는 생각에 이내
          고개를 저었다.
        </h4>
        <h4>
          &nbsp;상자 안에는 익숙한 쪽지 한 장과, 바닥에 붙은 네 자리 숫자가
          있었다.
        </h4>
        <h4>
          &nbsp;'무언가 떠오를 듯, 닿지 않는다. 언제부턴가 사유는 결에 걸리고,
          끝맺음 없는 그림자들만이 종이 위를 맴돈다.
        </h4>
        <h4>
          &nbsp;내 안의 구조는 느슨하게 풀려 있고, 의지는 희미한 습관처럼만 남아
          있다. 형체 없는 생각들을 길어 올리기엔 손끝은 너무 오래 진동했고,
          시야는 번져 있다.
        </h4>
        <h4>
          &nbsp;질서 없는 조각들을 맞추는 일이 과연 한때의 놀이였는지, 오래된
          망상이었는지 이제는 가늠할 수조차 없다.
        </h4>
        <h4>
          &nbsp;그럼에도 나는 또, 하나의 빈 칸을 생각한다. 이미 스스로도 읽지
          못할 퍼즐을 향해 마지막 문장을 흘려 놓는다.
        </h4>
        <h4>
          <b>
            판잣집 유리딱지에
            <br /> 아이들 얼굴이
            <br /> 불타는 해바라기마냥 걸려 있다.
          </b>
        </h4>
        <h4>
          <b>
            내려쪼이던 햇발이 눈부시어 돌아선다.
            <br /> 나도 돌아선다.
            <br /> 울상이 된 그림자 나의 뒤를 따른다.'
          </b>
        </h4>
      </div>
      <div className="next-button-container">
        <button
          className="next-button"
          onClick={() => (location.href = "/start6")}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default Start5End;
