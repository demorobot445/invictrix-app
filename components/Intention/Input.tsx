type Props = {
  name: string;
  label: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
};

const Input: React.FC<Props> = ({
  label,
  name,
  placeholder,
  type = "text",
}) => {
  return (
    <div className="flex flex-col">
      <label
        className="font-display font-bold text-white"
        htmlFor={`circle-${name}`}
      >
        {label}
      </label>
      <input
        className="border-primary border p-1 placeholder:text-[#7f7f7f]"
        placeholder={placeholder}
        id={`circle-${name}`}
        type={type}
      />
    </div>
  );
};

export default Input;
