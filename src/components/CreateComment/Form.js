import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Stack } from '@chakra-ui/layout'

import { Button } from '@chakra-ui/button'

import { useCreateCommentMutation } from '../../hooks/graphql/mutations/useCreateCommentMutation'
import { createCommentSchema } from '../../schemas/createComment'
import Input from '../Form/Input'

export function CreateCommentForm ({ onCompleted, wizardId }) {
  const [createComment] = useCreateCommentMutation({
    onCompleted
  })

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'all',
    resolver: yupResolver(createCommentSchema)
  })

  const handleCreateComment = handleSubmit((data) => {
    const { text } = data

    createComment({
      variables: {
        commentData: { text, wizard_id: Number(wizardId) }
      }
    })
  })

  return (
    <form onSubmit={handleCreateComment}>
      <Stack>
        <Input
          {...register('text')}
          name='text'
          label='Text*'
          error={errors?.name?.message}
          placeholder='Gryffindor is the best house'
        />
      </Stack>

      <Button
        type='submit'
        width='100%'
        marginY='4'
        variant='with-blue-gradient'
        colorScheme='blue'
      >
        Submit
      </Button>
    </form>
  )
}
