import React from 'react'
import {
  Text,
  Radio,
  Popover,
  RadioGroup,
  PopoverBody,
  PopoverArrow,
  PopoverHeader,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton
} from '@chakra-ui/react'
import { HStack, ListItem, OrderedList, VStack } from '@chakra-ui/layout'

import { InfoIcon } from '@chakra-ui/icons'

import { useFetchPolicyStore } from '../../hooks/stores/useFetchPolicyStore'

/**
 * If a selector doesn't depend on scope,
  you can define it outside the render function to obtain a fixed reference without useCallback.
  @see https://github.com/pmndrs/zustand#memoizing-selectors
 */
const selectors = {
  fetchPolicy: state => state.fetchPolicy,
  setFetchPolicy: state => state.setFetchPolicy
}

/**
 * Fetch policies according to AC3 docs
 * @see https://www.apollographql.com/docs/react/data/queries/
 */
const fetchPolicies = [
  {
    value: 'cache-first',
    label: 'Cache First',
    steps: [
      'Executes the query and checks for the cached data.',
      "If the data is cached, it's going to be returned directly, avoiding the network requests.",
      "If there's no cache data, Apollo will make a network request in order to get the response data and save it on the cache."
    ]
  },
  {
    value: 'cache-and-network',
    label: 'Cache and Network',
    steps: [
      'Executes the query and checks for the cached data.',
      "If the data is cached, it's going to be returned directly.",
      'Even if the data is on the cache on not, Apollo will make a network request in order to get the up-to-date data.',
      'Update the cached data by merging the response data'
    ],
    description: "Recommended for data that is frequently updated. Example: Social media applications. It'll always return the up-to-date data."
  },
  {
    value: 'network-only',
    label: 'Network Only',
    steps: [
      'Executes the query and makes the network requests.',
      'The server responds with the data and the cache is updated.'
    ],
    description: 'This policy will never return out-to-date data because the network requests will always be executed, and the data will be saved on the cache store at the same time.'
  },
  {
    value: 'no-cache',
    label: 'No Cache',
    steps: [
      'Executes the query and makes the network requests.',
      'The server responds with the data and the cache is updated.'
    ],
    description: "Similar to network-only, but it doesn't save the data on the cache."
  }
]

function PolicyInfoPopover ({ description, steps }) {
  return (
    <Popover>
      <PopoverTrigger>
        <InfoIcon color='gray.gradient2' cursor='pointer' />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight='bold'>Info</PopoverHeader>
        <PopoverBody>
          {description && <Text>{description}</Text>}
          {steps && (
            <OrderedList>
              {steps.map((step) => <ListItem key={step}>{step}</ListItem>)}
            </OrderedList>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export function FetchPolicySelector () {
  const fetchPolicy = useFetchPolicyStore(selectors.fetchPolicy)
  const setFetchPolicy = useFetchPolicyStore(selectors.setFetchPolicy)

  return (
    <RadioGroup
      width='100%'
      value={fetchPolicy}
      onChange={setFetchPolicy}
    >
      <VStack
        color='gray.700'
        width='100%'
        spacing='1.5'
        align='flex-start'
      >
        <Text
          variant='with-gray-gradient'
          marginTop='2'
          fontWeight='medium'
        >
          Select a fetch policy:
        </Text>

        {fetchPolicies.map(({
          value,
          label,
          steps,
          description
        }) => (
          <HStack key={value}>
            <Radio value={value}>
              {label}
            </Radio>
            <PolicyInfoPopover
              steps={steps}
              description={description}
            />
          </HStack>
        ))}
      </VStack>
    </RadioGroup>
  )
}
