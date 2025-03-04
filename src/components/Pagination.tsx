"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = 97;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // const handlePageClick = (page) => {
    //     setCurrentPage(page);
    // };

    const renderPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        if (startPage > 1) {
            pages.push(
                <span
                    key="start-ellipsis"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0"
                >
                    ...
                </span>
            );
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <a
                    key={i}
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        // handlePageClick(i); 
                    }}
                    aria-current={i === currentPage ? "page" : undefined}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${i === currentPage
                        ? "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        : "text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        }`}
                >
                    {i}
                </a>
            );
        }

        if (endPage < totalPages) {
            pages.push(
                <span
                    key="end-ellipsis"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0"
                >
                    ...
                </span>
            );
        }

        return pages;
    };

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        handlePrevious();
                    }}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNext();
                    }}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>

            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{" "}
                        <span className="font-medium">{Math.min(currentPage * itemsPerPage, totalItems)}</span> of{" "}
                        <span className="font-medium">{totalItems}</span> results
                    </p>
                </div>
                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handlePrevious();
                            }}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon aria-hidden="true" className="size-5" />
                        </a>
                        {renderPageNumbers()}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNext();
                            }}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon aria-hidden="true" className="size-5" />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}