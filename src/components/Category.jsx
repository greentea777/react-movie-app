const Category = ({ handleCategory }) => {
    return (
        <nav className="flex p-5 justify-evenly">
            {/* <button className="mx-5 hover:text-red-500" value="popular" onClick={handleCategory}>
                Popular
            </button>
            <button className="mx-5 hover:text-red-500" value="top_rated" onClick={handleCategory}>
                Top Rated
            </button>
            <button className="mx-5 hover:text-red-500" value="now_playing" onClick={handleCategory}>
                Now Playing
            </button>
            <button className="mx-5 hover:text-red-500" value="upcoming" onClick={handleCategory}>
                Upcoming
            </button> */}

            <label className="hover:text-red-500">
                <input className="absolute opacity-0 w-0 h-0 checked:bg-white checked:text-black peer" type="radio" name="radios" value="popular" onClick={handleCategory} />
                <span className="p-2 peer-checked:text-black peer-checked:bg-white">Popular</span>
            </label>

            <label className="hover:text-red-500">
                <input className="absolute opacity-0 w-0 h-0 checked:bg-white checked:text-black peer" type="radio" name="radios" value="top_rated" onClick={handleCategory} />
                <span className="p-2 peer-checked:text-black peer-checked:bg-white">Top Rated</span>
            </label>

            <label className="hover:text-red-500">
                <input className="absolute opacity-0 w-0 h-0 checked:bg-white checked:text-black peer" type="radio" name="radios" value="now_playing" onClick={handleCategory} />
                <span className="p-2 peer-checked:text-black peer-checked:bg-white">Now Playing</span>
            </label>

            <label className="hover:text-red-500">
                <input className="absolute opacity-0 w-0 h-0 checked:bg-white checked:text-black peer" type="radio" name="radios" value="upcoming" onClick={handleCategory} />
                <span className="p-2 peer-checked:text-black peer-checked:bg-white">Upcoming</span>
            </label>
        </nav>
    );
};

export default Category;
