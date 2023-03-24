import { operation, input } from "../App"

export type stateType = {
  display: string
  history: string
  curOperator: operation | undefined
  bank: string
}

export function functionOperator(input: input, s: stateType) {
  if (s.bank === "") {
    return {
      ...s,
      bank: s.display,
      history: s.history + " " + input.input + " ",
      curOperator: () => input.operation,
    }
  } else if (/[+ * / -]$/.test(s.history)) {
    return {
      ...s,
      history: s.history.slice(0, s.history.length - 1) + input.input,
    }
  } else {
    if (s.curOperator === undefined) {
      throw new TypeError("no such operation")
    }
    const num: number = +s.bank
    const num2: number = +s.display
    const result: string | undefined = s.curOperator(num, num2).toString()

    if (result === undefined) {
      throw new TypeError("there is no such operator")
    }

    return {
      ...s,
      curOperator: () => input.operation,
      bank: result,
      history: result + " " + input.input + " ",
      display: result,
    }
  }
}

export function numberOperator(input: input, s: stateType) {
  if (s.display === "" && input.input === "0") {
    return { ...s }
  }
  return /[+ * / -]$/.test(s.history) && !s.history.includes("=")
    ? {
        ...s,
        history: s.history + input.input,
        display: input.input,
        curOperator: () => s.curOperator,
      }
    : s.history.includes("=")
    ? {
        ...s,
        history: "",
        display: input.input,
        curOperator: () => s.curOperator,
      }
    : {
        ...s,
        history: s.history + input.input,
        display: s.display + input.input,
        curOperator: () => s.curOperator,
      }
}

export function clearOperator(input: input, s: stateType) {
  return {
    display: "",
    bank: "",
    history: "",
    curOperator: undefined,
  }
}

export function equalsOperator(input: input, s: stateType) {
  if (s.curOperator === undefined) {
    throw new TypeError("no such operation")
  }
  const num: number = +s.bank
  const num2: number = +s.display
  const result: string | undefined = s.curOperator(num, num2).toString()

  if (result === undefined) {
    throw new TypeError("there is no such operator")
  }

  return {
    ...s,
    bank: result,
    history: s.history + " " + input.input + " " + result,
    display: result,
    curOperator: () => s.curOperator,
  }
}

export const sum = (a: number, b: number) => a + b

export const sub = (a: number, b: number) => a - b

export const mult = (a: number, b: number) => a * b

export const div = (a: number, b: number) => a / b
