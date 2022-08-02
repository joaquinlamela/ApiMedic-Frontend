import { css } from "styled-components";

export const BASE = {
  outerMargin: 2,
  gridSize: 8,
  gutterWidth: 6,
  mediaQuery: "only screen",
  container: {
    sm: 360,
    tb: 600,
    md: 768,
    lg: 1024,
    xl: 1366,
    xxl: 1920,
  },
  breakpoints: {
    xs: 0,
    sm: 360,
    tb: 600, // 7-inch tablet
    md: 768,
    lg: 1024, // 9-inch tablet
    xl: 1366,
    xxl: 1920,
  },
};

export const MEDIA = Object.keys(BASE.breakpoints).reduce(
  (iterable, breakpoint) => {
    const media = iterable;
    const breakpointWidth = BASE.breakpoints[breakpoint];

    media[breakpoint] = (...args) => css`
      @media ${BASE.mediaQuery} and (min-width: ${breakpointWidth}px) {
        ${css(...args)}
      }
    `;

    return media;
  },
  {}
);

export const SCREEN_SIZES = ["xs", "sm", "md", "lg", "xl", "xxl"];
