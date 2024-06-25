import { iconType } from "./type/iconType"

const PlusCircle = ({onClick,color,size}:iconType) => {
    return (
        <div onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={color?color:"currentColor"} className={size?size:"size-6"}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </div>

    )
}

export default PlusCircle