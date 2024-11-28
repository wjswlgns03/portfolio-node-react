const Home: React.FC = () => (
    <main>
        <section className="image-view">
            <img src="./src/assets/img/profile_img.jpg" alt="Profile" />
        </section>
        <section className="info-child">
            <h2>내 정보</h2>
            <p>여기에 사용자 정보가 들어갑니다.</p>
        </section>
        <section className="info-child">
            <h2>게시물</h2>
            <article>게시물 내용</article>
        </section>
        <section className="info-child">
            <h2>공부 기록</h2>
            <ul>
                <li>주제 1 - 공부 기록 예시</li>
                <li>주제 2 - 공부 기록 예시</li>
            </ul>
        </section>
        <section className="comment-view">
            <h2>댓글</h2>
            <p>댓글 내용</p>
        </section>
    </main>
);

export default Home;
