import styled from "styled-components";

interface IBookItemProps {
  cover: string;
  title: string;
  author: string[];
  available: boolean;
}

export const BookItem = styled.div`
  background-image: url(${(props: IBookItemProps) => props.cover});
  height: 300px;
  width: 200px;
  background-size: cover;
  background-repeat: round;
  margin: 15px;
`;
