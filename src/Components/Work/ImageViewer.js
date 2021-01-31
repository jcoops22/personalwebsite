import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../Shared/Loader";

const ImageViewer = ({ url, show }) => {
  const [loading, setLoading] = useState(true);
  const [pic, setPic] = useState(url);

  useEffect(() => {
    preloadImg();
  }, [url]);

  // preloading function for images
  const preloadImg = () => {
    setLoading(true);
    let preload = document.createElement("img");
    preload.src = url;
    preload.addEventListener("load", () => {
      setLoading(false);
      preload = null;
    });
  };

  return (
    <ImageWrapper
      max={show ? "990px" : "650px"}
      height={show ? "520px" : "266px"}
    >
      {loading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <Img src={url} alt="preview" loading="lazy" />
      )}
    </ImageWrapper>
  );
};

export default ImageViewer;

// styles
const ImageWrapper = styled.div`
  position: relative;
  width: ${(props) => props.max};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  background-color: #222831;
  /* border: 1px solid orange; */
`;
const Img = styled.img`
  width: 100%;
  opacity: 0;
  animation: fadeImagePreviewIn 0.7s linear forwards;
  /* border: 1px solid orange; */

  @keyframes fadeImagePreviewIn {
    to {
      opacity: 1;
    }
  }
`;
const LoaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
