import React, { FunctionComponent, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
`;

const SelectBox = styled.div`
  display: flex;
  width: 136px;
  flex-direction: column;
  font-size: 16px;
  color: #a3afbf;
  .option-container {
    font-size: 14px;
    box-shadow: 0px 1px 4px rgba(109, 123, 143, 0.12),
      0px 4px 24px rgba(109, 123, 143, 0.25);
    color: rgba(0, 0, 0, 0.87);
    width: 100%;
    max-height: 0;
    opacity: 0;
    transition: all 0.2s;
    border-radius: 4px;
    overflow: hidden;
    order: 1;
    text-align: center;
    ::-webkit-scrollbar {
      width: 3px;
      background: #blue;
      border-radius: 0 4px 4px 0;
    }
    ::-webkit-scrollbar-thumb {
      background: #fff;
      border-radius: 0 4px 4px 0;
    }
  }
  .active {
    max-height: 150px;
    opacity: 1;
    overflow-y: scroll;
  }
  .option,
  .selected {
    padding: 12px 15px;
    cursor: pointer;
  }
  .option:hover {
    background: #dadee6;
  }
  .label {
    cursor: pointer;
  }
  .radio {
    display: none;
  }
  .selected {
    background: #f6f7f9;
    border-radius: 8px;
    margin-bottom: 8px;
    position: relative;
    order: 0;
    .name {
      display: inline-block;
      color: rgba(0, 0, 0, 0.87);
      font-size: 16px;
    }
  }
  .selected::after {
    content: "";
    background: url("images/arrow_down.svg");
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 30px;
    position: absolute;
    height: 100%;
    width: 15px;
    top: 18px;
    right: 10px;
    transition: all 0.4s;
  }
  .option-container.active + .selected::after {
    background: url("images/arrow_up.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const SelectDate: FunctionComponent = () => {
    const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const selected = useRef(null);
    const optionContainer = useRef(null);
    const optionList = useRef(null);

    // useRef使う前
    // const selected = document.querySelector(".selected");
    // const optionContainer = document.querySelector(".option-container");
    // const optionsList = document.querySelectorAll(".option");
    // selected.addEventListener("click", () => {
    //   optionContainer.classList.toggle("active");
    // });
    // optionsList.forEach((o) => {
    //   o.addEventListener("click", () => {
    //     selected.innerHTML = o.querySelector("label").innerHTML;
    //     optionContainer.classList.remove("active");
    //   });
    // });

    const Click = () => {
        console.log(selected.current);
        console.log(optionContainer.current);
    };
    return (
        <Container>
            <SelectBox>
                <div className="option-container" ref={optionContainer}>
                    {month.map((month, i) => (
                        <div className="option" key={i} ref={optionList}>
                            <input type="radio" className="radio" />
                            <label htmlFor="automobiles">
                                <p className="name">{month}月</p>
                            </label>
                        </div>
                    ))}
                </div>
                <div className="selected" ref={selected} onClick={Click}>
                    年
                </div>
            </SelectBox>
        </Container>
    );
};