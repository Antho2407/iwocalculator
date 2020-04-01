import styled from "styled-components";

export const ProductRoot = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  background-color: #fb534a;
  color: #ffffff;
  border-radius: 5px;
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
