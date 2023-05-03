import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import { useApp } from "../../context/AppContext";
import ModalStepper from "../ModalStepper";

const FirstRenderModal: React.FC = () => {
  const { firstRender, setFirstRender, firstRenderStep, setFirstRenderStep } =
    useApp();

  const stepTexts = [
    {
      title: "Bem-vindo ao método Bucket Sort",
      description: "Neste modal você entenderá como:",
    },
    {
      title: "Item 1",
      description: "O que faz o método Bucket Sort?",
    },
    {
      title: "Item 2",
      description: "Como o método Bucket Sort funciona?",
    },
    {
      title: "Item 3",
      description: "Quais são as peculiaridades do método?",
    },
    {
      title: "Item 4",
      description: "Quais são as complexidades de pior e melhor caso?",
    },
  ];

  const steps = [
    <>
      <ModalBody>
        <Text>Neste modal você entenderá como:</Text>
        <OrderedList>
          <ListItem>O que o método Bucket Sort faz</ListItem>
          <ListItem>Como o método Bucket Sort funciona</ListItem>
          <ListItem>Quais são as pecualiaridades do método</ListItem>
          <ListItem>Quais são as complexidades de pior e melhor caso</ListItem>
        </OrderedList>
      </ModalBody>
    </>,
    <>
      <ModalBody>
        <Text>
          O Bucket Sort é um algoritmo de ordenação que funciona dividindo um
          vetor em um número finito de recipientes. Cada recipiente é então
          ordenado individualmente, seja usando um algoritmo de ordenação
          diferente, ou usando o próprio Bucket Sort recursivamente. O Bucket
          Sort é um algoritmo de ordenação por comparação e é geralmente
          executado em tempo linear, sendo assim, é um dos algoritmos de
          ordenação mais rápidos.
        </Text>
      </ModalBody>
    </>,
    <>
      <ModalBody>
        <Text>
          O Bucket Sort funciona dividindo um vetor em um número finito de
          recipientes. Cada recipiente é então ordenado individualmente, seja
          usando um algoritmo de ordenação diferente, ou usando o próprio Bucket
          Sort recursivamente. O Bucket Sort é um algoritmo de ordenação por
          comparação e é geralmente executado em tempo linear, sendo assim, é um
          dos algoritmos de ordenação mais rápidos.
        </Text>
      </ModalBody>
    </>,
    <>
      <ModalBody>
        <Text>
          O Bucket Sort é um algoritmo de ordenação por comparação e é
          geralmente executado em tempo linear, sendo assim, é um dos algoritmos
          de ordenação mais rápidos.
        </Text>
      </ModalBody>
    </>,
    <>
      <ModalBody>
        <Text>Melhor caso: O(n + k)</Text>
        <Text>Pior caso: O(n²)</Text>
      </ModalBody>
    </>,
  ];

  return (
    <Modal
      isOpen={firstRender}
      onClose={() => setFirstRender(false)}
      // onOverlayClick={() => setFirstRender(true)}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {firstRenderStep === 0 ? (
            <Text>Bem-vindo ao método Bucket Sort.</Text>
          ) : (
            <ModalStepper steps={stepTexts} />
          )}
        </ModalHeader>
        {steps[firstRenderStep]}
        <ModalFooter>
          <Button
            variant="ghost"
            onClick={() => {
              if (firstRenderStep === steps.length - 1) {
                setFirstRender(false);
                return;
              }
              setFirstRenderStep(firstRenderStep + 1);
            }}
          >
            {firstRenderStep === steps.length - 1 ? "Entendi" : "Prosseguir"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FirstRenderModal;
