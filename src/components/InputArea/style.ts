import styled from 'styled-components';

export const Form = styled.form`
  background-color: #FFF;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  align-items: end;

`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0px 10px;
`;

export const InputTitle = styled.h3`
  font-size: 17px;
`;

export const Input = styled.input`
  padding: 7px;
  border-radius: 7px;
  border: 1px solid #AED7E5;
`;

export const Select = styled.select`
  padding: 7px;
  border-radius: 7px;
  border: 1px solid #AED7E5;
`;

export const Button = styled.button`
  flex: 1;
  padding: 7px 0px;
  background-color: #AED7E5;
  border: 1px solid #AED7E5;
  border-radius: 7px;

  &:hover {
    background-color: blue;
    color: white;
    cursor: pointer;
}
`;









