import styled from "styled-components";

interface IBookItemProps {
  cover: string;
  title: string;
  author: string[];
  available: boolean;
}

export const BookItem = styled.div`
  background-image: url(${(props: IBookItemProps) => props.cover});
  width: 200px;
  height: 300px;
  background-size: cover;
  background-repeat: round;
  margin: 15px;
`;
