import React from 'react'
import styled from '@emotion/styled';

function Button({children, ...props}) {
  return (
    <ButtonStyled {...props}>{children}</ButtonStyled>
  )
}

export default Button;

const ButtonStyled = styled.button`
  width: 300px;
  height: 30px;
  border-radius: 8px;
  background-color: #257FFF;
  color: #fff;
  &:disabled {
    background-color: #cecece;
  }
`