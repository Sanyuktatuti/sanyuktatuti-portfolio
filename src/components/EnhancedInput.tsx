"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface EnhancedInputProps {
  type: string;
  id: string;
  name: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  validation?: (value: string) => string | null;
  className?: string;
}

const EnhancedInput = ({
  type,
  id,
  name,
  label,
  required = false,
  value,
  onChange,
  validation,
  className = "",
}: EnhancedInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (validation && value) {
      const validationError = validation(value);
      setError(validationError);
      setIsValid(!validationError);
    }
  }, [value, validation]);

  const baseInputClass = `w-full px-4 py-2 bg-[#1a1a2e] border rounded-lg focus:outline-none focus:ring-2 text-white transition-all duration-200 ${className}`;
  const inputClass = `${baseInputClass} ${
    error
      ? "border-red-500 focus:ring-red-500"
      : isValid && value
      ? "border-green-500 focus:ring-green-500"
      : "border-gray-700 focus:ring-purple-500"
  }`;

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 ${
          isFocused || value
            ? "-top-2.5 text-xs bg-[#1a1a2e] px-2"
            : "top-2.5 text-base"
        } ${error ? "text-red-400" : "text-gray-400"}`}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`${inputClass} h-32 resize-none`}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={inputClass}
        />
      )}

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute text-xs text-red-400 mt-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isValid && value && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute right-3 top-3 w-4 h-4 bg-green-500 rounded-full"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedInput;
