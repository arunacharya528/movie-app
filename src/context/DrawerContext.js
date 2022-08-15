import { createContext, useState } from "react";

export const DrawerContext = createContext({
    setSideBarContent: Function
})

export const DrawerProvider = ({ children }) => {

    const [sideBarContent, setSideBarContent] = useState(<></>);
    return (
        <DrawerContext.Provider value={{
            setSideBarContent
        }}>
            <div class="drawer drawer-end">
                <input id="drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {children}
                </div>
                <div class="drawer-side">
                    <label for="drawer" class="drawer-overlay"></label>
                    <div className="w-10/12 md:w-2/3 lg:w-1/2 p-4 overflow-y-auto bg-base-100 text-base-content">
                        {sideBarContent}
                    </div>
                </div>

            </div>
        </DrawerContext.Provider>
    );
}