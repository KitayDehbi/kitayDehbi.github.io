import {
  Button,
  Modal,
  ModalBody,
  
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

export const FuitDetailsModel = (isOpen, onCloseHandle) => {
  return <Modal isCentered isOpen={isOpen} onClose={onCloseHandle}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    
    <ModalBody>
     <Text>TETS</Text>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='red' mr={3} onClick={onCloseHandle}>
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal> 
};
