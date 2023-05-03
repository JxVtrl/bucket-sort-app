import React from "react";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Flex,
} from "@chakra-ui/react";
import { useApp } from "../../context/AppContext";

interface StepperProps {
  steps: { title: string; description: string }[];
}

const ModalStepper: React.FC<StepperProps> = ({ steps }) => {
  const { firstRenderStep } = useApp();

  return (
    <Stepper
      size="sm"
      index={firstRenderStep}
      h="40px"
      gap="60px"
    >
      <Step>
        <StepIndicator>
          <StepStatus
            complete={<StepIcon />}
            incomplete={<StepNumber />}
            active={<StepNumber />}
          />
        </StepIndicator>

        <Flex flexDir="column">
          <StepTitle>{steps[firstRenderStep].title}</StepTitle>
          <StepDescription>
            {steps[firstRenderStep].description}
          </StepDescription>
        </Flex>

        <StepSeparator />
      </Step>
    </Stepper>
  );
};

export default ModalStepper;
