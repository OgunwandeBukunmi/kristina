"use client";

import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  hasMore?: boolean;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  // Calculate sliding window range (3 pages max)
  const getVisiblePages = () => {
    const halfWindow = 1; // Show 1 page before and 1 after current
    let start = Math.max(1, currentPage - halfWindow);
    const end = Math.min(totalPages, start + 2);

    // Adjust if we're near the end
    if (end === totalPages) {
      start = Math.max(1, end - 2);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <nav className="flex items-center justify-center gap-2 mt-16 mb-8">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-xl border border-white/5 bg-secondary/40 text-gray-400 hover:text-pink-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-xl border transition-all text-sm font-medium ${
              currentPage === page
                ? "bg-pink-600 border-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                : "bg-secondary/40 border-white/5 text-gray-400 hover:border-pink-500/30 hover:text-pink-300"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-xl border border-white/5 bg-secondary/40 text-gray-400 hover:text-pink-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
}
