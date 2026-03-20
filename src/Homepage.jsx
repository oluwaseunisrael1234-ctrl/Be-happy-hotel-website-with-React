
import Pagination from "./components/Pagination";
import { useState } from 'react';
import "./components/Homepage.css";
    
const homedata = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
];

function Homepage() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    const totalPages = Math.ceil(homedata.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = homedata.slice(indexOfFirstItem, indexOfLastItem);

    return(
        <div>
            <h1>Homepage</h1>
      
                {currentItems.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
           
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

export default Homepage;