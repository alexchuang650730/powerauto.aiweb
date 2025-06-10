import React, { useState } from 'react'
import './ProjectTemplates.css'

const ProjectTemplates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [projectName, setProjectName] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedProject, setGeneratedProject] = useState(null)

  const templates = [
    {
      id: 'react-app',
      name: 'React 應用',
      description: '現代化的 React 單頁應用模板',
      icon: '⚛️',
      category: 'frontend',
      features: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite'],
      files: {
        'package.json': `{
  "name": "{{projectName}}",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.0.0",
    "typescript": "^5.0.0",
    "vite": "^4.4.0"
  }
}`,
        'src/App.tsx': `import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>歡迎使用 {{projectName}}</h1>
        <p>這是由 PowerAuto.ai 生成的 React 應用模板</p>
      </header>
    </div>
  )
}

export default App`,
        'src/main.tsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)`,
        'index.html': `<!DOCTYPE html>
<html lang="zh-TW">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{projectName}}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`
      }
    },
    {
      id: 'node-api',
      name: 'Node.js API',
      description: 'RESTful API 服務器模板',
      icon: '🚀',
      category: 'backend',
      features: ['Express.js', 'TypeScript', 'JWT認證', 'MongoDB'],
      files: {
        'package.json': `{
  "name": "{{projectName}}",
  "version": "1.0.0",
  "main": "dist/server.js",
  "scripts": {
    "start": "node dist/server.js",
    "dev": "ts-node-dev src/server.ts",
    "build": "tsc"
  },
  "dependencies": {
    "express": "^4.18.0",
    "mongoose": "^7.0.0",
    "jsonwebtoken": "^9.0.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "@types/express": "^4.17.0",
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0",
    "ts-node-dev": "^2.0.0"
  }
}`,
        'src/server.ts': `import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 3000

// 中間件
app.use(cors())
app.use(express.json())

// 路由
app.get('/', (req, res) => {
  res.json({ 
    message: '歡迎使用 {{projectName}} API',
    version: '1.0.0',
    powered_by: 'PowerAuto.ai'
  })
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// 啟動服務器
app.listen(PORT, () => {
  console.log(\`🚀 {{projectName}} 服務器運行在端口 \${PORT}\`)
})`,
        'src/models/User.ts': `import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

export const User = mongoose.model('User', userSchema)`
      }
    },
    {
      id: 'python-ml',
      name: 'Python 機器學習',
      description: '機器學習項目模板',
      icon: '🤖',
      category: 'ai',
      features: ['Scikit-learn', 'Pandas', 'Jupyter', 'Matplotlib'],
      files: {
        'requirements.txt': `numpy==1.24.0
pandas==2.0.0
scikit-learn==1.3.0
matplotlib==3.7.0
jupyter==1.0.0
seaborn==0.12.0`,
        'main.py': `"""
{{projectName}} - 機器學習項目
由 PowerAuto.ai 生成
"""

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

def load_data():
    """載入數據"""
    # 生成示例數據
    np.random.seed(42)
    X = np.random.randn(100, 1)
    y = 2 * X.ravel() + np.random.randn(100)
    
    return X, y

def train_model(X, y):
    """訓練模型"""
    # 分割數據
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    
    # 創建和訓練模型
    model = LinearRegression()
    model.fit(X_train, y_train)
    
    # 預測
    y_pred = model.predict(X_test)
    
    # 評估
    mse = mean_squared_error(y_test, y_pred)
    r2 = r2_score(y_test, y_pred)
    
    print(f"均方誤差: {mse:.4f}")
    print(f"R² 分數: {r2:.4f}")
    
    return model, X_test, y_test, y_pred

def visualize_results(X_test, y_test, y_pred):
    """可視化結果"""
    plt.figure(figsize=(10, 6))
    plt.scatter(X_test, y_test, color='blue', label='實際值')
    plt.scatter(X_test, y_pred, color='red', label='預測值')
    plt.xlabel('特徵')
    plt.ylabel('目標值')
    plt.title('{{projectName}} - 預測結果')
    plt.legend()
    plt.show()

if __name__ == "__main__":
    print("🤖 {{projectName}} 機器學習項目啟動")
    
    # 載入數據
    X, y = load_data()
    
    # 訓練模型
    model, X_test, y_test, y_pred = train_model(X, y)
    
    # 可視化結果
    visualize_results(X_test, y_test, y_pred)
    
    print("✅ 項目執行完成！")`
      }
    },
    {
      id: 'vue-spa',
      name: 'Vue.js 應用',
      description: 'Vue 3 單頁應用模板',
      icon: '💚',
      category: 'frontend',
      features: ['Vue 3', 'Composition API', 'Vue Router', 'Pinia'],
      files: {
        'package.json': `{
  "name": "{{projectName}}",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.3.0",
    "vue-router": "^4.2.0",
    "pinia": "^2.1.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.2.0",
    "vite": "^4.4.0"
  }
}`,
        'src/App.vue': `<template>
  <div id="app">
    <header>
      <h1>{{ title }}</h1>
      <nav>
        <router-link to="/">首頁</router-link>
        <router-link to="/about">關於</router-link>
      </nav>
    </header>
    
    <main>
      <router-view />
    </main>
    
    <footer>
      <p>由 PowerAuto.ai 生成</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('{{projectName}}')
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>`
      }
    }
  ]

  const generateProject = async () => {
    if (!selectedTemplate || !projectName.trim()) return
    
    setIsGenerating(true)
    
    // 模擬項目生成過程
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const template = templates.find(t => t.id === selectedTemplate)
    const processedFiles = {}
    
    // 處理模板變量
    Object.entries(template.files).forEach(([filename, content]) => {
      processedFiles[filename] = content.replace(/\{\{projectName\}\}/g, projectName)
    })
    
    setGeneratedProject({
      name: projectName,
      template: template.name,
      files: processedFiles
    })
    
    setIsGenerating(false)
  }

  const downloadProject = () => {
    if (!generatedProject) return
    
    // 創建項目文件的ZIP下載（模擬）
    const projectData = JSON.stringify(generatedProject, null, 2)
    const blob = new Blob([projectData], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${generatedProject.name}-project.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="project-templates-container">
      <div className="templates-header">
        <h2>🚀 項目模板庫</h2>
        <p>選擇模板，快速生成項目結構</p>
      </div>
      
      <div className="templates-grid">
        {templates.map(template => (
          <div 
            key={template.id}
            className={`template-card ${selectedTemplate === template.id ? 'selected' : ''}`}
            onClick={() => setSelectedTemplate(template.id)}
          >
            <div className="template-icon">{template.icon}</div>
            <h3>{template.name}</h3>
            <p>{template.description}</p>
            <div className="template-features">
              {template.features.map(feature => (
                <span key={feature} className="feature-tag">{feature}</span>
              ))}
            </div>
            <div className="template-category">{template.category}</div>
          </div>
        ))}
      </div>
      
      {selectedTemplate && (
        <div className="project-generator">
          <h3>生成項目</h3>
          <div className="generator-form">
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="輸入項目名稱..."
              className="project-name-input"
            />
            <button 
              onClick={generateProject}
              disabled={isGenerating || !projectName.trim()}
              className="generate-project-btn"
            >
              {isGenerating ? '生成中...' : '🎯 生成項目'}
            </button>
          </div>
        </div>
      )}
      
      {generatedProject && (
        <div className="generated-project">
          <div className="project-header">
            <h3>✅ 項目生成完成！</h3>
            <button onClick={downloadProject} className="download-btn">
              📥 下載項目
            </button>
          </div>
          
          <div className="project-info">
            <p><strong>項目名稱：</strong>{generatedProject.name}</p>
            <p><strong>模板類型：</strong>{generatedProject.template}</p>
            <p><strong>文件數量：</strong>{Object.keys(generatedProject.files).length}</p>
          </div>
          
          <div className="project-files">
            <h4>項目文件結構：</h4>
            <div className="file-tree">
              {Object.entries(generatedProject.files).map(([filename, content]) => (
                <details key={filename} className="file-item">
                  <summary className="file-name">📄 {filename}</summary>
                  <pre className="file-content">{content}</pre>
                </details>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectTemplates

