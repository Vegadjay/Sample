'use client'

import React from 'react';

const Button = ({ children, onclick }: { children: string; onclick: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <button onClick={onclick}>
            {children}
        </button>
    );
}

export default Button;
