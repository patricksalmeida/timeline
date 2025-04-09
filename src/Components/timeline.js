import React from 'react'
import { formatDateInUsPattern } from '../utils/date'

function Root({ children }) {
    return (
        <div className="flex flex-col gap-2">
            {children}
        </div>
    )
}

function Lane({ children }) {
    return (
        <div className="relative flex justify-between py-2 overflow-auto">
            {children}
        </div>
    )
}

function ItemContent({ item, onChange }) {
    const [enableEdit, setEnableEdit] = React.useState(false)
    const [newItemName, setNewItemName] = React.useState(item.name)

    return (
        <div className="relative flex flex-col items-start w-full">
            <div className="group relative flex flex-col items-center gap-2">
                <div className="relative flex flex-col items-center mx-2">
                    <div className="z-9997 flex flex-col items-center gap-1 p-3 bg-gray-200 group-hover:bg-gray-400 group-hover:cursor-pointer rounded-sm">
                        <div className="text-nowrap font-semibold text-gray-700 group-hover:text-slate-50">
                            {!enableEdit && (
                                <span onClick={() => setEnableEdit(true)}>{item.name}</span>
                            )}
                            {enableEdit && (
                                <input
                                    value={newItemName}
                                    onChange={(event) => setNewItemName(event.target.value)}
                                    onBlur={() => {
                                        onChange && onChange(item, newItemName)
                                        setEnableEdit(false)
                                    }}
                                />
                            )}
                        </div>
                        <div className="text-nowrap text-sm text-gray-400 group-hover:text-slate-50">
                            Start at {formatDateInUsPattern(item.start)}
                        </div>
                    </div>

                    <div className="z-9998 absolute -bottom-4 w-4 h-4 bg-gray-200 group-hover:bg-gray-400 [clip-path:polygon(100%_0%,50%_50%,0%_0%)]"></div>
                </div>

                <div className="z-9999 bg-gray-300 group-hover:bg-gray-400 rounded-full h-5 w-5 border-4 border-gray-50"></div>
            </div>

            <div className="absolute z-9998 bottom-[10px] w-full bg-zinc-200 p-[1px]"></div>
        </div>
    )
}

module.exports = {
    Root,
    Lane,
    ItemContent,
}