import React from 'react';

interface InputProps {
  label?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        className="input-field"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      <style jsx>{`
        .input-container {
          margin-bottom: 1rem;
        }
        .input-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }
        .input-field {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .input-field:focus {
          border-color: #0070f3;
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Input;
