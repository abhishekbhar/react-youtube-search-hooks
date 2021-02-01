import {useState, useEffect} from 'react';
import YoutubeAPI from '../apis/Youtube';

const useVideos = (defaultSearchTerm) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    },[]);

    
    const search = async (term)  => {
        const response = await YoutubeAPI.get('/search', {
            params: {
                q: term
            }
        });
        setVideos(response.data.items);
    };

    return [videos, search];
};


export default useVideos;