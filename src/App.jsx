import React, { useState } from 'react'
import CodeEditor from './components/CodeEditor'
import ProjectTemplates from './components/ProjectTemplates'
import DownloadPage from './components/DownloadPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [showLoginModal, setShowLoginModal] = useState(false)

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  const handleLogin = () => {
    setShowLoginModal(true)
  }

  const closeLoginModal = () => {
    setShowLoginModal(false)
  }

  // 首頁組件
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            PowerAuto.ai
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            開發工作流端到端閉環管理平台
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            從項目需求到生產發布，AI驅動完整開發生命週期
          </p>
          
          {/* n8n節點式工作流展示 - 個人專業版 */}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
              AI驅動的智能開發工作流
            </h3>
            <p className="text-center text-gray-600 mb-8">
              個人專業版 - 專注核心開發環節，提升編程效率
            </p>
            
            {/* 工作流節點圖 - 簡化版 */}
            <div className="relative">
              {/* 連接線 */}
              <svg className="absolute inset-0 w-full h-full" style={{zIndex: 1}}>
                {/* 水平連接線 */}
                <path d="M 16.67% 50% L 50% 50%" stroke="#3B82F6" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                <path d="M 50% 50% L 83.33% 50%" stroke="#3B82F6" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                
                {/* 箭頭標記 */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
                  </marker>
                </defs>
              </svg>
              
              {/* 節點 - 個人專業版3個核心節點 */}
              <div className="relative grid grid-cols-3 gap-8" style={{zIndex: 2}}>
                {/* 編碼實現 - 核心節點 */}
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-xl shadow-lg text-center border-4 border-purple-400">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    1
                  </div>
                  <div className="text-4xl mb-3">💻</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">編碼實現</h4>
                  <p className="text-sm text-gray-600 mb-3">AI編程助手協同工作</p>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-xs text-purple-700 font-medium mb-2">整合夥伴</div>
                    <div className="text-xs text-purple-600 space-y-1">
                      <div>• Trae (字節跳動)</div>
                      <div>• 通義靈碼 (阿里)</div>
                      <div>• 文心快碼 (百度)</div>
                      <div>• GitHub Copilot</div>
                    </div>
                  </div>
                </div>
                
                {/* 測試驗證 */}
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-xl shadow-md text-center border-2 border-green-300">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    2
                  </div>
                  <div className="text-4xl mb-3">🧪</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">測試驗證</h4>
                  <p className="text-sm text-gray-600 mb-3">基礎自動化測試</p>
                  <div className="text-xs text-green-600">
                    Jest • Cypress • 單元測試
                  </div>
                </div>
                
                {/* 監控運維 */}
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-xl shadow-md text-center border-2 border-blue-300">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    3
                  </div>
                  <div className="text-4xl mb-3">📊</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">監控運維</h4>
                  <p className="text-sm text-gray-600 mb-3">基本性能監控</p>
                  <div className="text-xs text-blue-600">
                    性能分析 • 錯誤追蹤
                  </div>
                </div>
              </div>
            </div>
            
            {/* 版本說明 */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-6 py-3 rounded-full">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
                <span className="font-medium">個人專業版 - 核心開發工作流</span>
              </div>
              <p className="mt-3 text-gray-600 text-sm">
                專注編碼實現環節，整合主流AI編程助手，提供測試和監控支持
              </p>
              <div className="mt-4">
                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  升級到企業版可解鎖完整6節點工作流
                </span>
              </div>
            </div>
          </div>
          
          {/* AI驅動全流程自動化 */}
          <div className="mt-12 text-center">
            <div className="bg-blue-600 text-white py-4 px-8 rounded-xl inline-block">
              <span className="text-lg font-semibold">⚡ AI驅動全流程自動化</span>
            </div>
          </div>

          {/* CTA按鈕 */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('demo')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              🚀 立即體驗
            </button>
            <button 
              onClick={() => setCurrentPage('download')}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              📥 立即下載
            </button>
            <button 
              onClick={() => setCurrentPage('templates')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              📦 項目模板
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  // 演示頁面
  const DemoPage = () => (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          🤖 AI編程助手演示
        </h1>
        <CodeEditor />
      </div>
    </div>
  )

  // 項目模板頁面
  const TemplatesPage = () => (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <ProjectTemplates />
      </div>
    </div>
  )

  // 下載頁面
  const DownloadPageComponent = () => (
    <div className="min-h-screen bg-gray-50 pt-20">
      <DownloadPage />
    </div>
  )

  return (
    <div className="App">
      {/* 導航欄 */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
                P
              </div>
              <span className="text-xl font-bold text-gray-900">PowerAuto.ai</span>
            </div>

            {/* 導航鏈接 */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => handleNavigation('home')}
                className={`font-medium transition-colors ${
                  currentPage === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                首頁
              </button>
              <button 
                onClick={() => handleNavigation('demo')}
                className={`font-medium transition-colors ${
                  currentPage === 'demo' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                AI演示
              </button>
              <button 
                onClick={() => handleNavigation('download')}
                className={`font-medium transition-colors ${
                  currentPage === 'download' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                下載
              </button>
              <button 
                onClick={() => handleNavigation('templates')}
                className={`font-medium transition-colors ${
                  currentPage === 'templates' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                項目模板
              </button>
            </div>

            {/* 登錄按鈕 */}
            <button 
              onClick={handleLogin}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              登錄
            </button>
          </div>
        </div>
      </nav>

      {/* 頁面內容 */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'demo' && <DemoPage />}
      {currentPage === 'templates' && <TemplatesPage />}

      {/* 登錄模態框 */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">登錄 PowerAuto.ai</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  郵箱地址
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="請輸入您的郵箱"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  密碼
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="請輸入密碼"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                登錄
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                還沒有帳號？ 
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
                  立即註冊
                </a>
              </p>
            </div>
            
            <button
              onClick={closeLoginModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App<button 
              onClick={handleLogin}
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              免費試用
            </button>
          </div>
        </div>
      </section>

      {/* 三種受眾選擇 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            為不同用戶提供專業解決方案
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button 
                onClick={() => setActiveAudience('enterprise')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeAudience === 'enterprise' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                企業決策者
              </button>
              <button 
                onClick={() => setActiveAudience('developer')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeAudience === 'developer' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                個人開發者
              </button>
              <button 
                onClick={() => setActiveAudience('opensource')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeAudience === 'opensource' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                開源愛好者
              </button>
            </div>
          </div>

          {/* 受眾內容 */}
          <div className="bg-gray-50 p-8 rounded-lg">
            {activeAudience === 'enterprise' && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">企業級解決方案</h3>
                <p className="text-gray-600 mb-6">提升開發效率300%，降低成本60%</p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">隱私保護</h4>
                    <p className="text-sm text-gray-600">代碼永不上傳雲端</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">效率提升</h4>
                    <p className="text-sm text-gray-600">端到端閉環管理</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">成本控制</h4>
                    <p className="text-sm text-gray-600">減少60%開發成本</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeAudience === 'developer' && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">個人開發者方案</h3>
                <p className="text-gray-600 mb-6">¥99/月，支持10+主流編輯器</p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">易於使用</h4>
                    <p className="text-sm text-gray-600">一鍵安裝，即用即得</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">功能豐富</h4>
                    <p className="text-sm text-gray-600">完整開發生命週期</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">價格親民</h4>
                    <p className="text-sm text-gray-600">個人版僅¥99/月</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeAudience === 'opensource' && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">開源技術方案</h3>
                <p className="text-gray-600 mb-6">MIT許可證，4大核心技術模塊</p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">技術透明</h4>
                    <p className="text-sm text-gray-600">開源代碼，技術可控</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">社區驅動</h4>
                    <p className="text-sm text-gray-600">活躍的開發者社區</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">自由定制</h4>
                    <p className="text-sm text-gray-600">完全可定制和擴展</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )

  // 端到端閉環頁面
  const EndToEndPage = () => (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          端到端閉環開發流程
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "需求分析", desc: "AI理解業務需求，生成技術方案", icon: "📋" },
            { title: "架構設計", desc: "智能架構建議，最佳實踐推薦", icon: "🏗️" },
            { title: "編碼實現", desc: "AI編程助手，代碼自動生成", icon: "💻" },
            { title: "測試驗證", desc: "自動化測試，質量保障", icon: "🧪" },
            { title: "部署發布", desc: "一鍵部署，環境管理", icon: "🚀" },
            { title: "監控運維", desc: "性能監控，問題預警", icon: "📊" }
          ].map((stage, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{stage.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{stage.title}</h3>
              <p className="text-gray-600">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // 技術架構頁面
  const TechPage = () => (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          四大技術護城河
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              title: "端側AI引擎", 
              desc: "本地AI處理，保護代碼隱私，支持離線工作",
              features: ["本地模型推理", "隱私保護", "離線可用", "低延遲響應"]
            },
            { 
              title: "智慧路由系統", 
              desc: "智能決策引擎，自動選擇最佳AI模型和處理策略",
              features: ["智能模型選擇", "負載均衡", "性能優化", "自適應調整"]
            },
            { 
              title: "多智能體協作", 
              desc: "多個AI智能體協同工作，實現複雜任務的自動化",
              features: ["任務分解", "並行處理", "結果整合", "錯誤恢復"]
            },
            { 
              title: "統一記憶系統", 
              desc: "持續學習和記憶項目上下文，提供個性化體驗",
              features: ["上下文記憶", "學習適應", "知識積累", "個性化推薦"]
            }
          ].map((tech, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{tech.title}</h3>
              <p className="text-gray-600 mb-6">{tech.desc}</p>
              <ul className="space-y-2">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // 生態整合頁面
  const EcosystemPage = () => (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          生態整合夥伴
        </h1>
        
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PowerAuto.ai 作為端到端閉環管理平台，與各大AI編程助手深度整合，
            為用戶提供從需求分析到部署運維的完整解決方案
          </p>
        </div>

        {/* AI編程助手整合 - 重點突出 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            💻 編碼實現節點 - AI編程助手深度整合
          </h2>
          
          <div className="text-center mb-6">
            <p className="text-gray-600">
              PowerAuto.ai 與主流AI編程助手深度整合，提供統一的智能編程體驗
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Trae",
                company: "字節跳動",
                color: "blue",
                integration: "深度整合",
                features: ["代碼補全", "智能建議", "錯誤檢測", "重構優化"]
              },
              {
                name: "通義靈碼",
                company: "阿里巴巴", 
                color: "orange",
                integration: "API對接",
                features: ["代碼生成", "註釋生成", "重構建議", "性能優化"]
              },
              {
                name: "文心快碼",
                company: "百度",
                color: "red",
                integration: "插件支持",
                features: ["智能補全", "代碼解釋", "優化建議", "文檔生成"]
              },
              {
                name: "GitHub Copilot",
                company: "Microsoft",
                color: "gray",
                integration: "協同工作",
                features: ["AI配對編程", "代碼建議", "測試生成", "文檔協助"]
              }
            ].map((partner, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{partner.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{partner.company}</p>
                <div className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs mb-3">
                  {partner.integration}
                </div>
                <ul className="text-xs text-gray-600 space-y-1">
                  {partner.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 其他節點簡要展示 */}
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🔧 輔助節點 - 個人專業版
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🧪</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">測試驗證</h3>
                  <p className="text-sm text-gray-600">基礎自動化測試</p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                • Jest 單元測試<br/>
                • Cypress E2E測試<br/>
                • 基礎覆蓋率報告
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">監控運維</h3>
                  <p className="text-sm text-gray-600">基本性能監控</p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                • 性能分析工具<br/>
                • 錯誤追蹤系統<br/>
                • 基礎日誌管理
              </div>
            </div>
          </div>
        </div>

        {/* PowerAuto.ai 增強能力 */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ⚡ PowerAuto.ai 為生態夥伴提供的增強能力
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">隱私保護增強</h3>
              <p className="text-gray-600 text-sm">
                為所有AI編程助手提供端側處理能力，確保代碼永不離開企業環境
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">端到端閉環</h3>
              <p className="text-gray-600 text-sm">
                將單點編程助手擴展為完整開發生命週期管理，從需求到部署
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">智能協作</h3>
              <p className="text-gray-600 text-sm">
                多個AI助手協同工作，智能路由分配任務，提供最佳解決方案
              </p>
            </div>
          </div>
        </div>

        {/* 整合效果 */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🎯 整合後的效果
          </h2>
          
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-red-600 mb-4">❌ 整合前</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• 各AI助手獨立工作</li>
                  <li>• 僅限編碼階段支持</li>
                  <li>• 代碼需上傳雲端</li>
                  <li>• 缺乏全流程視角</li>
                  <li>• 工具間無法協作</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-green-600 mb-4">✅ 整合後</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• 多AI助手智能協作</li>
                  <li>• 覆蓋完整開發生命週期</li>
                  <li>• 本地處理，隱私保護</li>
                  <li>• 端到端閉環管理</li>
                  <li>• 統一工作流平台</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // 價格方案頁面
  const PricingPage = () => (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          價格方案
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "個人版",
              price: "¥99",
              period: "/月",
              features: ["基礎AI編程助手", "5個項目", "社區支持", "基礎模板"]
            },
            {
              name: "專業版",
              price: "¥299",
              period: "/月",
              features: ["完整功能", "無限項目", "優先支持", "高級模板", "API訪問"],
              popular: true
            },
            {
              name: "企業版",
              price: "聯繫銷售",
              period: "",
              features: ["私有部署", "定制開發", "專屬支持", "SLA保障", "培訓服務"]
            }
          ].map((plan, index) => (
            <div key={index} className={`bg-white p-8 rounded-lg shadow-md ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-2 px-4 rounded-lg mb-4">
                  最受歡迎
                </div>
              )}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                plan.popular 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}>
                {plan.name === "企業版" ? "聯繫銷售" : "立即購買"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* 導航欄 */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-xl font-bold text-gray-900">PowerAuto.ai</span>
            </div>

            {/* 導航鏈接 */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => handleNavigation('home')}
                className={`font-medium transition-colors ${
                  currentPage === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                首頁
              </button>
              <button 
                onClick={() => handleNavigation('endtoend')}
                className={`font-medium transition-colors ${
                  currentPage === 'endtoend' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                端到端閉環
              </button>
              <button 
                onClick={() => handleNavigation('tech')}
                className={`font-medium transition-colors ${
                  currentPage === 'tech' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                技術架構
              </button>
              <button 
                onClick={() => handleNavigation('ecosystem')}
                className={`font-medium transition-colors ${
                  currentPage === 'ecosystem' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                生態整合
              </button>
              <button 
                onClick={() => handleNavigation('pricing')}
                className={`font-medium transition-colors ${
                  currentPage === 'pricing' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                價格方案
              </button>
            </div>

            {/* 登錄按鈕 */}
            <button 
              onClick={handleLogin}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              登錄
            </button>
          </div>
        </div>
      </nav>

      {/* 頁面內容 */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'endtoend' && <EndToEndPage />}
      {currentPage === 'tech' && <TechPage />}
      {currentPage === 'ecosystem' && <EcosystemPage />}
      {currentPage === 'pricing' && <PricingPage />}

      {/* 登錄模態框 */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">登錄 PowerAuto.ai</h2>
              <button 
                onClick={closeLoginModal}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  郵箱地址
                </label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="請輸入郵箱地址"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  密碼
                </label>
                <input 
                  type="password" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="請輸入密碼"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                登錄
              </button>
            </form>
            
            <p className="text-center text-sm text-gray-600 mt-4">
              還沒有賬戶？ 
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">立即註冊</a>
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <span className="text-xl font-bold">PowerAuto.ai</span>
              </div>
              <p className="text-gray-400">
                開發工作流端到端閉環管理平台
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">產品</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">端到端閉環</a></li>
                <li><a href="#" className="hover:text-white">技術架構</a></li>
                <li><a href="#" className="hover:text-white">價格方案</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">支持</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">文檔中心</a></li>
                <li><a href="#" className="hover:text-white">API參考</a></li>
                <li><a href="#" className="hover:text-white">社區論壇</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">聯繫我們</h3>
              <ul className="space-y-2 text-gray-400">
                <li>sales@powerauto.ai</li>
                <li>support@powerauto.ai</li>
                <li>+86 13725761379</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PowerAuto.ai. 保留所有權利。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

