import React from 'react';
import ReactDOM from 'react-dom/client'; // 최신 ReactDOM 모듈에서 createRoot 불러오기
import App from './App';      // 최상위 컴포넌트 App 호출
import './styles/global.css'; // 전역 스타일시트

// React.StrictMode로 App 컴포넌트를 감싸 React의 개발 모드에서 추가 경고를 활성화하고, 애플리케이션을 #root DOM에 렌더링
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App /> {/* 최상위 컴포넌트 렌더링 */}
  </React.StrictMode>
);
