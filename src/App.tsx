import { useRef, useState } from "react"
import { inputs } from "./tools/inputs"
import { stateType } from "./tools/operators"

export type operation = undefined | ((a: number, b: number) => number)

export type input = {
  input: string
  row: string
  col: string
  identifier: string
  operation: operation | undefined
  operator: operator
}

type operator = (input: input, s: stateType) => stateType

function App() {
  const [display, setDisplay] = useState("")
  const [curOperator, setCurOperator] = useState<operation>()
  const [history, setHistory] = useState("")
  const bank = useRef("")

  function handleClick(input: input) {
    const s = {
      bank: bank.current,
      history,
      curOperator,
      display,
    }
    const result = input.operator(input, s)
    setDisplay(result.display)
    setCurOperator(result.curOperator)
    setHistory(result.history)
    bank.current = result.bank
  }
  return (
    <div className="App h-screen">
      <div className="calculator h-full flex items-center justify-center">
        <div className=" h-2/3 min-h-96 bg-gray-900 p-4 w-min flex flex-col rounded">
          <div className=" h-6 text-end text-yellow-400 text-sm font-mono">
            {history}
          </div>
          <div className=" h-10 text-gray-50 mb-2 text-end text-3xl font-bold font-mono">
            {display}
          </div>

          <div className=" grid grid-cols-4 grid-rows-5 w-80 h-4/5">
            {inputs.map((input) => (
              <button
                onClick={() => handleClick(input as input)}
                className={` w-full h-full ${
                  input.identifier === "number"
                    ? "bg-gray-600 hover:bg-gray-700"
                    : input.identifier === "operator"
                    ? "bg-blue-900 hover:bg-blue-700"
                    : "bg-red-500 hover:bg-red-600"
                } transition-colors border-2 text-gray-50 rounded border-gray-900 ${
                  input.col
                } ${input.row}`}
                key={input.input}
              >
                {input.input}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
