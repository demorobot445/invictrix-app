type Props = {
  name: string;
  label: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string | number | undefined;
};

const Input: React.FC<Props> = ({
  label,
  name,
  placeholder,
  type = "text",
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-col">
      <label className="font-display font-bold text-white" htmlFor={name}>
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        className="border-primary text-dark-primary border p-1 placeholder:text-[#7f7f7f] focus:outline-none"
        placeholder={placeholder}
        required
        id={name}
        type={type}
      />
    </div>
  );
};

export default Input;
