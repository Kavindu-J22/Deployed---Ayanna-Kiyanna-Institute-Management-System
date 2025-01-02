import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(140deg, #4e335f, #47be90);
  font-family: 'Poppins', sans-serif;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 45px;
  color: #f5f5e4;
  margin: 15px 0 20px;
  font-weight: 600;
  text-align: center;
`;

const MonthButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const MonthButton = styled.button`
  position: relative;
  padding: 12px 24px;
  background: linear-gradient(135deg, #6e45e2, #77d4b8);
  color: white;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: 0.4s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
  }

  &:hover:before {
    transform: scale(1.2);
    opacity: 0.4;
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: linear-gradient(135deg, #ff6b81, #f7e2a1);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    transition: all 0.4s ease;
    z-index: -1;
  }

  ${(props) => props.active && `
    background: linear-gradient(135deg, #4e8ab6, #66c6a6);
    transform: scale(1.05);
  `}
`;

const CalendarWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  height: 800px;
  perspective: 1500px;
  overflow: hidden;
`;

const Page = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  backface-visibility: hidden;
  transform-origin: right center;
  transition: transform 1s ease-in-out;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
`;

const Navigation = styled.div`
  position: absolute;
  top: 60%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.44);
  color: white;
  border-radius: 50%;
  font-size: 24px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(76, 162, 175, 0.22);
    transform: scale(1.1);
  }
`;

const pages = [
  'cal1_lkku3n.png', 'cal2_vmh2vy.png', 'cal3_llcfzh.png', 'cal4_u4q023.png',
  'cal5_aa0rix.png', 'cal6_kartfu.png', 'cal7_ys4j6p.png', 'cal8_uu5okb.png',
  'cal9_r9uzyr.png', 'cal10_epkm2a.png', 'cal11_gozvjf.png', 'cal12_kdmplc.png', 'cal13_dozxsf.png'
];

const monthNames = [
  'Home 📅', 'January ☃️', 'February 💘', 'March 🌼', 'April 🌷',
  'May 🌞', 'June 🌈', 'July 🌻', 'August 🌴',
  'September 🍂', 'October 🎃', 'November 🦃', 'December 🎄'
];

const Calendar = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const flipSound = useRef(null);

  useEffect(() => {
    playSound();
  }, [currentPage]);

  const playSound = () => {
    if (flipSound.current) {
      flipSound.current.currentTime = 0;
      flipSound.current.play();
    }
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const jumpToPage = (index) => {
    setCurrentPage(index);
  };

  return (
    <CalendarContainer>
      <Title>📜 අයන්න කියන්න E-Calendar 📚</Title>
      <MonthButtons>
        {monthNames.map((month, index) => (
          <MonthButton
            key={index}
            onClick={() => jumpToPage(index)}
            active={currentPage === index}
          >
            {month}
          </MonthButton>
        ))}
      </MonthButtons>
      <CalendarWrapper>
        {pages.map((page, index) => (
          <Page
            key={index}
            style={{
              transform: index <= currentPage ? 'rotateY(0deg)' : 'rotateY(180deg)',
              backgroundImage: `url(https://res.cloudinary.com/db8kwduja/image/upload/v1735803610/${page})`
            }}
          />
        ))}
        <Navigation>
          <NavButton onClick={handlePrev}>&lt;</NavButton>
          <NavButton onClick={handleNext}>&gt;</NavButton>
        </Navigation>
      </CalendarWrapper>
      <audio ref={flipSound} src="https://res.cloudinary.com/dgecq2e6l/video/upload/v1735802717/cwx6k1kzpz4d3oztjl9p.mp3" />
    </CalendarContainer>
  );
};

export default Calendar;
