import React from "react";
import styled from "styled-components";
import { HeaderItemData } from "../data/HeaderItemData";
import { HeaderText } from "./styles/TextStyles";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderItemWrapper>
        {HeaderItemData.map((item, index) => (
          <a href={item.link}>
            <HeaderItem>{item.title}</HeaderItem>
          </a>
        ))}
        <HeaderItem></HeaderItem>
      </HeaderItemWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 16px 0;
  z-index: 100;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  backdrop-filter: blur(20px);
  /* box-shadow: inset 0px 0px 10px 10px #fff; */

  & .HeaderScrolled {
    background: rgba(32, 32, 32, 0.5);
    padding: 24px 0;
    backdrop-filter: blur(20px);
  }
`;

const HeaderItemWrapper = styled.div`
  max-width: 920px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 600px 1fr 1fr;
  /* justify-items: center; */
  align-items: center;
  padding: 0 32px;
  @media (max-width: 1140px) {
    grid-template-columns: 4fr 1fr 1fr;
  }
  @media (max-width: 720px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

const HeaderItem = styled(HeaderText)`
  grid-area: HeaderItem;
  padding: 8px;
  transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  :hover {
    color: rgba(32, 32, 32, 0.5);
  }
  @media (max-width: 720px) {
    font-size: 14px;
  }
`;

