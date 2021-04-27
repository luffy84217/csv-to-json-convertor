import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import NormalText from '../components/NormalText';
import TableTitle from '../components/TableTitle';
import Title from '../components/Title';
import StoreContext from '../context/store';

const Thead = styled.thead`
  background-color: #F5F9EB;
`;
const Table = styled.table`
  border-collapse: collapse; 
`;
const Tr = styled.tr`
  border-top: 1px solid #E1ECC4;
  border-bottom: 1px solid #E1ECC4;
`;
const TableRender = () => {
  const { jsonData } = useContext(StoreContext);
  let header;
  let body;

  if (jsonData.length > 0) {
    header = Object.keys(jsonData[0]).map(val => <th key={val}><TableTitle>{val}</TableTitle></th>);
    body = jsonData.map((value, i) =>
      <Tr key={i}>{Object.values(value).map((val, j) =>
        <td key={`${i}-${j}`}><NormalText>{val}</NormalText></td>
      )}
    </Tr>);
  }

  return (jsonData.length > 0 ?
    <>
      <Title>Table</Title>
      <Table>
        <Thead>
            <tr>
                {header}
            </tr>
        </Thead>
        <tbody>
            {body}
        </tbody>
      </Table>
    </> : null
  );
}

export default TableRender;
