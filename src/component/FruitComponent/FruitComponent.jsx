import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  SkeletonCircle,
  SkeletonText,
  Box,
  Badge,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import "./FruitComponent.css";
import { useState } from "react";
import { getCharacterByFruitId } from "../../service/fruitService/FruitService";

export const FruitComponent = ({ id, image, name, category, description }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState();
  const IMAGE_URL = `https://images.api-onepiece.com/fruits/${image}`;
  return (
    <>
      <div className="item">
        <Card maxW="max" mt="10" backgroundColor="rgba(0, 0, 0, 0.1)">
          <CardBody>
            <Image
              boxSize="300px"
              objectFit="contain"
              src={IMAGE_URL}
              fallbackSrc="/onePieceLogo.png"
            />
            <Stack mt="10" spacing="3">
              <Heading size="md" margin="3">
                {name}
              </Heading>
              <Text as="em" fontSize="22">
                {category}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter margin="3">
            <ButtonGroup spacing="5">
              <Button variant="solid" colorScheme="yellow" onClick={ async () => {
                onOpen();
                const res = await getCharacterByFruitId(id);
                const tmp = res.filter((e) =>  e.fruit_id == id)[0]
                setIsLoading(false);
                console.log(tmp);
                setResponse(tmp);
                }}>
                More details
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Modal isCentered isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />

          {isLoading ? (
            <ModalContent>
              <ModalHeader>Loading Data</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box padding="6" boxShadow="lg" bg="white">
                  <SkeletonCircle size="10" />
                  <SkeletonText
                    mt="4"
                    noOfLines={4}
                    spacing="4"
                    skeletonHeight="2"
                  />
                </Box>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="red" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          ) : (
            <ModalContent>
              <ModalHeader>
                <Heading as="h3" size="lg">
                  More Details
                </Heading>
              </ModalHeader>
              <ModalCloseButton />
              <Divider mt="3" />
              <ModalBody>
                <Flex>
                  {IMAGE_URL.endsWith("null") ? (
                    <Avatar src="/onePieceLogo.png" />
                  ) : (
                    <Avatar src={IMAGE_URL} />
                  )}
                  
                  <Box ml="3">
                    <Text fontWeight="bold">
                      {name}
                      <Badge ml="1" colorScheme="green">
                        {category}
                      </Badge>
                    </Text>
                    <Text fontSize="md"> { "User : "}{response.french_name} - {response.bounty + " $"}</Text>
                  </Box>
                </Flex>

                <Box>
                  <Text mt="3" justifyContent="Center">
                    {description}
                  </Text>
                </Box>
              </ModalBody>
              <Divider mt="3" />
              <ModalFooter>
                <Button colorScheme="red" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          )}
        </Modal>
      </div>
    </>
  );
};
