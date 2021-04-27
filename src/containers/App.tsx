import { useState } from 'react';
import styled from 'styled-components';
import StoreContext from '../context/store';
import Convertor from './Convertor';
import Table from './Table';

const Wrapper = styled.div`
  padding: 48px;
  width: 1200px;
  margin: 0 auto;
  @media(max-width: 1200px) {
    width: 768px;
  }
`;

const App = () => {
  const [jsonData, setJsonData] = useState<{[prop: string]: string}[]>([]);
  const [csvData, setCsvData] = useState('');

  return (
    <StoreContext.Provider value={{
      jsonData,
      setJsonData,
      csvData,
      setCsvData
    }}>
      <Wrapper>
        <Convertor />
        <Table />
      </Wrapper>
    </StoreContext.Provider>
  );
}

export default App;
