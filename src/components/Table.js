import React from 'react';

const Table = ({ projects, currentPage, recordsPerPage }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Percentage Funded</th>
          <th>Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <tr key={project["s.no"]}>
            <td>{(currentPage - 1) * recordsPerPage + index + 1}</td>
            <td>{project["percentage.funded"] ? project["percentage.funded"] : 'N/A'}</td>
            <td>{project["amt.pledged"] ? project["amt.pledged"] : 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
