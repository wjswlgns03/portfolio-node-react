import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router의
import Home from './pages/Home';          // Home 페이지

// App 정의 
function App() {
  return (
    // Router로 애플리케이션을 감싸서 라우팅 가능하게 설정
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />             {/* 홈 경로에 대한 요소 렌더링 */}
      </Routes>
    </Router>
  );
}

export default App; // App를 기본 내보내기로 설정
