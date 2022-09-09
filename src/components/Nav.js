import { Link } from 'react-router-dom';
import { SimpleSearch } from '../services/Search';
export const Nav = () => {
    return (
        <>
            <div class="navbar bg-base-100 w-10/12 mx-auto">
                <div class="">
                    <Link class="btn btn-ghost text-xl uppercase" to="/">Movie App</Link>
                </div>
                <div className="grow">
                    <div className='hidden md:block w-full'>
                        <SimpleSearch />
                    </div>
                </div>
                <div class="flex-none gap-2">
                    <Link to={"/search"} className="btn btn-ghost">Advanced Search</Link>
                </div>
            </div>
            <div className="w-full px-5 py-3 md:hidden">
                <SimpleSearch />
            </div>
        </>

    );
}