import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Modal,
  ModalBackdrop,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ButtonText,
  ModalBody,
  Box,
  Text,
  HStack,
} from "@gluestack-ui/themed";
import React from "react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }: any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalBackdrop />
      <ModalContent width={330}>
        <ModalHeader></ModalHeader>
        <ModalBody>
          <Box display="flex" alignItems="center">
            <FontAwesomeIcon
              size="xl"
              icon={faRightFromBracket}
              color="$red700"
            />
            <Text
              mt={10}
              fontFamily="arial"
              fontSize="$lg"
              fontWeight="$bold"
              color="$black"
            >
              Are you sure you want to logout ?
            </Text>
            <HStack marginTop={20}>
              <Button
                variant="outline"
                size="sm"
                action="secondary"
                mr="$3"
                onPress={onClose}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                size="sm"
                action="positive"
                borderWidth="$0"
                onPress={onConfirm}
                bgColor="$black"
                // bgColor="$red700"
              >
                <ButtonText>Yes, Logout</ButtonText>
              </Button>
            </HStack>
          </Box>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModal;
