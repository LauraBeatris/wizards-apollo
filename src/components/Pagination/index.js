import React from 'react'
import {
  Pagination as AjnaPagination,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer,
  PaginationSeparator
} from '@ajna/pagination'
import { Text } from '@chakra-ui/layout'

const outerLimit = 2
const innerLimit = 2

export function Pagination ({
  total,
  limit,
  pageSize,
  onPageChange
}) {
  const {
    pages,
    pagesCount,
    currentPage,
    setCurrentPage,
    isDisabled
  } = usePagination({
    total,
    limits: {
      outer: outerLimit,
      inner: innerLimit
    },
    initialState: {
      pageSize,
      isDisabled: false,
      currentPage: 1
    }
  })

  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage)

    const offset = (limit * nextPage) - limit
    onPageChange({ offset })
  }

  return (
    <AjnaPagination
      pagesCount={pagesCount}
      currentPage={currentPage}
      isDisabled={isDisabled}
      onPageChange={handlePageChange}
    >
      <PaginationContainer
        align='center'
        justify='space-between'
        p={4}
        w='full'
      >
        <PaginationPrevious
          _hover={{
            bg: 'yellow.400'
          }}
          bg='yellow.300'
        >
          <Text>Previous</Text>
        </PaginationPrevious>
        <PaginationPageGroup
          isInline
          align='center'
          separator={
            <PaginationSeparator
              bg='blue.300'
              fontSize='sm'
              w={7}
              jumpSize={11}
            />
              }
        >
          {pages.map((page) => (
            <PaginationPage
              w={7}
              bg='red.300'
              key={`pagination_page_${page}`}
              page={page}
              fontSize='sm'
              _hover={{
                bg: 'green.300'
              }}
              _current={{
                bg: 'green.300',
                fontSize: 'sm',
                w: 7
              }}
            />
          ))}
        </PaginationPageGroup>
        <PaginationNext
          _hover={{
            bg: 'yellow.400'
          }}
          bg='yellow.300'
        >
          <Text>Next</Text>
        </PaginationNext>
      </PaginationContainer>
    </AjnaPagination>
  )
};