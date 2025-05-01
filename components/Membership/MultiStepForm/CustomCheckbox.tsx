import React from "react";

interface CustomCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <label className="flex cursor-pointer items-center space-x-2 select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer hidden"
      />
      <svg
        className="border-dark peer-checked:bg-dark h-6 w-6 rounded-full border-2 p-0.5 peer-checked:*:block"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12.6111L8.92308 17.5L20 6.5"
          className="hidden stroke-white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-gray-800">{label}</span>
    </label>
  );
};

export default CustomCheckbox;
