import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 726px;
  height: 408px;
  margin-bottom: 20px;
  border-radius: 20px;
`;

export const StyledSwiperMini = styled(Swiper)`
  width: 726px;
  height: 128px;
`;

export const StyleSlide = styled.img`
  border-radius: 20px;
  width: 726px;
  height: auto;
`;

export const StyleSlideMini = styled.div`
  width: 167px;
  height: 128px;
  background-image: url("${(props) => props.src}");
  position: relative;
  filter: brightness(${(props) => (props.$active ? 100 : 50)}%);
  background-size: cover;
  border-radius: 12px;
  cursor: pointer;
`;

export const SliderWrapper = styled.div`
  margin: 0 auto;
  width: 726px;
  position: relative;
`;
