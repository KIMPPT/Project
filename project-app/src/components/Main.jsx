import React from "react";
import "../CSS/main.css";
import { useState, useContext } from "react";
import DataContext from "../context/DataContext";
export default function Main() {
  let { state, action } = useContext(DataContext);
  let [choice, setChoice] = useState(0);
  let choicePrice=()=>{state.price.filter((price)=>price.id==state.count)}
  return (
    <div className="box">
      <div>
        <img
          src="/image/300.png"
          alt="이미지자리입니다"
          className="mainimagelarge"
        />
      </div>
      <div className="nav">
        <img src="/image/100-2.png" alt="작은이미지1입니다" className="wrap" />
        <img
          src="/image/100.png"
          alt="작은이미지2입니다"
          className="wrap"
          onClick={() => {}}
        />
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>물품이름 :</td>
              <td>물품명</td>
            </tr>
            <tr>
              <td>옵션 :</td>
              <td>
                <select
                  name=""
                  id=""
                  onChange={(e) => action.setCount(e.target.value)}
                >
                  <option value="">옵션을 선택해주세요</option>
                  <option value="1">기본 : 30000원</option>
                  <option value="2">기본+추가옵션1 : 35000원</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>구매 수량 :</td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="0"
                  min={0}
                  onChange={(e) => action.setCount(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>배송비 :</td>
              <td>
                N개 미만 : <span id="tax">3000</span> 원 <br />
                N개 이상 : 무료
              </td>
            </tr>
            <tr>
              <td>현재 재고량 :</td>
              <td>
                <span id="exist">200</span>개
              </td>
            </tr>
            <tr>
              <td>최종 가격 : state.count-갯수확인</td>
              <td>{choice}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="buy">
        <button
          onClick={() => {
            alert("보관하였습니다");
          }}
        >
          보관하기
        </button>
        <button onClick={() => {}}>구매하기</button>
      </div>
      <div className="buttons">
        <button>물품 설명</button>
        <button>상세 설명</button>
        <button>관련 물품</button>
      </div>
    </div>
  );
}
