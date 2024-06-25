import Checkbox from "../../../components/checkbox/checkbox"
import TextInput from "../../../components/input/textInput"
import Select from "../../../components/select/select"

const TextInputConfig = () => {
    return (
        <div className="flex items-start justify-between w-full h-full">
            <div className="flex-1 p-2">
                <div className=""><p className="font-semibold">Features</p></div>
                <div className="mt-2">
                    <TextInput label="Add label" placeholder="Please input label here" />
                </div>
                <div className="mt-2">
                    <TextInput label="Add placeholder" placeholder="Please write a placeholder here" />
                </div>
                <div className="mt-2">
                    <Checkbox />
                </div>
                <div className="mt-2">
                    <Select />
                </div>
            </div>
            <div className="flex-1 p-2">
                <p className="font-semibold">Preview</p>
                <div className="p-5">
                    <TextInput label="Add label" placeholder="Please input label here" />
                </div>
            </div>
        </div>
    )
}

export default TextInputConfig