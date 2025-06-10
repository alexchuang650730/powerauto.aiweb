import React, { useState, useEffect } from 'react'
import './CodeEditor.css'

const CodeEditor = () => {
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('javascript')
  const [output, setOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [prompt, setPrompt] = useState('')

  // 模擬AI代碼生成
  const generateCode = async (userPrompt) => {
    setIsGenerating(true)
    setOutput('AI正在生成代碼...')
    
    // 模擬API調用延遲
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const codeTemplates = {
      'javascript': {
        'hello world': `console.log('Hello, World!');`,
        '計算器': `function calculator(a, b, operation) {
  switch(operation) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Error: Division by zero';
    default: return 'Error: Invalid operation';
  }
}

// 使用示例
console.log(calculator(10, 5, '+')); // 15
console.log(calculator(10, 5, '-')); // 5`,
        '數組排序': `// 快速排序算法
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// 使用示例
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log('原數組:', numbers);
console.log('排序後:', quickSort(numbers));`,
        'api請求': `// 使用 fetch 進行 API 請求
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('獲取用戶數據失敗:', error);
    throw error;
  }
}

// 使用示例
fetchUserData(123)
  .then(user => console.log('用戶數據:', user))
  .catch(error => console.error('錯誤:', error));`
      },
      'python': {
        'hello world': `print('Hello, World!')`,
        '計算器': `def calculator(a, b, operation):
    """簡單計算器函數"""
    if operation == '+':
        return a + b
    elif operation == '-':
        return a - b
    elif operation == '*':
        return a * b
    elif operation == '/':
        return a / b if b != 0 else 'Error: Division by zero'
    else:
        return 'Error: Invalid operation'

# 使用示例
print(calculator(10, 5, '+'))  # 15
print(calculator(10, 5, '-'))  # 5`,
        '數據分析': `import pandas as pd
import matplotlib.pyplot as plt

# 創建示例數據
data = {
    'name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'age': [25, 30, 35, 28],
    'salary': [50000, 60000, 70000, 55000]
}

# 創建DataFrame
df = pd.DataFrame(data)

# 基本統計信息
print("數據概覽:")
print(df.describe())

# 繪製圖表
plt.figure(figsize=(10, 6))
plt.subplot(1, 2, 1)
plt.bar(df['name'], df['age'])
plt.title('年齡分布')
plt.ylabel('年齡')

plt.subplot(1, 2, 2)
plt.bar(df['name'], df['salary'])
plt.title('薪資分布')
plt.ylabel('薪資')

plt.tight_layout()
plt.show()`
      }
    }
    
    // 根據提示詞匹配代碼模板
    const templates = codeTemplates[language] || codeTemplates['javascript']
    let generatedCode = ''
    
    for (const [key, template] of Object.entries(templates)) {
      if (userPrompt.toLowerCase().includes(key)) {
        generatedCode = template
        break
      }
    }
    
    if (!generatedCode) {
      generatedCode = `// AI生成的${language}代碼示例
// 提示詞: ${userPrompt}

function example() {
  // 這裡是根據您的需求生成的代碼
  console.log('PowerAuto.ai AI編程助手為您服務！');
  
  // TODO: 實現具體功能
  return '代碼生成完成';
}

example();`
    }
    
    setCode(generatedCode)
    setOutput('✅ 代碼生成完成！您可以在左側編輯器中查看和修改代碼。')
    setIsGenerating(false)
  }

  // 代碼分析和建議
  const analyzeCode = () => {
    if (!code.trim()) {
      setOutput('請先輸入一些代碼進行分析')
      return
    }
    
    const suggestions = []
    
    // 簡單的代碼分析規則
    if (code.includes('console.log') && language === 'javascript') {
      suggestions.push('💡 建議：考慮使用更專業的日誌庫，如 winston 或 bunyan')
    }
    
    if (code.includes('var ') && language === 'javascript') {
      suggestions.push('💡 建議：推薦使用 let 或 const 替代 var')
    }
    
    if (!code.includes('try') && code.includes('fetch')) {
      suggestions.push('💡 建議：API請求應該包含錯誤處理 (try-catch)')
    }
    
    if (code.length > 500) {
      suggestions.push('💡 建議：考慮將長函數拆分為更小的函數以提高可讀性')
    }
    
    if (suggestions.length === 0) {
      suggestions.push('✅ 代碼看起來不錯！沒有發現明顯的問題。')
    }
    
    setOutput(suggestions.join('\n'))
  }

  return (
    <div className="code-editor-container">
      <div className="editor-header">
        <h2>🤖 PowerAuto.ai 代碼生成器</h2>
        <div className="controls">
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            className="language-select"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
          </select>
        </div>
      </div>
      
      <div className="editor-content">
        <div className="code-panel">
          <div className="panel-header">
            <h3>代碼編輯器</h3>
            <button onClick={analyzeCode} className="analyze-btn">
              🔍 分析代碼
            </button>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={`在這裡輸入您的${language}代碼...`}
            className="code-textarea"
          />
        </div>
        
        <div className="ai-panel">
          <div className="panel-header">
            <h3>AI助手</h3>
          </div>
          
          <div className="ai-prompt">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="描述您想要生成的代碼..."
              className="prompt-input"
              onKeyPress={(e) => e.key === 'Enter' && generateCode(prompt)}
            />
            <button 
              onClick={() => generateCode(prompt)}
              disabled={isGenerating || !prompt.trim()}
              className="generate-btn"
            >
              {isGenerating ? '生成中...' : '🚀 生成代碼'}
            </button>
          </div>
          
          <div className="quick-prompts">
            <h4>快速模板：</h4>
            <div className="prompt-buttons">
              <button onClick={() => generateCode('hello world')}>Hello World</button>
              <button onClick={() => generateCode('計算器')}>計算器</button>
              <button onClick={() => generateCode('數組排序')}>排序算法</button>
              <button onClick={() => generateCode('api請求')}>API請求</button>
            </div>
          </div>
          
          <div className="output-panel">
            <h4>輸出結果：</h4>
            <div className="output-content">
              {output || '等待AI生成代碼...'}
            </div>
          </div>
        </div>
      </div>
      
      <div className="editor-footer">
        <div className="stats">
          <span>行數: {code.split('\n').length}</span>
          <span>字符數: {code.length}</span>
          <span>語言: {language}</span>
        </div>
        <div className="actions">
          <button onClick={() => setCode('')} className="clear-btn">
            🗑️ 清空
          </button>
          <button onClick={() => navigator.clipboard.writeText(code)} className="copy-btn">
            📋 複製代碼
          </button>
        </div>
      </div>
    </div>
  )
}

export default CodeEditor

