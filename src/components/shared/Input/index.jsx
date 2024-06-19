import React from 'react';
import { useFormContext } from 'react-hook-form';

const Input = ({ name, label, type = 'text', ...rest }) => {
  const { register } = useFormContext();

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-gray-700 font-semibold mb-2">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        {...register(name)}
        {...rest}
      />
    </div>
  );
};

export default Input;