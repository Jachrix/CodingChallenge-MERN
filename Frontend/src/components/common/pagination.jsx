import React from 'react';
import propTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const Pagination = ({ itemCount, pageSize, currentPage, onPageChange }) => {
    //console.log(currentPage);
    
    const pagesCount = Math.ceil(itemCount/pageSize);
    //console.log(pagesCount);
    if(pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="/#">Previous</a></li>
                { pages.map(page => (
                    <li key={page} className={ page === currentPage ? 'page-item active': 'page-item'}>
                        <Link className="page-link" to="/books" onClick={() => onPageChange(page)} >{page}</Link>
                    </li>
                ))}                
                <li className="page-item"><a className="page-link" href="/#">Next</a></li>
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    itemCount: propTypes.number.isRequired,
    pageSize: propTypes.number.isRequired, 
    currentPage: propTypes.number.isRequired, 
    onPageChange: propTypes.func.isRequired
}
 
export default Pagination;