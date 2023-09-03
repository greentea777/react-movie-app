const Category = ({ handleCategory }) => {
    return (
        <nav className="grid grid-cols-2 justify-items-center min-[400px]:flex min-[400px]:justify-evenly min-[400px]:p-5">
            <label className="w-full hover:text-red-500 min-[400px]:w-auto">
                <input className="absolute opacity-0 w-0 h-0 checked:bg-white checked:text-black peer" type="radio" name="radios" value="popular" onClick={handleCategory} />
                <span className="flex justify-center sm:p-2 peer-checked:text-black peer-checked:bg-white">Popular</span>
            </label>

            <label className="w-full hover:text-red-500 min-[400px]:w-auto">
                <input className="absolute opacity-0 w-0 h-0 checked:bg-white checked:text-black peer" type="radio" name="radios" value="top_rated" onClick={handleCategory} />
                <span className="flex justify-center sm:p-2 peer-checked:text-black peer-checked:bg-white">Top Rated</span>
            </label>

            <label className="w-full hover:text-red-500 min-[400px]:w-auto">
                <input className="absolute opacity-0 w-0 h-0 checked:bg-white checked:text-black peer" type="radio" name="radios" value="now_playing" onClick={handleCategory} />
                <span className="flex justify-center sm:p-2 peer-checked:text-black peer-checked:bg-white">Now Playing</span>
            </label>

            <label className="w-full hover:text-red-500 min-[400px]:w-auto">
                <input className="absolute opacity-0 w-0 h-0 checked:bg-white checked:text-black peer" type="radio" name="radios" value="upcoming" onClick={handleCategory} />
                <span className="flex justify-center sm:p-2 peer-checked:text-black peer-checked:bg-white">Upcoming</span>
            </label>
        </nav>
    );
};

export default Category;
