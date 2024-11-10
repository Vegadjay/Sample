'use client'

import React from 'react';

const Button = ({ children, onclick }: { children: string; onclick: () => void}) => {
    return (
        <button onClick={onclick}>
            {children}
        </button>
    );
}

export default Button;
