import * as Yup from 'yup'

export const createCommentSchema = Yup.object({
  text: (
    Yup
      .string()
      .required('You must provide a text for your comment')
  )
})
