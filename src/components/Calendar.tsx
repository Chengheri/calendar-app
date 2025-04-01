import React from 'react';
import styled from 'styled-components';
import { getDaysInMonth, getDay, format } from 'date-fns';

const CalendarContainer = styled.div`
  background-color: var(--card-background);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  overflow: hidden;
  page-break-inside: avoid;
  
  /* Print specific styles */
  @media print {
    box-shadow: none;
    border: 1px solid #ddd;
    margin: 0;
  }
`;

const CalendarHeader = styled.div`
  background-color: var(--primary-color);
  color: white;
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-top: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
`;

const WeekdayHeader = styled.div`
  padding: 0.75rem;
  text-align: center;
  font-weight: 500;
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  background-color: #f1f1f1;
`;

const DayCell = styled.div<{ isCurrentMonth: boolean; isToday: boolean }>`
  min-height: 100px;
  padding: 0.5rem;
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  background-color: ${props => props.isToday ? '#e3f2fd' : props.isCurrentMonth ? 'white' : '#f5f5f5'};
  
  @media print {
    min-height: 120px !important;
    height: 120px !important;
  }
`;

const DayNumber = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
  text-align: right;
  color: var(--text-color);
`;

// This container ensures the quote appears at the bottom of the calendar page when printed
const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media print {
    min-height: 100vh;
    justify-content: space-between;
  }
`;

// The footer will only be visible in print mode
const PrintFooter = styled.div`
  display: none;
  
  @media print {
    display: block;
    margin-top: auto;
    padding-top: 1rem;
  }
`;

interface CalendarProps {
  month: number;
  year: number;
}

const Calendar: React.FC<CalendarProps> = ({ month, year }) => {
  // Date for displaying month name
  const currentMonthDate = new Date(year, month, 1);
  const daysInMonth = getDaysInMonth(currentMonthDate);
  const firstDayOfMonth = getDay(currentMonthDate);
  const today = new Date();
  
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Create day cells array
  const days = [];
  
  // Add empty cells for days before the 1st of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(
      <DayCell key={`empty-${i}`} isCurrentMonth={false} isToday={false}>
        <DayNumber></DayNumber>
      </DayCell>
    );
  }
  
  // Add cells for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const isToday = 
      date.getDate() === today.getDate() && 
      date.getMonth() === today.getMonth() && 
      date.getFullYear() === today.getFullYear();
    
    days.push(
      <DayCell key={day} isCurrentMonth={true} isToday={isToday}>
        <DayNumber>{day}</DayNumber>
      </DayCell>
    );
  }
  
  return (
    <CalendarWrapper>
      <CalendarContainer id="printable-calendar">
        <CalendarHeader>
          {format(currentMonthDate, 'MMMM yyyy')}
        </CalendarHeader>
        <CalendarGrid>
          {weekdays.map(day => (
            <WeekdayHeader key={day}>{day}</WeekdayHeader>
          ))}
          {days}
        </CalendarGrid>
      </CalendarContainer>
      
      {/* The printed quote will be injected here by the QuoteDisplay component */}
      <PrintFooter />
    </CalendarWrapper>
  );
};

export default Calendar; 