import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { HiLocationMarker } from 'react-icons/hi';
import { MdLink } from 'react-icons/md';

const ProfileHeader = () => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const fetchDetails = async () => {
            const res = await axios.get(`https://api.github.com/users/mojombo`);
            setDetails(res.data);
        }
        fetchDetails();
    }, []);
    console.log(details.login);

    return (
        <div>
            <div className="d-flex">
                <div className="p-2">
                    <img src={details.avatar_url} className="rounded-circle img-fluid img-thumbnail" alt="Cinque Terre" />
                    <div className="d-flex align-items-center flex-row gap-2 link">
                        <MdLink />
                        <a className="url" href="https://api.github.com/users/mojombo">{details.url}</a>
                    </div>
                </div>
                <div className="flex-grow-1 m-2">
                    <h2>{details.name}</h2>
                    <div className="d-flex align-items-center flex-row gap-2">
                        <HiLocationMarker />
                        <h5>{details.location}</h5>
                    </div>
                    <div className="row show-detail text-center py-2">
                        <div className="col">
                            <h5>{details.public_repos}</h5>
                            <h6>Repositary</h6>
                        </div>
                        <div className="col">
                            <h5>{details.followers}</h5>
                            <h6>Followers</h6>
                        </div>
                        <div className="col">
                            <h5>{details.following}</h5>
                            <h6>Following</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader