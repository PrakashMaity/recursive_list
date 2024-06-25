import { useModal } from "../../hooks";
// import { useBuilderContext } from "../context/builderContext";
import TextInputConfig from "./textInputConfig/textInputConfig";
import { toolsItem } from "./tools.constant"

const Tools = () => {
    const { openModal } = useModal();
  
    const openCustomModal = (id:string) => {
      const modalContent = <TextInputConfig />
      openModal({ id, content: modalContent });
    }

    // const {state,dispatch} =useBuilderContext()
    // dispatch({ type: 'ADD_ITEM', payload: newItem });
  return (
    <div>
        {
            toolsItem.map((tools,toolsIndex)=>(
                <div key={toolsIndex} className="bg-slate-200 my-2">
                    <div className="bg-slate-300 flex items-center justify-center py-2">
                        <p className="text-lg font-bold">{tools.title}</p>
                    </div>
                    <div className="p-2 flex flex-col gap-y-2">
                        {
                           tools.items.map((item,index)=>(
                            <div key={index} className="bg-slate-200">
                                <button onClick={()=>{openCustomModal("input")}} className="w-full h-10 bg-slate-700 text-white">{item.title}</button>
                            </div>
                           )) 
                        }
                    </div>
                </div>
            ))
        }
        
        
    </div>
  )
}

export default Tools