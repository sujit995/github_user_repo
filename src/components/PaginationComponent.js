import React from 'react'

const PaginationComponent = ({ repoPerPage, totalRepo, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalRepo / repoPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav>
                <ul className="pagination justify-content-center">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} href="!#" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default PaginationComponent