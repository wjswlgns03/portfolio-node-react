import { Link } from 'react-router-dom'; // 페이지 간의 이동을 위한 Link 컴포넌트 불러오기

// Header 컴포넌트 필요할 때 사용하기
const Header: React.FC = () => (
    <header>
        {/* 네비게이션 바 생성 */}
        <nav>
            <ul>
                {/* Link 컴포넌트 */}
                <li><Link to="/">홈</Link></li>               {/* 홈 페이지 */}
                <li><Link to="/about">게시물</Link></li>              {/* About 페이지 */}
                <li><Link to="/projects">공부 기록</Link></li>   {/* Projects 페이지 */}
                <li><Link to="/projects">댓글</Link></li>   {/* Projects 페이지 */}
            </ul>
        </nav>
    </header>
);

export default Header; // Header 컴포넌트를 기본 내보내기로 설정
