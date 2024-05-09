import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie"; 

function Detail() {
    const [loading, setLoading] = useState(true);
    const [detailMovie, setDetailMovie] = useState(null);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

        setDetailMovie(json.data.movie);
        setLoading(false);
    }
    
    useEffect(() => {
        getMovie();
    }, []);
    console.log(detailMovie);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : <div><DetailMovie 
                key={detailMovie.id}
                coverImg={detailMovie.large_cover_image}
                title={detailMovie.title_long}
                description={detailMovie.description_full}
                genres={detailMovie.genres}
            />
            </div>}
            
        </div>
    );
}

export default Detail;