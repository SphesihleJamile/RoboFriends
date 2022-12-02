import React from "react";
import "tachyons"

const Card = ({id, name, email}) => {
    return(
        <div className="bg-light-green dib pa3 ma2 grow bw-2 shadow-5 tc">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="A Card" />
            <div className="tc">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;