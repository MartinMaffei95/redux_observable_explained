import styled from 'styled-components';
import { ExtraDataType } from '../models';

export const StyledTitle = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  --color1: rgba(84, 44, 134);
  --color2: rgba(215, 28, 140);

  h1 {
    font-size: 3rem;
    text-align: center;
    margin-block: 1rem;
    letter-spacing: 0.15rem;
    position: relative;
    // ## text colorcolor
    background-color: var(--color1);
    background-image: linear-gradient(
      -30deg,
      var(--color1),
      30%,
      var(--color2)
    );
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    @media (min-width: 600px) {
      font-size: 4rem;
    }
  }

  h1:after {
    background: none;
    content: attr(data-text);
    left: 0;
    position: absolute;
    text-shadow: 0.1rem 0.1rem 5px rgba(255, 255, 255, 0.4);
    top: 0;
    z-index: -1;
  }
  span {
    text-align: center;
    font-size: 0.8rem;
    color: #686968;
    letter-spacing: 0.025rem;
  }
`;

export const StyledSection = styled('section')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-block: 1rem;
  padding: 1rem;
  height: 100%;

  h1 {
    margin-block: 1rem;
  }
  h2 {
    text-align: center;
    margin-block: 1rem;
  }
  h3 {
    margin-block: 1rem;
  }
  .displayed_data {
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
      flex-direction: row;

      .displayed_data-image {
        width: 100%;

        .isLoading {
          position: relative;
          .isLoading-image {
            filter: blur(10px);
          }
        }
      }
    }
  }
  .displayed_data-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .displayed_data-buttons {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  .displayed_data-image {
    width: 100vw;

    .isLoading {
      position: relative;
      .isLoading-image {
        filter: blur(10px);
      }
    }
  }

  .linksContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding-block: 0.5rem;
  }

  .linksContainer > div {
    flex: 0 0 80%;

    @media (min-width: 600px) {
      flex: 0 0 30%;
    }
  }

  .code {
    font-family: consolas;
    color: #00ff40;
    background: #595959;
    border-radius: 0.25rem;
    padding: 0.15rem;
  }

  ul {
    margin-inline: 1.5rem;
  }

  .syntax_container {
    margin-block: 1rem;
  }
`;

export const SectionImage = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 100%;
  background-color: color-mix(in srgb, var(--bg-color), #fff 8%);
  overflow: hidden;
  position: relative;

  .card-image_container {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .card-data_container {
    padding: 0.5rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 30%;
    background: linear-gradient(to top, #000, 90%, rgba(0, 0, 0, 0));
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const StyledExtraData = styled('div')<ExtraDataType>`
  background: none;
  max-width: 90vw;
  min-width: 90vw;
  border: solid 1px red;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;

  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin-block: 1rem;
  ${(props) =>
    props.type === 'WARNING'
      ? `
          background: rgba(240, 232, 81, 0.25);
          border-color: #9e9c3a;
          color: rgba(240, 232, 81, 1);
      `
      : props.type === 'INFO'
      ? `
          background: rgba(100, 160, 204, 1);
          border-color: rgba(0, 114, 254, 1);
          color: rgba(255, 255, 255, 1);
      `
      : props.type === 'ERROR'
      ? `
          background: rgba(194, 237, 254, 0.25);
          border-color: #9e9c3a;
          color: rgba(240, 232, 81, 1);
      `
      : ''}

  .icon_container {
    .icon {
      font-size: 2rem;
    }
  }
`;
