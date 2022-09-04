import { useState } from "react";

export const Pagination = ({ maxValue, perPage, onChange }) => {
    const numberOfTabs = Math.ceil(maxValue / perPage)
    const [selectedTab, setSelectedTab] = useState(1)

    const Tab = ({ position, name, inactive }) => {
        return <button class={"btn btn-md " + (selectedTab === position ? 'btn-active' : '') + (inactive ? ' btn-disabled' : '')} onClick={e => setSelectedTab(position)}>{name}</button>
    }



    const backwardTabs = () => {
        var tabs = []
        tabs = [...tabs, [<Tab position={1} name="First" />]]
        tabs = [...tabs, [<Tab position={selectedTab - 1} name="Previous" inactive={selectedTab === 1} />]]
        for (let i = selectedTab - 5; i < selectedTab; i++) {
            if (i > 0) {
                tabs = [tabs, ...[<Tab position={i} name={i} />]]
            }
        }
        return tabs
    }
    const forwardTabs = () => {
        var tabs = []
        for (let i = selectedTab; i < selectedTab + 5; i++) {
            if (i <= numberOfTabs) {
                tabs = [tabs, ...[<Tab position={i} name={i} />]]
            }
        }
        tabs = [...tabs, [<Tab position={selectedTab + 1} name="Next" inactive={selectedTab === numberOfTabs} />]]
        tabs = [...tabs, [<Tab position={numberOfTabs} name="Last" />]]
        return tabs
    }

    const setValue = (e) => {
        const value = parseInt(e.target.value)
        if (e.target.value !== '') {
            if (value < 1) {
                setSelectedTab(1)
            }
            else if (value > numberOfTabs) {
                setSelectedTab(numberOfTabs)
            } else {
                setSelectedTab(value)
            }
        }

    }

    onChange(selectedTab)
    return (
        <div className="flex space-x-5 justify-center">
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

            <input type="number" placeholder="Page number" class="input bg-base-200 w-28" onChange={setValue} value={selectedTab} />

        </div>

    );
}