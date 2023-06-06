import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://api.tvmaze.com/search/shows?q=all")
            .then(res => {
                setData(res.data); // Set the response data instead of the entire response object
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h2 className="text-center text-5xl my-5">SHOWS</h2>
            <div className="grid lg:grid-cols-6 gap-4 container mx-auto">
                {data.length > 0 ? (
                    data.map(show => (
                        <div className="w-[210px] image-container">
                            <div>
                                <div class="background-overlay w-[210px] h-[300px]"></div>
                                <img src={show.show.image.medium} className="show-img" alt="" />
                            </div>
                            <div className="flex justify-between w-[210px]">
                                <p>{show.show.name}</p>
                                <button><Link to={`/show/${show.show.id}`}>Details</Link></button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Home;