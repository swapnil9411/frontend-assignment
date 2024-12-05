import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table Component", () => {
  const projects = [
    { "s.no": 1, "percentage.funded": 75, "amt.pledged": 1000 },
    { "s.no": 2, "percentage.funded": 50, "amt.pledged": 500 },
    { "s.no": 3, "percentage.funded": null, "amt.pledged": null },
  ];

  it("renders the table with correct data", () => {
    render(<Table projects={projects} currentPage={1} recordsPerPage={3} />);

    expect(screen.getByText("S.No.")).toBeInTheDocument();
    expect(screen.getByText("Percentage Funded")).toBeInTheDocument();
    expect(screen.getByText("Amount Pledged")).toBeInTheDocument();

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("75")).toBeInTheDocument();
    expect(screen.getByText("1000")).toBeInTheDocument();

    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("500")).toBeInTheDocument();
  });

  it("handles empty projects array", () => {
    render(<Table projects={[]} currentPage={1} recordsPerPage={3} />);

    expect(screen.getByText(/S.No./i)).toBeInTheDocument();
    expect(screen.queryByText(/1/i)).not.toBeInTheDocument();
  });
});
