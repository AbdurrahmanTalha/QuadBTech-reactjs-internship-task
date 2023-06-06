import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ShowDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [found, setFound] = useState(null);

    useEffect(() => {
        axios
            .get('https://api.tvmaze.com/search/shows?q=all')
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        const foundShow = data.find((show) => show.show.id.toString() === id);
        setFound(foundShow);
        console.log(foundShow)
    }, [data, id]);

    return (
        <div className='container mx-auto mt-[40px]'>
            {found && (
                <div>
                    <div>
                        <div className="w-[280px] image-container flex">
                            <div className="mr-10">
                                <div class="background-overlay w-[260px] h-[367px]"></div>
                                <img src={found.show.image.medium} className="show-img w-[300px] h-[300px]" alt="" />
                            </div>
                            <div className="">
                                <h3 className="text-4xl mb-[30px]">{found.show.name}</h3>
                                <div dangerouslySetInnerHTML={{ __html: found.show.summary }}></div>
                                <button className="mt-[10px] py-[15px] px-[30px] bg-[#000] rounded-[5px] text-white text-center flex justify-center items-center">
                                    <Link to="/">Back</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default ShowDetails;