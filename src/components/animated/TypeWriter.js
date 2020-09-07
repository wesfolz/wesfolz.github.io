import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/macro";

const WriterText = styled.div`
  color: ${(props) => props.color || "inherit"};
  overflow: hidden;
  margin: 0;
`;

const WriterCharacter = styled.code`
  opacity: ${(props) => props.opacity || 0};
  font-family: "Source Code Pro";
`;

export default function TypeWriter({
  text,
  start,
  delay,
  onComplete,
  color,
  className,
}) {
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const timer = useRef(null);

  const updateCharacterIndex = (interval) => {
    setVisibleIndex((prevIndex) => {
      if (prevIndex >= text.length) {
        if (onComplete) {
          onComplete();
        }
        return prevIndex;
      } else {
        timer.current = setTimeout(
          () => updateCharacterIndex(interval),
          interval
        );
        return prevIndex + 1;
      }
    });
  };

  useEffect(() => {
    setVisibleIndex(-1);
    if (start && text) {
      const interval = delay && text.length ? delay / text.length : 50;
      timer.current = setTimeout(
        () => updateCharacterIndex(interval),
        interval
      );
    }
    return () => timer.current && clearTimeout(timer.current);
  }, [text, start]);

  const renderedText = () => {
    if (!text) {
      return null;
    }
    return [...text].map((char, i) => {
      return (
        <WriterCharacter key={i} opacity={visibleIndex >= i ? 1 : 0}>
          {char}
        </WriterCharacter>
      );
    });
  };

  return (
    <WriterText className={className} color={color}>
      {renderedText()}
    </WriterText>
  );
}
