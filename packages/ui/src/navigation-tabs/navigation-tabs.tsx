import React from 'react'
import { navigationTabsProps } from './type'

const NavigationTabs = ({ content, filters, tabs, isTabsFirst }: navigationTabsProps) => {
    return (
        <div>
            <div className={`flex items-center justify-between ${isTabsFirst ? ' flex-row-reverse ' : ' flex-row '}`}>

                {/* filters */}
                <div className="flex flex-row items-center justify-end gap-4">
                    {
                        filters
                    }
                </div>

                {/* tabs */}
                <div className="flex flex-row items-center justify-end gap-4">
                    {tabs}
                </div>
            </div>

            { content }
        </div>
    )
}

export default NavigationTabs
