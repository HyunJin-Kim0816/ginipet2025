import React from 'react';

function Main(props) {
  return (
    <main>
      <section>
        <h2>메인 슬라이드</h2>
        <video muted autoPlay loop style={{width:'100%'}}>
          <source src={`${process.env.PUBLIC_URL}/movie/top.mp4`} />
        </video>
      </section>

      <section>
        <h2>지니펫 쇼핑하러 가기</h2>
        
      </section>

      <section>
        <h2>지니펫 스토리</h2>
        
      </section>

      <section>
        <h2>지니펫in 스타</h2>
        
      </section>
    </main>
  );
}

export default Main;