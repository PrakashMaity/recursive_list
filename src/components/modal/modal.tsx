import XCircle from "../../assets/icon/xCircel";
import { useModal } from "../../hooks";

type ModalProps = {
  id: string;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ id, content }) => {

  const { closeModal } = useModal();

  const closeModalHandler = (id: string) => {
    closeModal(id)
  }
  return (
    <div id={`modal-${id}`} className="absolute left-0 right-0 top-0 bottom-0 p-4 bg-slate-400/80 flex items-center justify-center ">
      <div className="bg-white w-3/4 h-3/4 relative">
        <div className="bg-slate-500 p-2 flex items-center justify-between">
          <p className="text-lg font-semibold text-white">Header title</p>
          <XCircle onClick={() => { closeModalHandler(id) }} />
        </div>
        {content}
      </div>

    </div>
  )
}

export default Modal