import React from 'react';
import styled from 'styled-components';
import ConvertButton from './ConvertButton';
import CsvInput from './CsvInput';
import JsonOutput from './JsonOutput';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 48px;
`;
const Convertor = () => {
  return (
    <Wrapper>
      <CsvInput />
      <ConvertButton />
      <JsonOutput />
    </Wrapper>
  );
}

export default Convertor;
