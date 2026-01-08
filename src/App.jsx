const kpiData = [
  { label: "후보 물질", value: "128", trend: "+12% 지난달", status: "up" },
  { label: "전임상 진행", value: "32", trend: "+4 신규", status: "up" },
  { label: "임상 단계", value: "9", trend: "변동 없음", status: "neutral" },
  { label: "리스크 알림", value: "5", trend: "-2 개선", status: "down" },
];

const pipelineProgress = [
  { title: "Lead Optimization", subtitle: "예측 성공률 72%", value: 72 },
  { title: "In vitro Assay", subtitle: "표준화 지수 64%", value: 64 },
  { title: "독성 예측 모델", subtitle: "데이터 커버리지 89%", value: 89 },
];

const screeningQueue = [
  { title: "Compound Set A", subtitle: "2,340 compounds", badge: "정상", tone: "success" },
  { title: "Rare Disease Target", subtitle: "1,120 compounds", badge: "검토 필요", tone: "warning" },
  { title: "Immunotherapy Mix", subtitle: "980 compounds", badge: "정상", tone: "success" },
  { title: "Fast Track Build", subtitle: "1,560 compounds", badge: "지연", tone: "danger" },
];

const clinicalStats = [
  { label: "부작용 리포트", value: "18건", trend: "-6% 감소", status: "down" },
  { label: "환자 리텐션", value: "92%", trend: "+3% 상승", status: "up" },
  { label: "지역별 모집률", value: "74%", trend: "동일", status: "neutral" },
];

const chartBars = [45, 68, 82];

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">RX</div>
          <div>
            <p className="brand-title">NovaR&D</p>
            <p className="brand-subtitle">Drug Discovery Suite</p>
          </div>
        </div>
        <nav className="nav">
          <a className="nav-item active" href="#">
            대시보드
          </a>
          <a className="nav-item" href="#">
            파이프라인
          </a>
          <a className="nav-item" href="#">
            AI 스크리닝
          </a>
          <a className="nav-item" href="#">
            임상 데이터
          </a>
          <a className="nav-item" href="#">
            리포트
          </a>
        </nav>
        <div className="sidebar-footer">
          <p>프로젝트: NVR-2024</p>
          <button className="primary-button" type="button">
            새 프로젝트
          </button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <h1>신약개발 플랫폼 대시보드</h1>
            <p>실시간 파이프라인 상태와 연구 효율 지표를 확인하세요.</p>
          </div>
          <div className="topbar-actions">
            <button className="ghost-button" type="button">
              알림 3
            </button>
            <button className="primary-button" type="button">
              리포트 생성
            </button>
          </div>
        </header>

        <section className="kpi-grid">
          {kpiData.map((kpi) => (
            <article className="kpi-card" key={kpi.label}>
              <p>{kpi.label}</p>
              <h2>{kpi.value}</h2>
              <span className={`trend ${kpi.status}`}>{kpi.trend}</span>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="card">
            <div className="card-header">
              <h3>파이프라인 진행 현황</h3>
              <span>이번 주 업데이트</span>
            </div>
            <div className="progress-list">
              {pipelineProgress.map((item) => (
                <div className="progress-item" key={item.title}>
                  <div>
                    <p>{item.title}</p>
                    <span>{item.subtitle}</span>
                  </div>
                  <div className="progress">
                    <div style={{ width: `${item.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="card">
            <div className="card-header">
              <h3>AI 스크리닝 큐</h3>
              <span>오늘 처리 예정</span>
            </div>
            <ul className="queue">
              {screeningQueue.map((item) => (
                <li key={item.title}>
                  <div>
                    <p>{item.title}</p>
                    <span>{item.subtitle}</span>
                  </div>
                  <span className={`badge ${item.tone}`}>{item.badge}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card wide">
            <div className="card-header">
              <h3>임상 데이터 요약</h3>
              <span>최근 30일</span>
            </div>
            <div className="clinical-grid">
              {clinicalStats.map((stat) => (
                <div key={stat.label}>
                  <p className="stat-label">{stat.label}</p>
                  <h2>{stat.value}</h2>
                  <span className={`trend ${stat.status}`}>{stat.trend}</span>
                </div>
              ))}
            </div>
            <div className="chart-placeholder">
              <div>
                <p>임상 단계별 진행률</p>
                <span>Phase I / II / III</span>
              </div>
              <div className="chart-bars">
                {chartBars.map((height, index) => (
                  <span key={`${height}-${index}`} style={{ height: `${height}%` }}></span>
                ))}
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
