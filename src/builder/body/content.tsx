// import DndBox from "./dnd/dndBox"
import Edit from "../../assets/icon/edit"
import PlusCircle from "../../assets/icon/plusCircle"
import Trash from "../../assets/icon/trash"
import TextInput from "../../components/input/textInput"
import { useModal } from "../../hooks"
import { Item } from "../context/types"
import { useBuilderContext } from "../context/useBuilderContext"


const Content = ({ children, id, label }: Item) => {
  const { openModal } = useModal();
  const { state, dispatch } = useBuilderContext()

  const openCustomModal = (id: string) => {
    const modalContent = <p>ADD</p>
    openModal({ id, content: modalContent });
  }

  const addField = (id: string, newField: Item) => {
    const addRecursive = (fields: Item[]): Item[] => {
      return fields.map(field => {
        if (field.id === id && field.children) {
          return { ...field, children: [...field.children, newField] };
        }
        if (field.children) {
          return { ...field, children: addRecursive(field.children) };
        }
        return field;
      });
    };
    dispatch({
      type: "MODIFY_ITEM",
      payload: addRecursive(state.items)
    })
  };

  const updateField = (id: string, updatedField: Partial<Item>) => {
    const updateRecursive = (fields: Item[]): Item[] => {
      return fields.map(field => {
        if (field.id === id) {
          return { ...field, ...updatedField };
        }
        if (field.children) {
          return { ...field, children: updateRecursive(field.children) };
        }
        return field;
      });
    };
    dispatch({
      type: "MODIFY_ITEM",
      payload: updateRecursive(state.items)
    })
  };

  const deleteField = (id: string) => {
    const deleteRecursive = (fields: Item[]): Item[] => {
      return fields.reduce<Item[]>((result, field) => {
        if (field.id === id) {
          return result; // Skip the field with the given id
        }
        if (field.children) {
          return [...result, { ...field, children: deleteRecursive(field.children) }];
        }
        return [...result, field];
      }, []);
    };
    dispatch({
      type: "MODIFY_ITEM",
      payload: deleteRecursive(state.items)
    })
  };


  return (
    <div className="relative p-1 bg-slate-700 m-2">
      <div className="absolute top-2 right-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="bg-slate-700 text-white px-2 py-1 rounded flex items-center justify-between gap-3">
          <PlusCircle onClick={() => { openCustomModal(`${id}_plus`) }} />
          <Edit />
          <Trash onClick={() => { deleteField(id) }} />
        </div>
      </div>
      <div className="p-4 bg-slate-200">
        <div className="mb-2">
          <p className="text-base font-semibold">{label}/{id}</p>
        </div>
        <div className="p-2">
          <TextInput label="Text Input" placeholder="As your whish" />
        </div>
        {/* <DndBox /> */}
      </div>
      {children && children.length > 0 && children.map((item, index) => <Content key={index} {...item} />)}
    </div>
  )
}

export default Content