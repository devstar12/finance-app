import React from 'react';
import type { ReactNode } from 'react';

interface CheckboxProps {
  id: string;
  label: ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mr-2"
      />
      <label htmlFor={id} className="text-sm cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;