import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
  Box,
  InputField,
  Input,
  VStack,
  Textarea,
  ModalFooter,
  TextareaInput,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import React from "react";

const ComposeModal = ({ isOpen, onClose }: any) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Text color="$black" fontWeight="600" fontSize={"$lg"}>
              Create Blog
            </Text>
          </ModalHeader>
          <ModalBody height={400}>
            <Box>
              <VStack marginBottom={15}>
                <Input>
                  <InputField placeholder="Title" />
                </Input>
              </VStack>
              <VStack marginBottom={15}>
                <Textarea
                  size="md"
                  isReadOnly={false}
                  isInvalid={false}
                  isDisabled={false}
                  height={250}
                >
                  <TextareaInput placeholder="Type your story here ... " />
                </Textarea>
              </VStack>
              <VStack marginBottom={20}>
                <Input>
                  <InputField placeholder="Paste image url" />
                </Input>
              </VStack>
            </Box>
          </ModalBody>
          <ModalFooter>
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
              onPress={onClose}
            >
              <ButtonText>Publish</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ComposeModal;
