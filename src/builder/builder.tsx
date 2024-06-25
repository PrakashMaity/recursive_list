// import { ReactNode } from "react"
import Content from "./body/content"
import Tools from "./tools/tools"
// import { Item } from "./context/types"
import { useBuilderContext } from "./context/useBuilderContext"

const Builder = () => {
const {state}=useBuilderContext()

  return (
      <div className="flex relative">
        {/* Left side */}
        <div className="w-1/4 fixed h-screen border border-primary bg-slate-500 p-2">
          <Tools />
        </div>
        {/* right side */}
        <div className="w-1/4" />
        <div className="w-3/4 bg-slate-200">
        {
       state.items.map((item,index) =><Content key={index} {...item} />)
        }
        </div>
      </div>
  )
}

export default Builder