import styled from 'styled-components';

export const StyledCodeContainer = styled('div')`
  width: 90vw;
  min-height: 100%;
  max-height: 70vh;
  overflow: hidden;

  .tags {
    display: flex;
    list-style: none;
    gap: 0.15rem;
    width: 100%;
    overflow: auto;
    margin: 0;
    li {
      padding: 0.25rem;
      border-radius: 0.25rem 0.25rem 0 0;
      border-width: 1px 1px 0 1px;
      border-color: #777;
      border-style: solid;
    }
  }
  .tags .selected {
    background: #444;
  }

  .pure_code_container {
    overflow: scroll;
    min-height: 100%;
    max-height: 70vh;
  }
`;
