import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button } from "./Button";

export function Modal({
  label,
  content,
  isOpen,
  onClose,
}: {
  label: string;
  content: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{label}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{content}</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              閉じる
            </Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
}
