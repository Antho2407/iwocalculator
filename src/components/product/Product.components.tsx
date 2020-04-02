import styled from "styled-components";

export const ProductRoot = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  background-color: #ff857e;
  color: #ffffff;
  border-radius: 5px;
  box-shadow: 4px 4px 10px 2px #b9b9b9;
`;

export const Label = styled.h3`
  margin-top: 0;
`;

export const Table = styled.table`
  border: 1px solid #ffffff;
  border-radius: 5px;
  th,
  td {
    padding: 5px;
  }
`;
