import { ElementStates } from "../../types/element-states";
import { TArray } from "./sorting-page";
import { bubbleSort, selectionSort } from "./utils";

const setLoader = jest.fn();
const setArray = jest.fn();

const inputArr: TArray[] = [
  { value: 3, state: ElementStates.Default },
  { value: 1, state: ElementStates.Default },
  { value: 4, state: ElementStates.Default },
  { value: 2, state: ElementStates.Default },
];

const outputArrInc: TArray[] = [
  { value: 1, state: ElementStates.Modified },
  { value: 2, state: ElementStates.Modified },
  { value: 3, state: ElementStates.Modified },
  { value: 4, state: ElementStates.Modified },
];

const outputArrDec: TArray[] = [
  { value: 4, state: ElementStates.Modified },
  { value: 3, state: ElementStates.Modified },
  { value: 2, state: ElementStates.Modified },
  { value: 1, state: ElementStates.Modified },
];

describe.each([
  { sortDirection: "inc", result: outputArrInc },
  { sortDirection: "dec", result: outputArrDec },
])("selectionSortArrFunction %s", ({ sortDirection, result }) => {
  test("Empty array", async () => {
    const outputArray = await selectionSort(
      [],
      setLoader,
      setArray,
      sortDirection === "inc"
    );
    expect(outputArray).toEqual([]);
  });

  test("Array with one element", async () => {
    const outputArray = await selectionSort(
      [{ value: 1, state: ElementStates.Default }],
      setLoader,
      setArray,
      sortDirection === "inc"
    );
    expect(outputArray).toEqual([{ value: 1, state: ElementStates.Modified }]);
  });

  test("Array with multiple elements", async () => {
    const outputArray = await selectionSort(
      inputArr,
      setLoader,
      setArray,
      sortDirection === "inc"
    );
    expect(outputArray).toEqual(result);
  });
});

describe.each([
  { sortDirection: "inc", result: outputArrInc },
  { sortDirection: "dec", result: outputArrDec },
])("bubbleSortArrFunction %s", ({ sortDirection, result }) => {
  test("Empty array", async () => {
    const outputArray = await bubbleSort(
      [],
      setLoader,
      setArray,
      sortDirection === "inc"
    );
    expect(outputArray).toEqual([]);
  });

  test("Array with one element", async () => {
    const outputArray = await bubbleSort(
      [{ value: 1, state: ElementStates.Default }],
      setLoader,
      setArray,
      sortDirection === "inc"
    );
    expect(outputArray).toEqual([{ value: 1, state: ElementStates.Modified }]);
  });

  test("Array with multiple elements", async () => {
    const outputArray = await bubbleSort(
      inputArr,
      setLoader,
      setArray,
      sortDirection === "inc"
    );
    expect(outputArray).toEqual(result);
  });
});
