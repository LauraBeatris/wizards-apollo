import React from 'react'
import { useDisclosure } from '@chakra-ui/hooks'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/button'
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton
} from '@chakra-ui/react'

import { CreateWizardForm } from './Form'

export function CreateWizard () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        icon={<PlusSquareIcon />}
        size='sm'
        onClick={onOpen}
        title='Add wizard'
        backgroundColor='gray.gradient2'
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Wizard</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CreateWizardForm onCompleted={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
