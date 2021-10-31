import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Input } from '@chakra-ui/input'

export const FormInput = styled(Input)`
  ${({ theme }) => css`
    &:hover {
      border-color: ${theme.colors.gray[300]};
    }
    &::placeholder {
      color: ${theme.colors.gray[500]};
    }
  `}
`
