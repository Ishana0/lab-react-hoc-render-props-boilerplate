import React, { useState } from "react";

const RenderProps = (props) => {
    const { render } = props;

    const [count, setCount] = React.useState(0);

    const handleCount = () => {
        setCount((prev) => prev + 1);
    };
    return<div>
        {render(count, handleCount)}
    </div>;
};
export default RenderProps;