import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Nav({ menuOpen, setMenuOpen }) {
  const linkStyle = {
    display: 'block',
    padding: '10px 0',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '25px'
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      boxShadow: '2px 0 8px rgba(0, 0, 0, 0.3)',
      transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
      padding: '20px',
      zIndex: 1100
    }}>
      {/* 닫기 버튼 추가 */}
      <button
        onClick={() => setMenuOpen(false)}
        style={{
          background: 'transparent',
          border: 'none',
          fontSize: '50px',
          cursor: 'pointer',
          color: '#fff',
          marginBottom: '15px',
          display: 'block',
          paddingLeft: 0,   // 왼쪽 여백 제거
          textAlign: 'left' // 텍스트 정렬 왼쪽으로
        }}
        aria-label="메뉴 닫기"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>

      <nav>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '60px', marginBottom: 0 }}>
          <li><a href="#menu1" style={linkStyle} onClick={() => setMenuOpen(false)}>지니펫 쇼핑몰</a></li>
          <li><a href="#menu2" style={linkStyle} onClick={() => setMenuOpen(false)}>브랜드 소개</a></li>
          <li><a href="#menu3" style={linkStyle} onClick={() => setMenuOpen(false)}>반려견 정보</a></li>
          <li><a href="#menu4" style={linkStyle} onClick={() => setMenuOpen(false)}>이벤트</a></li>
          <li><a href="#menu5" style={linkStyle} onClick={() => setMenuOpen(false)}>고객지원</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
