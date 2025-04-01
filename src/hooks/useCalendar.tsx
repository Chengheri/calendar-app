import { useState, useCallback } from 'react';

export const useCalendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState<Date>(today);
  const [selectedMonth, setSelectedMonth] = useState<number>(today.getMonth());
  const [selectedYear, setSelectedYear] = useState<number>(today.getFullYear());

  // Function to print the calendar directly using browser print
  const printCalendar = useCallback(() => {
    try {
      // Add a class to the body to trigger print-specific CSS
      document.body.classList.add('printing');
      
      // Use the browser's print functionality
      window.print();
      
      // Remove the class after printing dialog is closed
      setTimeout(() => {
        document.body.classList.remove('printing');
      }, 1000);
      
    } catch (error) {
      console.error('Error printing calendar:', error);
      document.body.classList.remove('printing');
    }
  }, []);

  return {
    currentDate,
    selectedMonth,
    selectedYear,
    setCurrentDate,
    setSelectedMonth,
    setSelectedYear,
    printCalendar
  };
}; 