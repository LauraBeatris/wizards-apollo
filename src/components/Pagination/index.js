import React from 'react'
import {
  Pagination as AjnaPagination,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer
} from '@ajna/pagination'
import { Text } from '@chakra-ui/layout'

const outerLimit = 2
const innerLimit = 2
const initialPage = 1

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
      currentPage: initialPage
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
      <PaginationContainer>
        <PaginationPrevious
          marginRight='1'
          backgroundColor='gray.gradient2'
        >
          <Text>Previous</Text>
        </PaginationPrevious>
        <PaginationPageGroup>
          {pages.map((page) => (
            <PaginationPage
              width='8'
              bg='gray.gradient2'
              key={`pagination_page_${page}`}
              page={page}
              fontSize='sm'
              _current={{
                fontSize: 'sm',
                backgroundColor: 'yellow.300'
              }}
              _hover={{
                backgroundColor: 'yellow.100'
              }}
            />
          ))}
        </PaginationPageGroup>
        <PaginationNext
          marginLeft='1'
          backgroundColor='gray.gradient2'
        >
          <Text>Next</Text>
        </PaginationNext>
      </PaginationContainer>
    </AjnaPagination>
  )
};
