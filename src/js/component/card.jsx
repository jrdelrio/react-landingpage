import React from "react";


const Card = (prop) => {
    return(
        <>
        <div className="col-md-3 col-xs-12">
            <div className="card h-100">
            <img src={prop.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{prop.title}</h5>
                <p className="card-text">{prop.description}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary btn-lg" type="button">Find out more!</button>
            </div>
            </div>
        </div>
        </>
        )
};

export default Card;




        