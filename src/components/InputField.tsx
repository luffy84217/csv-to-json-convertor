import styled from "styled-components";

const InputField = styled.textarea`
  border: 1px solid #D9D9D9;
  height: 150px;
  width: 100%;
  font-size: 1.2rem;
  color: #000;
  opacity: 0.65;
  font-weight: 400;
  &:focus {
    border: 1px solid #9AC13B;
  }
`;

export default InputField;
