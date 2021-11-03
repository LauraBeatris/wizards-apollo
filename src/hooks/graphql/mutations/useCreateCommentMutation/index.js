import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'

const createCommentMutation = gql`
  mutation CreateComment ($commentData: comments_insert_input!) {
    comment: insert_comments_one(object: $commentData) {
      id 
      text
      wizard_id
    }
  }
`

const addCommentToWizardOnCache = ({ cache, comment }) => {
  cache.modify({
    id: cache.identify({ __typename: 'wizard', id: comment.wizard_id }),
    fields: {
      comments (existingComments = []) {
        const newCommentRef = cache.writeFragment({
          data: comment,
          fragment: gql`
            fragment NewComment on comments {
              id
              text
              wizard_id
            }
          `
        })

        return [...existingComments, newCommentRef]
      }
    }
  })
}

export function useCreateCommentMutation (mutationOptions) {
  return useMutation(createCommentMutation, {
    ...mutationOptions,
    update (cache, { data: { comment } }) {
      addCommentToWizardOnCache({ cache, comment })
    }
  })
}
