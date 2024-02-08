import React from "react";

const LikeImage3 = (props) => {
    return (
        <div>
            <button onClick={props.handleCount}>Like Image{props.count}</button>
        </div>
    );
}
export default LikeImage3;