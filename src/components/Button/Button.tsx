import React from 'react';

type ButtonProps = {
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({onClick, children}) => {
    return  <button onClick={onClick}>
    {children}
    </button>
}