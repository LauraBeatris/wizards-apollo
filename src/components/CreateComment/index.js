import React from 'react'
import { useDisclosure } from '@chakra-ui/hooks'
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton
} from '@chakra-ui/react'

import { useParams } from 'react-router'

import { CreateCommentForm } from './Form'

export function CreateComment ({ children }) {
  const { id } = useParams()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {children(onOpen)}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateCommentForm
              wizardId={id}
              onCompleted={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
