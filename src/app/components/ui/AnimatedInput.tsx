import { useState } from 'react';
import { Send } from 'lucide-react';

export const AnimatedInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [message, setMessage] = useState('');

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value);

  return (
    <div className="relative flex items-center w-full">
      <input
        type="text"
        placeholder="Em que podemos ajudar?"
        className="peer pl-20 focus:pl-4 pr-4 focus:pr-20 py-2 border border-[#E19322] rounded-full w-full focus:outline-none focus:border-[#E19322] transition-all bg-transparent"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={message}
      />

      <a
        href={`https://wa.me/558588778023?text=${encodeURIComponent(message)}`}
        target="_blank"
        onMouseDown={(e) => e.preventDefault()} 
        className="absolute flex items-center left-1 peer-focus:left-auto peer-focus:right-1 py-1 px-5 top-1/2 transform -translate-y-1/2 transition-all text-base h-[calc(100%-5px)] text-[#1F1F1F] font-semibold rounded-full bg-[#E19322] peer-focus:bg-[#E19322] peer-focus:text-[#1F1F1F]"
      >
        <span className="-z-10">
          {isFocused ? <Send size={15} /> : 'Olá'}
        </span>
      </a>
    </div>
  );
};
