import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedVersion, setSelectedVersion] = useState('personal')
  const [selectedRole, setSelectedRole] = useState('developer')
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  // 智慧UI演示狀態
  const [smartUIDemo, setSmartUIDemo] = useState({
    version: 'personal',
    role: 'developer',
    features: ['coding', 'testing', 'deployment']
  })

  // 版本配置
  const versionConfigs = {
    community: {
      name: 'Community版',
      price: '免費',
      features: ['編碼實現', '基礎測試', '開源透明'],
      nodes: 3,
      color: 'green'
    },
    personal: {
      name: 'Personal Pro版',
      price: '$19/月',
      features: ['編碼實現', '測試驗證', '部署發布', '隱私雲同步'],
      nodes: 3,
      color: 'blue'
    },
    enterprise: {
      name: 'Enterprise版',
      price: '$120/月',
      features: ['需求分析', '架構設計', '編碼實現', '測試驗證', '部署發布', '監控運維'],
      nodes: 6,
      color: 'purple'
    }
  }

  // 智慧UI演示組件
  const SmartUIDemo = () => (
    <div className="smart-ui-demo">
      <div className="demo-controls">
        <h3>🧠 智慧UI實時演示</h3>
        <div className="control-group">
          <label>選擇版本：</label>
          <select 
            value={smartUIDemo.version} 
            onChange={(e) => setSmartUIDemo({...smartUIDemo, version: e.target.value})}
          >
            <option value="community">Community版</option>
            <option value="personal">Personal Pro版</option>
            <option value="enterprise">Enterprise版</option>
          </select>
        </div>
        <div className="control-group">
          <label>選擇角色：</label>
          <select 
            value={smartUIDemo.role} 
            onChange={(e) => setSmartUIDemo({...smartUIDemo, role: e.target.value})}
          >
            <option value="developer">編碼者</option>
            <option value="tester">測試者</option>
            <option value="admin">管理員</option>
          </select>
        </div>
      </div>
      
      <div className="ui-preview">
        <div className={`mock-ui ${smartUIDemo.version} ${smartUIDemo.role}`}>
          <div className="ui-header">
            <h4>PowerAutomation {versionConfigs[smartUIDemo.version].name}</h4>
            <span className="role-badge">{smartUIDemo.role === 'developer' ? '編碼者' : smartUIDemo.role === 'tester' ? '測試者' : '管理員'}</span>
          </div>
          
          <div className="ui-nodes">
            {smartUIDemo.version === 'enterprise' && smartUIDemo.role === 'admin' ? (
              // 企業版管理員看到6個節點
              <>
                <div className="node">📋 需求分析</div>
                <div className="node">🏗️ 架構設計</div>
                <div className="node active">💻 編碼實現</div>
                <div className="node">🧪 測試驗證</div>
                <div className="node">🚀 部署發布</div>
                <div className="node">📊 監控運維</div>
              </>
            ) : (
              // 其他情況看到3個節點
              <>
                <div className="node active">💻 編碼實現</div>
                <div className="node">🧪 測試驗證</div>
                <div className="node">🚀 部署發布</div>
              </>
            )}
          </div>
          
          <div className="ui-features">
            {smartUIDemo.role === 'developer' && (
              <div className="feature-panel">
                <h5>🤖 AI編程助手</h5>
                <div className="feature-items">
                  <span>💡 代碼建議</span>
                  <span>🔧 自動修復</span>
                  <span>📝 生成註釋</span>
                </div>
              </div>
            )}
            
            {smartUIDemo.role === 'tester' && (
              <div className="feature-panel">
                <h5>🧪 智能測試</h5>
                <div className="feature-items">
                  <span>🔍 質量檢查</span>
                  <span>⚠️ 問題檢測</span>
                  <span>📈 覆蓋率分析</span>
                </div>
              </div>
            )}
            
            {smartUIDemo.role === 'admin' && (
              <div className="feature-panel">
                <h5>👑 管理控制</h5>
                <div className="feature-items">
                  <span>👥 用戶管理</span>
                  <span>🏗️ 項目管理</span>
                  <span>📊 統計分析</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  // 首頁組件
  const HomePage = () => (
    <div className="home-page">
      {/* Hero區域 */}
      <section className="hero">
        <div className="hero-content">
          <h1>PowerAutomation</h1>
          <h2>企業級隱私保護的AI自動化平台</h2>
          <p>多智能體協作 • 端到端閉環 • 隱私優先</p>
          
          {/* Demo視頻區域 */}
          <div className="demo-video-section">
            <div className="video-background">
              <button 
                className="play-button"
                onClick={() => setIsVideoModalOpen(true)}
              >
                ▶️ 觀看完整演示 (5分鐘)
              </button>
            </div>
            
            <div className="value-props">
              <div className="value-item">
                <div className="icon">⏱️</div>
                <h3>3秒生成</h3>
                <p>從需求到代碼</p>
              </div>
              <div className="value-item">
                <div className="icon">📈</div>
                <h3>效率提升300%</h3>
                <p>開發速度飛躍</p>
              </div>
              <div className="value-item">
                <div className="icon">🛡️</div>
                <h3>100%隱私保護</h3>
                <p>代碼永不離開</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 智慧UI特性展示 */}
      <section className="smart-ui-section">
        <div className="container">
          <h2>🧠 革命性智慧UI系統</h2>
          <p>根據版本、角色、權限智能適配界面，提供個性化體驗</p>
          
          <SmartUIDemo />
          
          <div className="smart-ui-features">
            <div className="feature">
              <h3>🎯 版本感知</h3>
              <p>自動識別Community/Personal/Enterprise版本</p>
            </div>
            <div className="feature">
              <h3>👤 角色適配</h3>
              <p>編碼者/測試者/管理員看到不同界面</p>
            </div>
            <div className="feature">
              <h3>🔄 動態佈局</h3>
              <p>根據權限和需求實時調整UI</p>
            </div>
            <div className="feature">
              <h3>🧠 學習優化</h3>
              <p>基於使用習慣智能優化界面</p>
            </div>
          </div>
        </div>
      </section>

      {/* 多智能體系統 */}
      <section className="multi-agent-section">
        <div className="container">
          <h2>🎭 多智能體Role Playing系統</h2>
          <p>4個專業智能體協作，處理速度提升5-10倍</p>
          
          <div className="agents-grid">
            <div className="agent">
              <div className="agent-icon">💻</div>
              <h3>編碼智能體</h3>
              <p>專精代碼生成和優化</p>
              <ul>
                <li>AI代碼補全</li>
                <li>智能重構</li>
                <li>代碼質量檢查</li>
              </ul>
            </div>
            
            <div className="agent">
              <div className="agent-icon">🧪</div>
              <h3>測試智能體</h3>
              <p>專注質量保證和驗證</p>
              <ul>
                <li>自動測試生成</li>
                <li>覆蓋率分析</li>
                <li>性能測試</li>
              </ul>
            </div>
            
            <div className="agent">
              <div className="agent-icon">🚀</div>
              <h3>部署智能體</h3>
              <p>負責發布和環境管理</p>
              <ul>
                <li>一鍵部署</li>
                <li>環境配置</li>
                <li>版本管理</li>
              </ul>
            </div>
            
            <div className="agent">
              <div className="agent-icon">🎯</div>
              <h3>協調智能體</h3>
              <p>統籌全局和資源調度</p>
              <ul>
                <li>任務分配</li>
                <li>負載均衡</li>
                <li>流程優化</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 六大技術護城河 */}
      <section className="tech-moats-section">
        <div className="container">
          <h2>🛡️ 六大技術護城河</h2>
          
          <div className="moats-grid">
            <div className="moat">
              <h3>🎭 多智能體協作</h3>
              <p>4個專業智能體並行處理，效率提升5-10倍</p>
            </div>
            
            <div className="moat">
              <h3>🧠 智能引擎+測試驅動</h3>
              <p>AI驅動的測試自動化革命</p>
            </div>
            
            <div className="moat">
              <h3>🛡️ 隱私優先架構</h3>
              <p>100%本地存儲，數據主權保護</p>
            </div>
            
            <div className="moat">
              <h3>🧠 智慧UI適配</h3>
              <p>根據版本角色智能調整界面</p>
            </div>
            
            <div className="moat">
              <h3>☁️ 端雲協同技術</h3>
              <p>最小化雲端交互，最大化隱私保護</p>
            </div>
            
            <div className="moat">
              <h3>🌍 開源透明生態</h3>
              <p>Community版完全開源，可審計</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  // 版本對比頁面
  const VersionComparisonPage = () => (
    <div className="version-comparison-page">
      <div className="container">
        <h1>選擇適合您的版本</h1>
        <p>隱私優先，三版本統一原則</p>
        
        <div className="versions-grid">
          {Object.entries(versionConfigs).map(([key, config]) => (
            <div key={key} className={`version-card ${key}`}>
              <div className="version-header">
                <h3>{config.name}</h3>
                <div className="price">{config.price}</div>
              </div>
              
              <div className="version-features">
                <div className="nodes-info">
                  <span className="nodes-count">{config.nodes}個節點</span>
                </div>
                
                <ul>
                  {config.features.map((feature, index) => (
                    <li key={index}>✅ {feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="version-footer">
                <button className={`cta-button ${config.color}`}>
                  {key === 'community' ? '立即下載' : key === 'personal' ? '開始試用' : '聯繫銷售'}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="privacy-principles">
          <h2>🔒 隱私優先統一原則</h2>
          <div className="principles-grid">
            <div className="principle">
              <h3>🌍 Community版</h3>
              <p>端側Admin，開源透明</p>
            </div>
            <div className="principle">
              <h3>👤 Personal版</h3>
              <p>端側Admin + 隱私雲同步</p>
            </div>
            <div className="principle">
              <h3>🏢 Enterprise版</h3>
              <p>端側Admin + 企業級管理</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // 視頻模態框
  const VideoModal = () => (
    isVideoModalOpen && (
      <div className="video-modal-overlay" onClick={() => setIsVideoModalOpen(false)}>
        <div className="video-modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={() => setIsVideoModalOpen(false)}>×</button>
          <div className="video-container">
            <h3>PowerAutomation 完整演示</h3>
            <div className="video-placeholder">
              <div className="play-icon">▶️</div>
              <p>5分鐘完整演示視頻</p>
              <p>展示多智能體協作、智慧UI適配、隱私保護等核心功能</p>
            </div>
          </div>
        </div>
      </div>
    )
  )

  return (
    <div className="App">
      {/* 導航欄 */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">🤖</span>
            <span className="logo-text">PowerAutomation</span>
          </div>
          
          <div className="nav-links">
            <button 
              className={currentPage === 'home' ? 'active' : ''}
              onClick={() => setCurrentPage('home')}
            >
              首頁
            </button>
            <button 
              className={currentPage === 'versions' ? 'active' : ''}
              onClick={() => setCurrentPage('versions')}
            >
              版本對比
            </button>
            <button 
              className={currentPage === 'download' ? 'active' : ''}
              onClick={() => setCurrentPage('download')}
            >
              下載
            </button>
          </div>
          
          <div className="nav-actions">
            <button className="login-btn">登錄</button>
            <button className="trial-btn">免費試用</button>
          </div>
        </div>
      </nav>

      {/* 主要內容 */}
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'versions' && <VersionComparisonPage />}
        {currentPage === 'download' && (
          <div className="download-page">
            <div className="container">
              <h1>下載 PowerAutomation</h1>
              <p>選擇適合您平台的版本</p>
              
              <div className="download-options">
                <div className="download-card">
                  <h3>🪟 Windows版本</h3>
                  <p>適用於 Windows 10+</p>
                  <button className="download-btn">下載 Windows版</button>
                </div>
                
                <div className="download-card">
                  <h3>🍎 macOS版本</h3>
                  <p>適用於 macOS 10.15+</p>
                  <button className="download-btn">下載 macOS版</button>
                </div>
                
                <div className="download-card">
                  <h3>🐧 Linux版本</h3>
                  <p>適用於主流Linux發行版</p>
                  <button className="download-btn">下載 Linux版</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 視頻模態框 */}
      <VideoModal />
    </div>
  )
}

export default App

