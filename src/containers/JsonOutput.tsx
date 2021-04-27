import { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import InputField from '../components/InputField';
import Title from '../components/Title';
import StoreContext from '../context/store';

const Wrapper = styled.div`
  flex: 1 0 auto;
`;
const JsonOutput = () => {
  const inputEl = useRef<HTMLTextAreaElement>(null!);
  const { jsonData } = useContext(StoreContext);

  useEffect(() => {
    inputEl.current.value = jsonData.length > 0 ? JSON.stringify(jsonData) : '';
  }, [jsonData])

  return (
    <Wrapper>
        <Title>JSON Data</Title>
        <InputField ref={inputEl} />
    </Wrapper>
  );
}

export default JsonOutput;
