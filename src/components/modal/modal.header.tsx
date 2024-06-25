import XCircle from "../../assets/icon/xCircel"
import { useModal } from "../../hooks";

const Header = () => {
    const { closeModal } = useModal();

    const closeModalHandler=(id:string)=>{
        closeModal(id)
      }
  return (
    <div className="bg-slate-500 p-2 flex items-center justify-between">
        <p className="text-lg font-semibold text-white">Header title</p>
        <XCircle onClick={()=>{closeModalHandler("input")}} />
    </div>
  )
}

export default Header