'use client'

import * as React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface PaginationBlockProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const PaginationBlock: React.FC<PaginationBlockProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <Pagination>
      <PaginationContent className="flex justify-center">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault()
              if (currentPage > 0) onPageChange(currentPage - 1)
            }}
            aria-disabled={currentPage === 0}
            className={currentPage === 0 ? 'opacity-50 pointer-events-none' : ''}
          />
        </PaginationItem>

        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={page === currentPage + 1}
              onClick={(e) => {
                e.preventDefault()
                onPageChange(page - 1)
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault()
              if (currentPage < totalPages - 1) onPageChange(currentPage + 1)
            }}
            aria-disabled={currentPage === totalPages - 1}
            className={currentPage === totalPages - 1 ? 'opacity-50 pointer-events-none' : ''}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
