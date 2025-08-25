import React, { useState, useRef, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Dropdown = ({ 
  trigger, 
  items, 
  className = '', 
  dropdownClassName = '',
  onItemClick,
  align = 'left', // 'left', 'right', 'center'
  triggerOnHover = false, // New prop for hover mode
  onTriggerClick // New prop for handling trigger click
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Handle mouse enter with immediate open
  const handleMouseEnter = () => {
    if (triggerOnHover) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsOpen(true);
    }
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    if (triggerOnHover) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 150); // 150ms delay before closing
    }
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    }
    setIsOpen(false);
  };

  const getAlignmentClasses = () => {
    switch (align) {
      case 'right':
        return 'right-0';
      case 'center':
        return 'left-1/2 transform -translate-x-1/2';
      default:
        return 'left-0';
    }
  };

  return (
    <div 
      className={`relative ${className}`} 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <div
        onClick={triggerOnHover ? onTriggerClick : () => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center gap-1"
      >
        {trigger}
        <FiChevronDown 
          className={`w-4 h-4 text-slate-300 hover:text-blue-400 transition-all duration-200 ${isOpen ? 'rotate-180 text-blue-400' : ''}`}
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className={`
            absolute top-full mt-2 py-2 bg-slate-800/95 backdrop-blur-md 
            border border-blue-500/20 rounded-xl shadow-xl shadow-black/20 
            min-w-[200px] z-50 animate-in slide-in-from-top-2 duration-200
            ${getAlignmentClasses()} ${dropdownClassName}
          `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {items.map((item, index) => (
            <div key={index}>
              {item.type === 'divider' ? (
                <div className="border-t border-slate-600/50 my-1 mx-2" />
              ) : (
                <button
                  onClick={() => handleItemClick(item)}
                  className={`
                    w-full px-4 py-2.5 text-left text-slate-300 hover:text-blue-400 
                    hover:bg-blue-500/10 transition-all duration-200 flex items-center gap-3
                    ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                  `}
                  disabled={item.disabled}
                >
                  {item.icon && <span className="w-4 h-4">{item.icon}</span>}
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
