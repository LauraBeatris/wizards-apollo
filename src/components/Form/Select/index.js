import { forwardRef } from 'react'
import {
  FormLabel,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/form-control'
import { Select as ChakraSelect } from '@chakra-ui/react'

const Select = ({
  name,
  label,
  error,
  options,
  placeholder,
  ...rest
}, ref) => {
  return (
    <FormControl my={2} isInvalid={!!error}>
      <FormLabel color='gray.900' htmlFor={name}>
        {label}
      </FormLabel>

      <ChakraSelect ref={ref} placeholder={placeholder} {...rest}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </ChakraSelect>

      <FormErrorMessage>
        {error}
      </FormErrorMessage>
    </FormControl>
  )
}

export default forwardRef(Select)
