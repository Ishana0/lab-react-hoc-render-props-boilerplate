import React, { useState } from "react";

const HOC = (OriginalComponent) => {
    const newComponent = () => {
        const [count, setCount] = useState(0);

        const handleCount = () => {
            setCount((prev) => prev + 1);
        };

        return <OriginalComponent count={count} handleCount={handleCount} />;
    };

    return newComponent;
};

export default HOC;