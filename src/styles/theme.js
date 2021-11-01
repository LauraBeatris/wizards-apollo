import { extendTheme } from '@chakra-ui/react'

const variants = {
  'with-gray-gradient': {
    bgClip: 'text',
    bgGradient: 'linear(to-l, gray.gradient3, gray.gradient2)'
  },
  'with-blue-gradient': {
    color: 'white',
    bgGradient: 'linear(to-l, blue.gradient1, blue.gradient2)'
  }
}

export const theme = extendTheme({
  colors: {
    gray: {
      gradient1: '#B6C0E7',
      gradient2: '#D8DCEB',
      gradient3: '#D7DAED'
    },
    blue: {
      gradient1: '#101993',
      gradient2: '#3163D2'
    }
  },
  components: {
    Text: {
      variants
    },
    Link: {
      variants
    },
    Button: {
      variants
    }
  }
})
