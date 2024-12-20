## 포트폴리오 및 공부한 것들 정리하기 위한 사이트 개발 문서

### **1개월 차: 프론트엔드 기초 및 Vite 프로젝트 설정**

- **TypeScript 기본 유틸리티 타입 학습**:
  - `Partial`, `Readonly`, `Record`, `Pick`, `Omit` 등 유틸리티 타입을 사용해 React 컴포넌트에 적용, 재사용 가능한 타입 설계 연습

- **React 및 TypeScript 기본 설정**:
  - **컴포넌트 구조 설계**: 폴더 구조 및 컴포넌트 관리 방식 정의 (e.g., /components, /hooks)
  - **Props와 State 관리**: props 전달, 상태 분리를 통해 컴포넌트 간 데이터 흐름 이해
  - **컴포넌트 타입 정의**: 함수형 컴포넌트 및 props, state 타입 지정 실습

- **Vite 프로젝트 설정**:
  - **빠른 빌드 환경**: Vite를 통한 빌드 환경 구성, React와 TypeScript 프로젝트 시작
  - **기본 UI 구축**: 초기 포트폴리오 레이아웃 설계 및 홈 페이지 구성

---

### **2개월 차: 상태 관리 및 비동기 데이터 통신 추가**

- **Zustand와 React Query 사용법 학습**:
  - **전역 상태 관리**: Zustand로 전역 상태(예: 사용자 정보, 테마) 구현하며 Context API와 비교
  - **React Query**로 비동기 데이터 처리: 서버 데이터 캐싱, 에러 관리 및 재요청 방식 학습

- **React 고급 기능**:
  - **고급 상태 관리**: `useReducer`, `Context API`로 복잡한 상태 관리 연습
  - **상태 최적화**: Zustand 셀렉터와 React의 `useMemo`, `useCallback`을 활용한 렌더링 최적화

- **상호작용 요소 추가**:
  - **UI 인터랙션 향상**: JSON을 활용해 경력 및 프로젝트 데이터 관리, 모달 팝업과 마우스오버 효과로 상호작용 개선

---

### **3개월 차: 게임 요소와 성능 최적화 및 테스트**

- **Phaser 3 및 WebSocket 활용**:
  - **Phaser 3**: 간단한 캐릭터 이동 및 상호작용 구현, 포트폴리오에 게임 요소로 활용
  - **WebSocket 기반 실시간 댓글 기능**:
    - **WebSocket 이해 및 실습**: 서버-클라이언트 실시간 통신 이해
    - **실시간 댓글 기능 구현**: WebSocket을 통해 댓글 주고받기 기능 추가, 상태 관리 및 오류 처리 로직 구현

- **추가 성능 최적화 및 최종 점검**:
  - **댓글 기능 최적화**: 실시간 댓글 업데이트 시 불필요한 리렌더링 방지
  - **React 최적화 기법 적용**: `React.memo`, `useCallback` 등 최적화 기능으로 성능 유지

- **성능 최적화 및 Lighthouse 분석**:
  - **Lighthouse로 성능 점검**: 성능 개선 영역 파악 (예: 이미지 최적화, 불필요한 렌더링 방지)
  - **React 성능 개선 기법 적용**: `React.memo`, `useMemo`, `useCallback` 등 사용

- **테스트 작성 및 최종 점검**:
  - **테스트 작성**: Jest, React Testing Library로 단위 테스트 작성
  - **최종 배포**: Netlify/Vercel 배포, 반응형 디자인 및 사용자 피드백 반영
