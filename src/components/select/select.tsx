
const Select = () => {
  return (
<div className="w-full">
<label htmlFor="large-input" className="block mb-2 text-xs font-medium text-gray-900">Select Theme</label>
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
</div>
  )
}

export default Select