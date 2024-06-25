
type TextInputType={
    label:string;
    placeholder:string;
}
const TextInput = ({label,placeholder}:TextInputType) => {
    return (
        <div className="w-full">
            <label htmlFor="large-input" className="block mb-2 text-xs font-medium text-gray-900">{label}</label>
            <input placeholder={placeholder} type="text" id="large-input" className="block w-full p-3 text-slate-400 border border-slate-400 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 " />
        </div>
    )
}

export default TextInput