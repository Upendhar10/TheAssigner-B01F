export function FormTemplate({
  onChange,
  type,
  placeholder,
  isRequired,
  value,
}) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      required={isRequired}
      onChange={onChange}
      className="my-3 block w-full rounded-sm border p-2 text-sm outline-purple-500"
    />
  );
}
