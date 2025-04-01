import React from 'react';
import Calendar from './components/Calendar';
import CalendarControls from './components/CalendarControls';
import QuoteDisplay from './components/QuoteDisplay';
import { useCalendar } from './hooks/useCalendar';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// This wrapper contains elements that should appear in the printed version
const PrintableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => {
  const { 
    selectedMonth, 
    selectedYear, 
    setSelectedMonth, 
    setSelectedYear,
    printCalendar
  } = useCalendar();

  return (
    <AppContainer>
      <ContentLayout>
        {/* Quote display - visible in both web and print */}
        <QuoteDisplay />
        
        {/* Controls - only visible in web view */}
        <CalendarControls 
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          setSelectedMonth={setSelectedMonth}
          setSelectedYear={setSelectedYear}
          onPrint={printCalendar}
          className="no-print"
        />
        
        {/* Printable content wrapper - includes calendar */}
        <PrintableWrapper id="printable-content">
          <Calendar 
            month={selectedMonth}
            year={selectedYear}
          />
        </PrintableWrapper>
      </ContentLayout>
    </AppContainer>
  );
};

export default App; 