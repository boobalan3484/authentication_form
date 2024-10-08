'use client';
import Menu from '@/components/Menu'
import React from 'react'

export default function Wrapper({ children }) {
    return (
        <>
            <Menu />
            <div className="content col d-flex flex-column justify-content-center">{children}</div>
        </>
    )
} 