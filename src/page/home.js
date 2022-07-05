import * as React from "react";

const Home = ({ data }) => {
    return (
        <div>
            <h1>Name</h1>
            <h2>{data.name}</h2>
            <h1>Descrição</h1>
            {data.description.split(',').map((des) => (
                <>
                 <h2>{des}</h2>
                </>
            ))}
        </div>
    );
}

export default Home;