import { useContext } from "react";
import { useState } from "react";
import { SearchContext } from "./SearchContext";

export const Pagination = ({ maxValue, perPage, showJump }) => {
    const numberOfTabs = Math.ceil(maxValue / perPage)
    const difference = 3;
    const { page, setPage } = useContext(SearchContext)

    const Tab = ({ position, name, inactive }) => {
        return <button class={"btn btn-xs sm:btn-sm md:btn-md " + (page === position ? 'btn-active' : '') + (inactive ? ' btn-disabled' : '')} onClick={e => setPage(position)}>{name}</button>
    }

    const backwardTabs = () => {
        var tabs = []
        tabs = [...tabs, [<Tab position={1} name="First" />]]
        tabs = [...tabs, [<Tab position={page - 1} name="Previous" inactive={page === 1} />]]
        for (let i = page - difference+1; i < page; i++) {
            if (i > 0) {
                tabs = [tabs, ...[<Tab position={i} name={i} />]]
            }
        }
        return tabs
    }
    const forwardTabs = () => {
        var tabs = []
        for (let i = page; i < page + difference; i++) {
            if (i <= numberOfTabs) {
                tabs = [tabs, ...[<Tab position={i} name={i} />]]
            }
        }
        tabs = [...tabs, [<Tab position={page + 1} name="Next" inactive={page === numberOfTabs} />]]
        tabs = [...tabs, [<Tab position={numberOfTabs} name="Last" />]]
        return tabs
    }

    const setValue = (e) => {
        const value = parseInt(e.target.value)
        if (e.target.value !== '') {
            if (value < 1) {
                setPage(1)
            }
            else if (value > numberOfTabs) {
                setPage(numberOfTabs)
            } else {
                setPage(value)
            }
        }

    }

    // onChange(page)
    return (
        <div className="flex flex-col space-y-5 justify-center items-center py-10">
            <div className="btn-group">
                {
                    backwardTabs().map((tab) =>
                        <>{tab}</>
                    )
                }
                {
                    forwardTabs().map((tab) =>
                        <>{tab}</>
                    )
                }
            </div>
            {
                showJump ?
                    <input type="number" placeholder="Page number" class="input bg-base-200 w-28" onChange={setValue} value={page} />
                    : ''
            }

        </div>

    );
}