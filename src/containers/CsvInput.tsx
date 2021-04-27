import { useContext } from 'react';
import styled from 'styled-components';
import InputField from '../components/InputField';
import Title from '../components/Title';
import StoreContext from '../context/store';

const Wrapper = styled.div`
  flex: 1 0 auto;
`;
const CsvInput = () => {
  const { setCsvData } = useContext(StoreContext);
  const updateCsv: React.ChangeEventHandler<HTMLTextAreaElement> | undefined = (evt) => {
    setCsvData(evt.target.value);
  };
  
  return (
    <Wrapper>
        <Title>CSV Data</Title>
        <InputField onChange={updateCsv} />
    </Wrapper>
  );
}

export default CsvInput;
