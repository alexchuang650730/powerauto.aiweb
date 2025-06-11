import React, { useState } from 'react'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  const handleLogin = () => {
    setShowLoginModal(true)
  }

  const closeLoginModal = () => {
    setShowLoginModal(false)
  }

  const handleVideoDemo = () => {
    setShowVideoModal(true)
  }

  const closeVideoModal = () => {
    setShowVideoModal(false)
  }

  // 首頁組件
  const HomePage = () => (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              🔥 兩大技術護城河
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            企業智能自動化平台
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto">
            基於L4級別多智能體自動化平台：四大護城河，重新定義開發工作流
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-5xl mx-auto">
            四大技術護城河：雲側/端側大模型自學習 + 智慧路由端雲協同 + L4級別多智能體協作，支持所有智能編碼編輯器的一步直達平台
          </p>

          {/* CTA按鈕 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => setCurrentPage('demo')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              🚀 立即開始
            </button>
            <button 
              onClick={() => setCurrentPage('download')}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              📥 免費下載
            </button>
          </div>

          {/* Demo視頻區域 */}
          <div className="relative max-w-4xl mx-auto">
            <div 
              className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-purple-800 rounded-2xl p-16 cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={handleVideoDemo}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
              <div className="relative z-10 text-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  觀看完整演示 (5分鐘)
                </button>
              </div>
            </div>
            
            {/* 三大特色 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">3秒生成</h3>
                <p className="text-gray-600">從需求到代碼</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">效率提升300%</h3>
                <p className="text-gray-600">開發速度飛躍</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">100%隱私保護</h3>
                <p className="text-gray-600">代碼永不離開</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 四大護城河 */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              L4級別多智能體自動化平台：四大護城河
            </h2>
            <p className="text-xl text-gray-600">構建不可逾越的競爭壁壘</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 雲側大模型自學習能力 */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">雲側大模型自學習能力</h3>
              <p className="text-gray-600 mb-6">大規模並行處理 + 跨企業知識圖譜 + 全局模式識別</p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  千万级并发处理
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  行业级知识图谱
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  跨域模式识别
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7持续进化
                </div>
              </div>
            </div>

            {/* 端側大模型自學習能力 */}
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">端側大模型自學習能力</h3>
              <p className="text-gray-600 mb-6">本地化適應 + 隱私保護聯邦學習 + 離線智能處理</p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  毫秒级个性化响应
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  99.9%隐私保护
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  &lt;100ms极速响应
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  高线智能决策
                </div>
              </div>
            </div>

            {/* 智慧路由端雲協同能力 */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">智慧路由端雲協同能力</h3>
              <p className="text-gray-600 mb-6">智能負載分配 + 實時協同優化 + 預測性調度</p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  最优资源调度
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  动态协调优化
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  智能任务预测
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  容错自愈机制
                </div>
              </div>
            </div>

            {/* L4級別多智能體協作能力 */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">L4級別多智能體/MCP協作能力</h3>
              <p className="text-gray-600 mb-6">多智能體/MCP協同 + 跨場景自動化 + 智能決策鏈</p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  100+智能体/MCP协作
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  MCP协议标准化
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  跨场景智能路由
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  自适应决策优化
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 支持所有主流智能編輯器 */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">支持所有主流智能編輯器</h2>
          <p className="text-xl text-gray-600 mb-16">無縫集成，一步直達</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'VS Code', icon: '💻' },
              { name: 'Cursor', icon: '⚡' },
              { name: 'Windsurf', icon: '💻' },
              { name: 'KiloCode', icon: '🔧' },
              { name: '通義靈碼', icon: '💻' },
              { name: 'CodeBuddy', icon: '💻' }
            ].map((editor, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{editor.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{editor.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 定價方案 */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">定價方案</h2>
            <p className="text-xl text-gray-600">基於四大護城河技術的差異化方案</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 個人版 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">個人版</h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">$19<span className="text-lg text-gray-600">/月</span></div>
              <p className="text-gray-600 mb-6">獨立開發者的智能編碼夥伴</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1-3個智能體協作
                </div>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  10,000次API調用/月
                </div>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  3個項目支持
                </div>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  基礎MCP協議
                </div>
              </div>
              
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                開始使用
              </button>
            </div>

            {/* 團隊版 - 推薦 */}
            <div className="bg-blue-50 border-2 border-blue-500 rounded-2xl p-8 relative hover:shadow-lg transition-shadow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">推薦</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">團隊版</h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">$45<span className="text-lg text-gray-600">/用戶/月</span></div>
              <p className="text-gray-600 mb-6">中小團隊的協作自動化平台</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  5-20個智能體編排
                </div>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  100,000次API調用/月
                </div>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  無限項目數量
                </div>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  增強MCP協議
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                開始免費試用
              </button>
            </div>

            {/* 企業版 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">企業版</h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">$120<span className="text-lg text-gray-600">/用戶/月</span></div>
              <p className="text-gray-600 mb-6">大型企業的L4級別自動化解決方案</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  100+智能體編排
                </div>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  無限API調用
                </div>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  無限項目和存儲
                </div>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  高級MCP協議
                </div>
              </div>
              
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                聯繫銷售
              </button>
            </div>

            {/* 定制版 */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">新增</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">定制版</h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">$200+<span className="text-lg text-gray-600">/用戶/月</span></div>
              <p className="text-gray-600 mb-6">行業特化的專業解決方案</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  行業定制智能體
                </div>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  專業服務團隊
                </div>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  完全私有化部署
                </div>
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7專業支持
                </div>
              </div>
              
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                定制咨詢
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="App">
      {/* 導航欄 */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
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
                onClick={() => handleNavigation('features')}
                className={`font-medium transition-colors ${
                  currentPage === 'features' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                功能特性
              </button>
              <button 
                onClick={() => handleNavigation('pricing')}
                className={`font-medium transition-colors ${
                  currentPage === 'pricing' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                定價
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
                onClick={() => handleNavigation('community')}
                className={`font-medium transition-colors ${
                  currentPage === 'community' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                社區
              </button>
            </div>

            {/* 語言選擇和登錄 */}
            <div className="flex items-center space-x-4">
              <select className="text-sm border border-gray-300 rounded px-2 py-1">
                <option>繁中</option>
                <option>簡中</option>
                <option>EN</option>
              </select>
              <button 
                onClick={handleLogin}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                登錄
              </button>
              <button 
                onClick={handleLogin}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                註冊
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 頁面內容 */}
      {currentPage === 'home' && <HomePage />}

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

      {/* 視頻演示模態框 */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-bold text-gray-900">PowerAuto.ai 完整演示</h3>
              <button
                onClick={closeVideoModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-center text-white">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <p className="text-lg">演示視頻即將推出</p>
                <p className="text-sm opacity-75 mt-2">敬請期待 PowerAuto.ai 的完整功能演示</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

