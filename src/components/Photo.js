import React from "react";
import styled, { keyframes } from "styled-components";
import Content from "./Content";

const kf = keyframes`
  100% {
    transform: scale(1)
  }
`;

const StyledPhoto = styled.div`
  img {
    width: ${(pr) => pr.theme.width};
    transform: scale(0.1);
    animation: ${kf} 1.5s forwards;
  }
`;

export default function Photo(props) {
  const { image } = props;

  if (!image) return <h4>Loading...</h4>;

  return (
    <div className="Photo">
      <StyledPhoto>
        <img src={image.hdurl} alt="nasa"></img>
      </StyledPhoto>
      <Content content={image} />
    </div>
  );
}
