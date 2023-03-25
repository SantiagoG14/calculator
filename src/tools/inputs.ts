import {
  sub,
  sum,
  mult,
  div,
  clearOperator,
  functionOperator,
  numberOperator,
  equalsOperator,
} from "./operators"

export const inputs = [
  {
    input: "AC",
    row: "1",
    col: "col-span-2",
    operator: clearOperator,
    identifier: "clear",
    id: "clear",
  },
  {
    input: "/",
    row: "1",
    col: "1",
    operator: functionOperator,
    operation: div,
    identifier: "operator",
    id: "divide",
  },
  {
    input: "*",
    row: "1",
    col: "1",
    operator: functionOperator,
    operation: mult,
    identifier: "operator",
    id: "multiply",
  },
  {
    input: "7",
    row: "1",
    col: "1",
    operator: numberOperator,
    identifier: "number",
    id: "seven",
  },
  {
    input: "8",
    row: "1",
    col: "1",
    operator: numberOperator,
    identifier: "number",
    id: "eight",
  },
  {
    input: "9",
    row: "1",
    col: "1",
    operator: numberOperator,
    identifier: "number",
    id: "nine",
  },
  {
    input: "-",
    row: "1",
    col: "1",
    operator: functionOperator,
    operation: sub,
    identifier: "operator",
    id: "subtract",
  },
  {
    input: "4",
    row: "1",
    col: "1",
    operator: numberOperator,
    identifier: "number",
    id: "four",
  },
  {
    input: "5",
    row: "1",
    col: "1",
    operator: numberOperator,
    identifier: "number",
    id: "five",
  },
  {
    input: "6",
    row: "1",
    col: "1",
    operator: numberOperator,
    identifier: "number",
    id: "six",
  },
  {
    input: "+",
    row: "1",
    col: "1",
    operator: functionOperator,
    operation: sum,
    identifier: "operator",
    id: "add",
  },
  {
    input: "1",
    row: "1",
    col: "1",
    operator: numberOperator,
    identifier: "number",
    id: "one",
  },
  {
    input: "2",
    row: "1",
    col: "1",
    operator: numberOperator,
    identifier: "number",
    id: "two",
  },
  {
    input: "3",
    row: "1",
    col: "1",
    operator: numberOperator,
    identifier: "number",
    id: "three",
  },
  {
    input: "=",
    row: "row-span-2",
    col: "1",
    operator: equalsOperator,
    identifier: "operator",
    id: "equals",
  },
  {
    input: "0",
    row: "1",
    col: "col-span-2",
    operator: numberOperator,
    identifier: "number",
    id: "zero",
  },
  {
    input: ".",
    row: "1",
    col: "1",
    operator: numberOperator,
    identifier: "number",
    id: "decimal",
  },
]
