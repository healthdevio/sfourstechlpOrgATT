import React from 'react';

type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, maxLength }) => {
  return (
    <div className='w-full'>
      <input
        value={value}
        maxLength={maxLength}
        onChange={onChange}
        placeholder={placeholder}
        className='bg-transparent border hover:border-[#434343] border-[#2B2B2B] focus:border-[#F19C1C] h-16 rounded-lg w-full px-6 placeholder:text-[#707070] outline-none'
      />
    </div>
  )
}

export default Input;