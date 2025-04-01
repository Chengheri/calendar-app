import React from 'react';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: var(--card-background);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  @media print {
    display: none;
  }
`;

const ControlsGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 0.9rem;
`;

const Select = styled.select`
  padding: 0.4rem;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  font-size: 0.9rem;
`;

const Button = styled.button`
  padding: 0.4rem 0.8rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2980b9;
  }
`;

interface CalendarControlsProps {
  selectedMonth: number;
  selectedYear: number;
  setSelectedMonth: (month: number) => void;
  setSelectedYear: (year: number) => void;
  onPrint: () => void;
}

const CalendarControls: React.FC<CalendarControlsProps> = ({
  selectedMonth,
  selectedYear,
  setSelectedMonth,
  setSelectedYear,
  onPrint,
}) => {
  // Create month options
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  // Create year options (current year -5 to +5)
  const currentYear = new Date().getFullYear();
  const yearStart = currentYear - 5;
  const yearEnd = currentYear + 5;
  const years = Array.from(
    { length: yearEnd - yearStart + 1 },
    (_, i) => yearStart + i
  );

  return (
    <ControlsContainer className="no-print">
      <ControlsGroup>
        <Label htmlFor="month-select">Month:</Label>
        <Select
          id="month-select"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(parseInt(e.target.value, 10))}
        >
          {months.map((month, index) => (
            <option key={month} value={index}>
              {month}
            </option>
          ))}
        </Select>
        
        <Label htmlFor="year-select">Year:</Label>
        <Select
          id="year-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </ControlsGroup>
      
      <ControlsGroup>
        <Button onClick={onPrint}>Print Calendar</Button>
      </ControlsGroup>
    </ControlsContainer>
  );
};

export default CalendarControls; 