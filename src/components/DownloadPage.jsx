import React, { useState } from 'react'
import './DownloadPage.css'

const DownloadPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('windows')
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadInfo = {
    windows: {
      name: 'PowerAuto.ai for Windows',
      version: 'v0.53',
      size: '2.7 MB',
      filename: 'PowerAuto.ai-v0.53-Windows.zip',
      requirements: [
        'Windows 10/11 (64位)',
        'Python 3.8 或更高版本',
        '2GB 可用內存',
        '1GB 可用磁盤空間'
      ],
      features: [
        '一鍵安裝，快速啟動',
        '完整的 Windows 集成',
        '支持命令行和圖形界面',
        '自動檢測 Python 環境'
      ],
      icon: '🪟'
    },
    mac: {
      name: 'PowerAuto.ai for macOS',
      version: 'v0.53',
      size: '3.9 MB',
      filename: 'PowerAuto.ai-v0.53-macOS.zip',
      requirements: [
        'macOS 10.15 (Catalina) 或更高版本',
        'Python 3.8 或更高版本',
        '2GB 可用內存',
        '1GB 可用磁盤空間'
      ],
      features: [
        '原生 macOS 應用',
        '拖拽安裝到應用程序',
        '完美的 Retina 顯示支持',
        '支持 Apple Silicon 和 Intel'
      ],
      icon: '🍎'
    }
  }

  const handleDownload = async (platform) => {
    setIsDownloading(true)
    
    try {
      const info = downloadInfo[platform]
      const response = await fetch(`/${info.filename}`)
      
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = info.filename
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
      } else {
        alert('下載失敗，請稍後重試')
      }
    } catch (error) {
      console.error('下載錯誤:', error)
      alert('下載失敗，請檢查網絡連接')
    } finally {
      setIsDownloading(false)
    }
  }

  const currentInfo = downloadInfo[selectedPlatform]

  return (
    <div className="download-page">
      <div className="download-container">
        <div className="download-header">
          <h1>📥 下載 PowerAuto.ai</h1>
          <p>選擇適合您操作系統的版本，開始AI驅動的開發之旅</p>
        </div>

        {/* 平台選擇 */}
        <div className="platform-selector">
          <button
            className={`platform-btn ${selectedPlatform === 'windows' ? 'active' : ''}`}
            onClick={() => setSelectedPlatform('windows')}
          >
            <span className="platform-icon">🪟</span>
            <span>Windows</span>
          </button>
          <button
            className={`platform-btn ${selectedPlatform === 'mac' ? 'active' : ''}`}
            onClick={() => setSelectedPlatform('mac')}
          >
            <span className="platform-icon">🍎</span>
            <span>macOS</span>
          </button>
        </div>

        {/* 下載信息 */}
        <div className="download-info">
          <div className="download-card">
            <div className="card-header">
              <div className="app-icon">{currentInfo.icon}</div>
              <div className="app-details">
                <h2>{currentInfo.name}</h2>
                <div className="version-info">
                  <span className="version">{currentInfo.version}</span>
                  <span className="size">{currentInfo.size}</span>
                </div>
              </div>
            </div>

            <div className="card-content">
              <div className="requirements">
                <h3>🔧 系統要求</h3>
                <ul>
                  {currentInfo.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="features">
                <h3>✨ 特色功能</h3>
                <ul>
                  {currentInfo.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card-actions">
              <button
                className="download-btn primary"
                onClick={() => handleDownload(selectedPlatform)}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <>
                    <span className="loading-spinner"></span>
                    下載中...
                  </>
                ) : (
                  <>
                    <span>📥</span>
                    立即下載
                  </>
                )}
              </button>
              
              <div className="download-note">
                <p>💡 下載後請查看 README.md 文件獲取詳細安裝說明</p>
              </div>
            </div>
          </div>
        </div>

        {/* 安裝指南 */}
        <div className="installation-guide">
          <h3>🚀 快速安裝指南</h3>
          
          {selectedPlatform === 'windows' ? (
            <div className="guide-steps">
              <div className="step">
                <span className="step-number">1</span>
                <div className="step-content">
                  <h4>安裝 Python</h4>
                  <p>訪問 <a href="https://python.org/downloads" target="_blank" rel="noopener noreferrer">python.org</a> 下載並安裝 Python 3.8+</p>
                </div>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <div className="step-content">
                  <h4>解壓文件</h4>
                  <p>將下載的 ZIP 文件解壓到您選擇的目錄</p>
                </div>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <div className="step-content">
                  <h4>運行程序</h4>
                  <p>雙擊 <code>PowerAuto.ai.bat</code> 文件啟動應用</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="guide-steps">
              <div className="step">
                <span className="step-number">1</span>
                <div className="step-content">
                  <h4>安裝 Python</h4>
                  <p>使用 Homebrew: <code>brew install python</code> 或訪問 <a href="https://python.org/downloads" target="_blank" rel="noopener noreferrer">python.org</a></p>
                </div>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <div className="step-content">
                  <h4>安裝應用</h4>
                  <p>解壓下載文件，將 <code>PowerAuto.ai.app</code> 拖拽到應用程序文件夾</p>
                </div>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <div className="step-content">
                  <h4>首次運行</h4>
                  <p>雙擊啟動，如遇安全提示請在系統偏好設置中允許運行</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 技術支持 */}
        <div className="support-section">
          <h3>🤝 需要幫助？</h3>
          <div className="support-links">
            <a href="https://powerauto.ai/docs" className="support-link">
              <span>📚</span>
              <div>
                <strong>使用文檔</strong>
                <p>詳細的使用指南和API文檔</p>
              </div>
            </a>
            <a href="mailto:support@powerauto.ai" className="support-link">
              <span>💬</span>
              <div>
                <strong>技術支持</strong>
                <p>support@powerauto.ai</p>
              </div>
            </a>
            <a href="https://github.com/alexchuang650730/powerauto.aiweb/issues" className="support-link">
              <span>🐛</span>
              <div>
                <strong>問題反饋</strong>
                <p>GitHub Issues</p>
              </div>
            </a>
          </div>
        </div>

        {/* 版本信息 */}
        <div className="version-info-section">
          <h3>📋 版本信息</h3>
          <div className="version-details">
            <div className="version-item">
              <strong>當前版本:</strong> v0.53
            </div>
            <div className="version-item">
              <strong>發布日期:</strong> 2025年6月10日
            </div>
            <div className="version-item">
              <strong>更新內容:</strong> 
              <ul>
                <li>🔒 增強隱私保護機制</li>
                <li>⚡ 優化智能決策算法</li>
                <li>🤖 改進多智能體協作</li>
                <li>📚 升級持續學習系統</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadPage

