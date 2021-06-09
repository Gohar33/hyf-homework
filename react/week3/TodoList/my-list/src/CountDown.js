import React, { useState, useEffect } from 'react'

export default function CountDown() {
    const [count, setCount] = useState(0);



    useEffect(() => {
        const timerId = setTimeout(() => {
            setCount(prev => prev + 1);
        }, 1000);
        return () => clearTimeout(timerId)
    });



    return (
        <div className="Form-count">
            You have used {count} seconds on this website
        </div>
    );
}

