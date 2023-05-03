import React from "react";
import { useApp } from "../../context/AppContext";
import { Flex, Input, Button } from "@chakra-ui/react";

const BucketInput: React.FC = () => {
  const { bucketInputValues, setBucketInputValues, solveBucketSort } = useApp();

  return (
    <Flex flexDir="column" w="100%" alignItems="center" gap="20px" my="20px">
      <Flex flexWrap="wrap" justify="center" w="100%" maxW="600px" gap="20px">
        {bucketInputValues.map((bucketInputValue, index) => {
          return (
            <Input
              maxW={78}
              key={index}
              placeholder={`Item ${index}`}
              type="text"
              value={bucketInputValue.value}
              onChange={(e) => {
                const newBucketInputValues = [...bucketInputValues];
                newBucketInputValues[index] = {
                  value: e.target.value,
                  index: index,
                };
                setBucketInputValues(newBucketInputValues);
              }}
            />
          );
        })}
      </Flex>
      <Button
        w="100%"
        maxW="200px"
        onClick={() =>
          setBucketInputValues([
            ...bucketInputValues,
            { value: "", index: bucketInputValues.length },
          ])
        }
      >
        Add
      </Button>
      <Button
        w="100%"
        maxW="200px"
        onClick={() =>
          solveBucketSort(
            bucketInputValues.map((bucketInputValue) => bucketInputValue.value)
          )
        }
      >
        Solve
      </Button>
    </Flex>
  );
};

export default BucketInput;
