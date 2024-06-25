import React from 'react';

type InputProps = {
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <div className='w-full'>
      <input
        placeholder={placeholder}
        className='bg-transparent border hover:border-[#434343] border-[#2B2B2B] focus:border-[#F19C1C] h-14 rounded-lg w-full px-6 placeholder:text-[#707070] outline-none'
      />
    </div>
  )
}

export default Input;