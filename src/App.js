import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Pagination from "./components/Pagination";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
      );
      const data = await response.json();
      setProjects(data);
    };

    fetchData();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = projects.slice(indexOfFirstRecord, indexOfLastRecord);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1>Kickstarter Projects</h1>
      <Table
        projects={currentRecords}
        currentPage={currentPage}
        recordsPerPage={recordsPerPage}
      />
      <Pagination
        projectsPerPage={recordsPerPage}
        totalProjects={projects.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
