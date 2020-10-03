import React from "react";
import styled from "styled-components/macro";
import FadeScroll from "components/animated/FadeScroll";

//div -> position: absolute, width: 100%, opacity: 0.1, p -> background-color: none, width: 100%
const ContentGrid = styled.ul`
  list-style-type: none;
  padding: 0px;
  li {
    margin: 40px 0;
    &:first-child {
      margin: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ContentRow = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 600px;
  h4 {
    margin: 0 0 16px;
  }
`;

const RowContents = styled.section`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  /* background-color: #eef4fa; */
  border-radius: 4px;
  @media (max-width: 900px) {
    flex-direction: column;
  }

  .image {
    width: 55%;
  }

  .text {
    width: 45%;
    z-index: 1;
  }

  .text,
  .image {
    min-height: 300px;
    @media (max-width: 900px) {
      width: 100%;
    }
  }

  .image > *,
  .text > * {
    padding: 0px;
    margin: 0;
    display: flex;
    align-items: center;
    width: 100%;
    /* width: calc(50% + 100px); */
  }
  .image > * {
    min-height: 400px;
    height: 100%;
    position: relative;
    border-radius: 4px;
    left: ${(props) => (props.reverse ? "-50px" : "0px")};
    width: calc(100% + 50px);
    @media (max-width: 900px) {
      width: 100%;
      left: 0;
    }
  }
  .text > * {
    min-height: 300px;
    padding: 16px 40px;
    border-radius: 4px;
    box-sizing: border-box;
    position: absolute;
    box-shadow: ${(props) => (props.reverse ? "-8px" : "8px")} 8px 8px
        rgba(0, 0, 0, 0.2),
      0 0 8px rgba(0, 0, 0, 0.2);
    top: 150px;
    left: ${(props) => (props.reverse ? "0px" : "-50px")};
    width: calc(100% + 50px);
    @media (max-width: 900px) {
      position: relative;
      width: 90%;
      top: -100px;
      left: 0;
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 0, 0, 0.25);
    }
  }
`;

const infoRows = (rows) => {
  return rows.map((row, index) => (
    <ContentRow key={row.title}>
      <h3>{row.title}</h3>
      <RowContents reverse={index % 2 === 1}>
        <div className="image">{row.image}</div>
        <FadeScroll className="text" delay={100}>
          {row.text}
        </FadeScroll>
      </RowContents>
    </ContentRow>
  ));
};

export default function InfoGrid({ rows }) {
  return <ContentGrid>{infoRows(rows)}</ContentGrid>;
}
