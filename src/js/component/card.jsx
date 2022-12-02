import React from "react";

const Card = () => {
    return(
        <div class="card h-100 col-sm-12 col-md-3 ml-md-auto">
            <img src="https://img.freepik.com/free-photo/parrot-profile_1136-16.jpg?w=1480&t=st=1669995373~exp=1669995973~hmac=402215d67735879877443b968be5e0859f3459c6929645a181b2a7242a3d2771" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolore, fugit iste ullam animi 
                labore impedit eius distinctio porro. At quis modi excepturi beatae ratione rem voluptatibus iusto totam itaque?</p>
                <div class="card-footer">
                <button class="btn btn-primary btn-lg" type="button">Find out more!</button>
                </div>
            </div>
        </div>
    )
};

export default Card;