import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Component', () => {
  const mockPaginate = jest.fn();
  const setupPagination = (currentPage, projectsPerPage, totalProjects) => {
    render(
      <Pagination
        projectsPerPage={projectsPerPage}
        totalProjects={totalProjects}
        paginate={mockPaginate}
        currentPage={currentPage}
      />
    );
  };

  afterEach(() => {
    jest.clearAllMocks(); 
  });



  test('disables "Prev" button on the first page', () => {
    setupPagination(1, 10, 50);
    const prevButton = screen.getByRole('button', { name: /prev/i });
    expect(prevButton).toBeDisabled();
  });

  test('disables "Next" button on the last page', () => {
    setupPagination(5, 10, 50); 
    const nextButton = screen.getByRole('button', { name: /next/i });
    expect(nextButton).toBeDisabled();
  });

  test('calls paginate with correct page number when a page button is clicked', () => {
    setupPagination(1, 10, 50);
    const pageTwoButton = screen.getByRole('button', { name: '2' });
    fireEvent.click(pageTwoButton);
    expect(mockPaginate).toHaveBeenCalledWith(2);
  });

  test('calls paginate with currentPage - 1 when "Prev" is clicked', () => {
    setupPagination(2, 10, 50);
    const prevButton = screen.getByRole('button', { name: /prev/i });
    fireEvent.click(prevButton);
    expect(mockPaginate).toHaveBeenCalledWith(1); 
  });

  test('calls paginate with currentPage + 1 when "Next" is clicked', () => {
    setupPagination(2, 10, 50);
    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);
    expect(mockPaginate).toHaveBeenCalledWith(3); 
  });

  test('shows pages around the current page with boundary conditions', () => {
    setupPagination(3, 10, 100); 
    const pageButtons = screen.getAllByRole('button', { name: /^[0-9]+$/ });
    const displayedPages = pageButtons.map((button) => button.textContent);
    expect(displayedPages).toEqual(['1', '2', '3', '4', '5', '10']); 
  });
});
