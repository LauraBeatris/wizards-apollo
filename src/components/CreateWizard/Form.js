import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Stack } from '@chakra-ui/layout'

import { Button } from '@chakra-ui/button'

import { useCreateWizardMutation } from '../../hooks/graphql/mutations/useCreateWizardMutation'
import { createWizardSchema } from '../../schemas/createWizard'
import Input from '../Form/Input'
import Select from '../Form/Select'

const houseOptions = [
  {
    value: 1,
    label: 'Gryffindor'
  }, {
    value: 2,
    label: 'Ravenclaw'
  },
  {
    value: 3,
    label: 'Slytherin'
  },
  {
    value: 4,
    label: 'Hufflepuff'
  }
]

export function CreateWizardForm ({ onCompleted }) {
  const [createWizard] = useCreateWizardMutation({
    onCompleted
  })

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    mode: 'all',
    resolver: yupResolver(createWizardSchema)
  })

  const handleCreateWizard = handleSubmit((data) => {
    // eslint-disable-next-line camelcase
    const { name, image_url, house_id } = data

    createWizard({
      variables: {
        wizardData: { name, house_id, image_url }
      }
    })
  })

  return (
    <form onSubmit={handleCreateWizard}>
      <Stack>
        <Input
          {...register('name')}
          name='name'
          label='Name*'
          error={errors?.name?.message}
          placeholder='Harry Potter'
        />
        <Input
          {...register('image_url')}
          name='image_url'
          label='Image URL'
          error={errors?.image_url?.message}
          placeholder='www.hogwarts-instagram.com/picture.png'
        />
        <Select
          {...register('house_id')}
          name='house_id'
          label='Select a house*'
          options={houseOptions}
          error={errors?.house_id?.message}
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
