import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background: rgba(252, 212, 59, 0.5);
  box-shadow: inset 0px 0px 10px #d67f02;
  backdrop-filter: blur(100px);
  border-radius: 20px;
  height: 55px;
  padding: 8px 12px;
  font-size: 1.1rem;
`;

export const Input = styled.input`
  flex: 1 1 auto;
  background: transparent;
  border: none;
  color: #505050;
  outline: 0;
  &:hover {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #fb990c;
  }
  :-ms-input-placeholder {
    color: #fb990c;
  }
`;
