import React from 'react';
import styled from '@emotion/styled';

function Input({ ...props }) {

  return (
    <Wrapper>
      <InputText {...props}></InputText>
    </Wrapper>
  )
}

export default Input;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InputText = styled.input`
  box-sizing: border-box;
  width: 300px;
  height: 30px;
  outline: none;
  border-radius: 4px;
  border: 1px solid #F2F6FF;
  margin-bottom: 5px;
  padding: 11px 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  display: flex; 
  justify-content: center;
  flex-direction: column;
`