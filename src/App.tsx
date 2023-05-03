import { Flex } from "@chakra-ui/react";
import FirstRenderModal from "./components/FirstRenderModal";
import BucketInput from "./components/BucketInput";
import BucketResult from "./components/BucketResult";

function App() {
  return (
    <Flex flexDir='column'>
      <BucketInput />
      <BucketResult />

      <FirstRenderModal />
    </Flex>
  );
}

export default App;
