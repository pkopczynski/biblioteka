import styled from "styled-components";

interface IBookItemProps {
  cover: string;
  disabled: boolean;
}

export const BookItem = styled.div`
  background-image: url(${(props: IBookItemProps) => props.cover});
  height: 300px;
  width: 200px;
  background-size: cover;
  background-repeat: round;
  margin: 15px;
  ${({disabled}) => disabled ? 'filter: grayscale(100%);' : null}
  transition: transform 0.2s, box-shadow 0.2s;
    &:hover {
      transform: scale(1.03);
      box-shadow: 0px 10px 25px -5px;
    }
    &:active {
      transform: scale(.98);
      box-shadow: 0px 0px 0px;
    }
`;