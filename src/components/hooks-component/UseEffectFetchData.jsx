import React, { useState } from "react";
import { useEffect } from "react";

import axios from "../constant/axios";
import requests from "../constant/requests";

function UseEffectFetchData() {
    const [posts, setPosts] = useState({});
    const [id, setId] = useState(1);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const request = await axios.get(requests.fetchPosts + id);
                console.log(request);
                setPosts(request.data);
                return request;
            } catch (error) {
                console.error(error);
            }
        };

        fetchdata();
        return () => {};
    }, [id]);
    return (
        <div>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <h2>{posts.title}</h2>
            {/* {posts
                .filter((post, index) => index < 20)
                .map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))} */}
        </div>
    );
}

export default UseEffectFetchData;
