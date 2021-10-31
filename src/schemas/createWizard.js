import * as Yup from 'yup'

export const createWizardSchema = Yup.object({
  name: (
    Yup
      .string()
      .required('You must provide a wizard name')
  ),
  image_url: (
    Yup
      .string()
      .url()
      .required('You must provide a image URL')
  ),
  house_id: (
    Yup
      .number()
      .required('You must select a house')
  )
})
