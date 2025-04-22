interface Props {
  className?: string
  name?: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export default function TextInput({ className, name, value, onChange }: Props) {
  return (
    <input
      className={`${className} bg-white p-2`}
      onChange={onChange}
      type="text"
      name={name}
      placeholder={name}
      value={value}
    />
  )
}
