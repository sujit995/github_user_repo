
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowUserRepo from './components/ShowUserRepo';
import ProfileHeader from './components/ProfileHeader';
import PaginationComponent from './components/PaginationComponent';

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage] = useState(5);

  useEffect(() => {
    const fetchReps = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.github.com/users/mojombo/repos`);
      setItems(res.data);
      setLoading(false);
    }
    fetchReps();
  }, []);

  // Get current repo
  const indexOfLastRepo = currentPage * repoPerPage;
  const indexOfFirstRepo = indexOfLastRepo - repoPerPage;
  const currentRepo = items.slice(indexOfFirstRepo, indexOfLastRepo);

  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const prev = () => {
    return currentPage - 1
  }
  const next = () => {
    return currentPage + 1
  }
  return (
    <div className="container main">
      <ProfileHeader />
      <ShowUserRepo items={currentRepo} loading={loading} />
      <PaginationComponent repoPerPage={repoPerPage} totalRepo={items.length} paginate={paginate} />
      <nav>
        <ul className="pagination justify-content-center gap-4">
          <li className="page-item"><a onClick={prev} href="!#" className="page-link">Prev</a></li>
          <li className="page-item"><a onClick={next} href="!#" className="page-link">Next</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
