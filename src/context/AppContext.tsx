import React, {
  createContext,
  useContext,
  useState,
} from "react";
import { useToast } from "@chakra-ui/react";

interface AppContextProps {
  firstRender: boolean;
  setFirstRender: React.Dispatch<React.SetStateAction<boolean>>;
  bucketInputValues: BucketInputValues[];
  setBucketInputValues: React.Dispatch<
    React.SetStateAction<BucketInputValues[]>
  >;
  firstRenderStep: number;
  setFirstRenderStep: React.Dispatch<React.SetStateAction<number>>;
  solveBucketSort: (arr: string[]) => void;
  bucketResult: BucketInputValues[];
  setBucketResult: React.Dispatch<React.SetStateAction<BucketInputValues[]>>;
  bucketValues: BucketInputValues[][];
  setBucketValues: React.Dispatch<React.SetStateAction<BucketInputValues[][]>>;
}

interface BucketInputValues {
  value: string;
  index: number;
}

const AppContext = createContext<AppContextProps>({} as any);

export function AppProvider({ children }: any) {
  const [firstRender, setFirstRender] = useState(true);
  const [firstRenderStep, setFirstRenderStep] = useState(0);

  const [bucketInputValues, setBucketInputValues] = useState<
    BucketInputValues[]
  >([
    { value: "1.1", index: 0 },
    { value: "1.3", index: 1 },
    { value: "3.3", index: 2 },
    { value: "3.1", index: 3 },
    { value: "2.1", index: 4 },
    { value: "2.3", index: 5 },
    { value: "4.1", index: 6 },
    { value: "4.3", index: 7 },
    { value: "5.9", index: 8 },
    { value: "5.1", index: 9 },
  ]);

  const [bucketValues, setBucketValues] = useState<BucketInputValues[][]>([[]]);
  const [bucketResult, setBucketResult] = useState<BucketInputValues[]>([]);

  const toast = useToast();

  const solveBucketSort = (arr: string[]) => {
    toast({
      title: "Solving...",
      status: "info",
      duration: 1400,
    });

    const bucketSort = (arr: string[]) => {
      // get interval
      const interval = 10 / arr.length;
      // create buckets
      const buckets = Array.from({ length: arr.length }, () => []);
      // push values to buckets
      for (let i = 0; i < arr.length; i++) {
        const bucketIndex = Math.floor(Number(arr[i]) / interval);
        buckets[bucketIndex].push(arr[i] as never);
      }

      // return buckets
      return buckets;
    };

    const bucketArrange = bucketSort(arr);

    const bucketSorted = bucketArrange.map((bucket) => {
      return bucket.sort((a, b) => Number(a) - Number(b));
    });

    const bucketConcat = bucketSorted.reduce((acc, val) => acc.concat(val), []);

    const result = bucketConcat.map((value, index) => {
      return { value: value, index: index };
    });

    setTimeout(() => {
      setBucketValues(bucketArrange);
      setBucketResult(result);
  
      toast({
        title: 'Sucesso!',
        status: 'success',
        duration: 2000
      })
    },1200)
  };

  const value = {
    firstRender,
    setFirstRender,
    bucketInputValues,
    setBucketInputValues,
    firstRenderStep,
    setFirstRenderStep,
    solveBucketSort,
    bucketResult,
    setBucketResult,
    bucketValues,
    setBucketValues,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
