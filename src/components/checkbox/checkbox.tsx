const Checkbox = () => {
  return (
    <div className="flex items-center gap-2">
    <label htmlFor="checked-checkbox" className="text-xs font-medium text-gray-900">Checked state</label>
    <input id="checked-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
</div>
  )
}

export default Checkbox