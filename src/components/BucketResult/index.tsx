import React from "react";
import { useApp } from "../../context/AppContext";
import { Flex, Text } from "@chakra-ui/react";

const BucketResult: React.FC = () => {
  const { bucketResult, bucketValues } = useApp();

  return (
    <>
      <Flex justify="center" my="120px" gap="12px">
        {bucketResult.length > 0 &&
          bucketValues.map((bucket, index) => (
            <Flex
              key={index}
              direction="column"
              align="center"
              justify="flex-end"
              w="100px"
              h="100px"
              borderRadius="50%"
            >
              {bucket.map((item, index) => {
                return (
                  <Flex
                    key={index}
                    justify="center"
                    align="center"
                    w="50px"
                    h="50px"
                    border="1px solid #000"
                    borderRadius="50%"
                    mb="10px"
                  >
                    <Text color="#000">{item.toString()}</Text>
                  </Flex>
                );
              })}
              <Flex>{index}</Flex>
            </Flex>
          ))}
      </Flex>
      <Flex justify="center" gap="12px">
        {bucketResult.map((item, index) => {
          return (
            <Flex
              key={index}
              justify="center"
              align="center"
              w="50px"
              h="50px"
              border="1px solid #000"
              borderRadius="50%"
              mb="10px"
            >
              <Text color="#000">{item.value}</Text>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export default BucketResult;
