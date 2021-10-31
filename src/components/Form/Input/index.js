import { forwardRef } from 'react'
import {
  FormLabel,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/form-control'

import { FormInput } from './styles'

const Input = ({
  name,
  label,
  placeholder,
  error,
  ...rest
}, ref) => {
  return (
    <FormControl my={2} isInvalid={!!error}>
      <FormLabel color='gray.900' htmlFor={name}>
        {label}
      </FormLabel>

      <FormInput
        {...rest}
        id={name}
        ref={ref}
        name={name}
        color='gray.600'
        boxShadow='sm'
        borderColor='gray.300'
        placeholder={placeholder}
        focusBorderColor='gray.800'
      />

      <FormErrorMessage>
        {error}
      </FormErrorMessage>
    </FormControl>
  )
}

export default forwardRef(Input)
