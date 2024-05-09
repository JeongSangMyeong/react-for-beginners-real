import PropTypes from "prop-types";

function DetailMovie({ coverImg, title, description, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <p>{description}</p>
            <ul>
                <li>
                    {genres.map((g) => <li key={g}>{g}</li>)}
                </li>
            </ul>
        </div>
    );
}

export default DetailMovie;