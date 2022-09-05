import { Link } from 'react-router-dom';
import { SimpleSearch } from '../services/Search';
export const Nav = () => {
    return (
        <>
            <div class="navbar bg-base-100 space-x-10">
                <div class="">
                    <Link class="btn btn-ghost text-xl uppercase" to="/">Movie App</Link>
                </div>
                <div className="grow">
                    <div className='hidden md:block w-full'>
                        <SimpleSearch />
                    </div>                    
                </div>
                <div class="flex-none gap-2">
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full px-5 py-3 md:hidden">
                <SimpleSearch/>
            </div>
        </>

    );
}