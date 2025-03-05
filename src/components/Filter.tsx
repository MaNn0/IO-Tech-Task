import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


interface FilterProps {
    onSort: (order: "asc" | "desc") => void;
}

export default function Filter({ onSort }: FilterProps) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-7 py-2 text-md font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                    Filter
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute left-1/2 z-10 mt-2 w-40 origin-top -translate-x-1/2 rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <button
                            onClick={() => onSort("asc")}
                            className="block px-4 w-full py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden hover:bg-gray-300"
                        >
                            Low to high
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button
                            onClick={() => onSort("desc")}
                            className="block px-4 py-2 w-full text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden hover:bg-gray-300"
                        >
                            High to low
                        </button>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    );
}
