import React from 'react'
import { Image, Skeleton, Editable, EditableInput, EditablePreview } from '@chakra-ui/react'
import { HStack, Stack, Flex, Text } from '@chakra-ui/layout'
import { DeleteIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/button'
import { Helmet } from 'react-helmet'
import { Link, useHistory, useParams } from 'react-router-dom'

import { PageLayout } from '../../components/PageLayout'
import { useGetWizardQuery } from '../../hooks/graphql/queries/useGetWizardQuery'
import { useDeleteWizardMutation } from '../../hooks/graphql/mutations/useDeleteWizardMutation'
import { WizardBadge } from '../../components/WizardBadge'
import { useFetchPolicyStore } from '../../hooks/stores/useFetchPolicyStore'
import { CommentsTable } from '../../components/CommentsTable'
import { HOME_PAGE_PATH } from '../../constants/routesPaths'
import { getIsQueryLoaded } from '../../queryUtils'
import { useUpdateWizardNameOnCache } from '../../hooks/graphql/cacheFragments/useUpdateWizardNameOnCache'

const textPlaceholderForSkeletons = 'Placeholder'

function WizardDetailsHeader ({ isLoaded, wizard }) {
  const history = useHistory()

  const [deleteWizard] = useDeleteWizardMutation({
    onCompleted: () => history.push(HOME_PAGE_PATH)
  })
  const updateWizardNameOnCache = useUpdateWizardNameOnCache()

  const handleDeleteWizard = (id) => () => deleteWizard({ variables: { id } })
  const handleUpdateWizardOnCache = (name) => updateWizardNameOnCache({ name, wizard })

  const {
    id,
    name,
    house: { name: houseName } = {}
  } = wizard ?? {}

  return (
    <Flex width='100%' align='center'>
      <Stack
        width='100%'
        align='center'
        spacing={['0', '2']}
        justify='flex-start'
        direction={['column', 'row']}
      >
        <Skeleton isLoaded={isLoaded}>
          <Editable
            bgClip='text'
            onChange={handleUpdateWizardOnCache}
            bgGradient='linear(to-l, gray.gradient3, gray.gradient2)'
            defaultValue={name ?? textPlaceholderForSkeletons}
          >
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Skeleton>

        <Skeleton isLoaded={isLoaded}>
          <WizardBadge houseName={houseName ?? textPlaceholderForSkeletons} />
        </Skeleton>
      </Stack>

      <Stack
        align={['flex-end', 'center']}
        spacing={['0', '2']}
        direction={['column', 'row']}
      >
        <Button
          size='sm'
          variant='unstyled'
          onClick={handleDeleteWizard(id)}
        >
          <HStack
            color='gray.gradient2'
            spacing='0'
          >
            <DeleteIcon marginRight='1' />
            <Text>Delete</Text>
          </HStack>
        </Button>

        <Link
          to='/'
          marginRight='auto'
        >
          <HStack
            color='gray.gradient2'
            spacing='0'
          >
            <ArrowBackIcon />
            <Text>Back</Text>
          </HStack>
        </Link>
      </Stack>
    </Flex>
  )
}

export function WizardDetails () {
  const { id } = useParams()

  const fetchPolicy = useFetchPolicyStore(state => state.fetchPolicy)
  const { data, loading, error } = useGetWizardQuery({
    variables: {
      id: Number(id)
    },
    fetchPolicy
  })

  const {
    name: wizardName,
    house: { name: houseName } = {},
    image_url: imageUrl,
    comments
  } = data?.wizard ?? {}

  const isLoaded = getIsQueryLoaded({
    data,
    error,
    loading,
    queryKey: 'wizard'
  })

  return (
    <PageLayout>
      <Helmet>
        <title>Apollo Wizard {wizardName ? `- ${wizardName}` : ''}</title>
      </Helmet>

      <WizardDetailsHeader
        wizard={data?.wizard}
        isLoaded={isLoaded}
      />

      <Image
        src={imageUrl}
        alt={houseName}
        height={['200', null, '40%']}
        width={['100%', '40%', '40%']}
        marginTop='2'
        objectFit='cover'
        marginRight='auto'
        fallback={(
          <Skeleton
            height={['200', null, '40%']}
            width={['100%', '40%', '40%']}
            marginTop='2'
            marginRight='auto'
          />
        )}
        borderRadius='5'
        objectPosition='top'
      />

      <CommentsTable comments={comments} isLoaded={isLoaded} />
    </PageLayout>
  )
}
