import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false); 
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login'); 
    window.location.reload();
  }

  return (
    <header className="header">
      <h1>
        <Link to="/" title="메인페이지로 바로가기">
          <img src={`${process.env.PUBLIC_URL}/images/logo_clr.png`} alt="상단로고" />
        </Link>
      </h1>

      <button className="toggle_btn" onClick={()=>setMenuOpen(true)}>
        <img src={`${process.env.PUBLIC_URL}/images/topIcon_burger.png`} alt="메뉴보기" />
      </button>

      <Link to="/cart" title="장바구니" className="cart_btn">
        <img src={`${process.env.PUBLIC_URL}/images/topIcon_cart.png`} alt="장바구니" />
      </Link>

      <nav className="navi" style={{
        left:menuOpen?'0%':'-100%'
        //삼항조건연산자 = 조건식?참인값:거짓인값
      }}>
        <button className="close_btn" onClick={()=>setMenuOpen(false)}>
            <img src={`${process.env.PUBLIC_URL}/images/btn_close.png`} alt="닫기" />
        </button>
  
        <ul className="gnb">
          <li><Link to="/"  title="지니펫 쇼핑몰" onClick={()=>setMenuOpen(false)}>지니펫 쇼핑몰</Link></li>
          <li><Link to="intro"  title="브랜드 소개" onClick={()=>setMenuOpen(false)}>브랜드 소개</Link></li>
          <li><Link to="info"  title="반려견 정보" onClick={()=>setMenuOpen(false)}>반려견 정보</Link></li>
          <li><Link to="event"  title="이벤트" onClick={()=>setMenuOpen(false)}>이벤트</Link></li>
          <li><Link to="customer"  title="고객지원" onClick={()=>setMenuOpen(false)}>고객지원</Link></li>
        </ul>
  
        <ul className="form_navi">
          <li><Link to="/login" title="로그인" onClick={()=>setMenuOpen(false)}>로그인</Link></li>
          <li><Link to="/join" title="회원가입" onClick={()=>setMenuOpen(false)}>회원가입</Link></li>
          <li><Link to="/order" title="주문조회" onClick={()=>setMenuOpen(false)}>주문조회</Link></li>
          <li><Link to="/cart" title="장바구니" onClick={()=>setMenuOpen(false)}>장바구니</Link></li>
        </ul>
        {username ? (
          <span style={{color:'#fff'}}>
            <b>{username}</b>님 환영합니다.
            <button onClick={handleLogout} style={{marginLeft: '10px'}}>로그아웃</button>
          </span>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;