import React from 'react';
import styled from 'styled-components';
import { useQuotes } from '../hooks/useQuotes';

const QuoteContainer = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: var(--card-background);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  @media print {
    box-shadow: none;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-color);
    border-radius: 0;
  }
`;

const QuoteContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const ArrowButton = styled.button<{ disabled: boolean }>`
  background-color: ${props => props.disabled ? '#f5f5f5' : '#e3f2fd'};
  border: 1px solid ${props => props.disabled ? '#eee' : 'var(--primary-color)'};
  border-radius: 50%;
  color: ${props => props.disabled ? '#ccc' : 'var(--primary-color)'};
  font-size: 1.5rem;
  font-weight: bold;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  height: 40px;
  width: 40px;
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    background-color: var(--primary-color);
    color: white;
    transform: scale(1.1);
  }
  
  @media print {
    display: none;
  }
`;

const QuoteTextWrapper = styled.div`
  flex: 1;
  padding: 0 1rem;
`;

const Quote = styled.blockquote`
  font-style: italic;
  color: var(--quote-color);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Author = styled.p`
  font-weight: 500;
  color: var(--text-color);
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  
  @media print {
    display: none;
  }
`;

const RefreshButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2980b9;
  }
`;

interface QuoteDisplayProps {
  printOnly?: boolean;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ printOnly = false }) => {
  const { 
    currentQuote, 
    getRandomQuote, 
    navigatePrevious, 
    navigateNext,
    canNavigatePrevious,
    canNavigateNext
  } = useQuotes();
  
  // We no longer need the printOnly logic since we're using a single component
  
  return (
    <QuoteContainer id="quote-container">
      <QuoteContent>
        <ArrowButton 
          onClick={navigatePrevious} 
          disabled={!canNavigatePrevious}
          className="no-print"
          aria-label="Previous quote"
        >
          ←
        </ArrowButton>
        
        <QuoteTextWrapper>
          <Quote>"{currentQuote.text}"</Quote>
          <Author>— {currentQuote.author}</Author>
        </QuoteTextWrapper>
        
        <ArrowButton 
          onClick={navigateNext} 
          disabled={!canNavigateNext}
          className="no-print"
          aria-label="Next quote"
        >
          →
        </ArrowButton>
      </QuoteContent>
      
      <ButtonContainer>
        <RefreshButton onClick={getRandomQuote} className="no-print">
          Get new quote
        </RefreshButton>
      </ButtonContainer>
    </QuoteContainer>
  );
};

export default QuoteDisplay; 