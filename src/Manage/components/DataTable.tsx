import styled from "styled-components";

interface IDataTableProps {
  disabled: boolean;
}

export const DataTable = styled.div<IDataTableProps>`
  display: flex;
  flex-wrap: wrap;
  min-height: 330px;
`;
