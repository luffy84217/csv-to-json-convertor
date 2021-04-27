import { useContext } from 'react';
import styled from 'styled-components';
import StoreContext from '../context/store';

const Button = styled.button`
  padding: 16px;
  border: 1px dashed #D9D9D9;
  height: 50px;
  margin: 0 24px;
`;
const ConvertButton = () => {
  const { csvData, setJsonData } = useContext(StoreContext);
  const convert: React.MouseEventHandler<HTMLButtonElement> | undefined = () => {
    if (csvData) {
      const rawData = [...csvData.split(/\n/)];
      const props = rawData[0].split(',');
      const data = rawData.slice(1).map((val) => val.split(','));

      setJsonData(data.reduce((acc, val) => {
        const data: {[prop: string]: string} = {};

        for (let i = 0; i < val.length; i++) {
          data[props[i]] = val[i];
        }

        acc.push(data);

        return acc;
      }, [] as {[prop: string]: string}[]));
    }
  };

  return (
    <Button onClick={convert}>
        Convert
    </Button>
  );
}

export default ConvertButton;
