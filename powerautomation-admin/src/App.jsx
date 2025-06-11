import { useState } from 'react'
import { Users, BarChart3, Clock, Settings, Zap, Menu, Plus, Search, Filter, Eye, Code, TestTube, Rocket, Monitor, Brain, Play, Video, Download, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import './App.css'

// 模擬數據
const chartData = [
  { name: '1月', value: 400 },
  { name: '2月', value: 300 },
  { name: '3月', value: 600 },
  { name: '4月', value: 800 },
  { name: '5月', value: 1000 },
  { name: '6月', value: 1200 },
]

const users = [
  { id: 1, name: 'John Doe', email: 'john-dee@example.com', credits: 1200, status: 'active', role: 'developer' },
  { id: 2, name: 'Alice Smith', email: 'alice.smith@example.com', credits: 320, status: 'active', role: 'tester' },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', credits: 1300, status: 'active', role: 'manager' },
  { id: 4, name: 'Carol Williams', email: 'carol.williams@example.com', credits: 2300, status: 'inactive', role: 'admin' },
  { id: 5, name: 'David Brown', email: 'david.brown@example.com', credits: 600, status: 'active', role: 'developer' },
]

// 智慧UI配置
const uiConfigs = {
  community: {
    name: 'Community版',
    nodes: ['code'],
    color: 'green',
    features: ['基礎編碼', '開源透明']
  },
  personal: {
    name: 'Personal版',
    nodes: ['code', 'test', 'deploy'],
    color: 'blue',
    features: ['編碼實現', '測試驗證', '部署發布', '隱私雲同步']
  },
  enterprise: {
    name: 'Enterprise版',
    nodes: ['analysis', 'design', 'code', 'test', 'deploy', 'monitor'],
    color: 'purple',
    features: ['需求分析', '架構設計', '編碼實現', '測試驗證', '部署發布', '監控運維']
  }
}

const nodeIcons = {
  analysis: Brain,
  design: Eye,
  code: Code,
  test: TestTube,
  deploy: Rocket,
  monitor: Monitor
}

const nodeNames = {
  analysis: '需求分析',
  design: '架構設計',
  code: '編碼實現',
  test: '測試驗證',
  deploy: '部署發布',
  monitor: '監控運維'
}

function App() {
  const [activeTab, setActiveTab] = useState('homepage')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentVersion, setCurrentVersion] = useState('personal')
  const [currentRole, setCurrentRole] = useState('developer')

  // 根據版本和角色動態生成側邊欄項目
  const getSidebarItems = () => {
    const baseItems = [
      { id: 'homepage', label: '首頁展示', icon: Eye },
      { id: 'users', label: '用戶管理', icon: Users },
      { id: 'results', label: '結果管理', icon: BarChart3 },
      { id: 'schedule', label: '排程管理', icon: Clock },
      { id: 'settings', label: '設置', icon: Settings },
    ]

    // 企業版管理員可以看到智慧UI配置
    if (currentVersion === 'enterprise' && currentRole === 'admin') {
      baseItems.splice(-1, 0, { id: 'ui-config', label: '智慧UI配置', icon: Brain })
    }

    return baseItems
  }

  const sidebarItems = getSidebarItems()

  // 首頁展示組件
  const Homepage = () => (
    <div className="space-y-8">
      {/* Hero區域 */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                PowerAutomation
              </h1>
              <p className="text-xl mb-6 opacity-90">
                多智能體驅動的測試自動化革命
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>🎭 四大專業智能體協作</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>🧵 多線程並行處理 - 效率提升5-10倍</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>🛡️ 隱私優先 - 端側Admin + 雲端同步</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>🧠 智慧UI適配 - 版本角色動態調整</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  <Download className="h-4 w-4 mr-2" />
                  立即下載
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Play className="h-4 w-4 mr-2" />
                  觀看演示
                </Button>
              </div>
            </div>
            
            {/* 視頻展示區域 */}
            <div className="relative">
              <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                  <div className="relative z-10 text-center">
                    <Video className="h-16 w-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium mb-2">PowerAutomation 演示視頻</p>
                    <p className="text-sm opacity-75 mb-4">多智能體協作 • 端到端閉環 • 隱私優先</p>
                    <Button 
                      size="lg" 
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
                      onClick={() => {
                        // 這裡可以添加視頻播放邏輯
                        alert('視頻播放功能 - 可以整合 YouTube、Vimeo 或自定義視頻播放器')
                      }}
                    >
                      <Play className="h-5 w-5 mr-2" />
                      播放演示
                    </Button>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm opacity-75">
                    📹 展示多智能體協作流程 | ⚡ 5分鐘了解核心功能
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 智慧UI工作流展示 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-6 w-6 text-blue-600" />
            <span>智慧UI工作流 - {uiConfigs[currentVersion].name}</span>
          </CardTitle>
          <CardDescription>
            根據版本和角色動態展示可用功能節點
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.keys(nodeNames).map((nodeId) => {
              const Icon = nodeIcons[nodeId]
              const isAvailable = uiConfigs[currentVersion].nodes.includes(nodeId)
              
              return (
                <div 
                  key={nodeId}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isAvailable 
                      ? 'border-blue-200 bg-blue-50 text-blue-900' 
                      : 'border-gray-200 bg-gray-50 text-gray-400'
                  }`}
                >
                  <Icon className={`h-8 w-8 mx-auto mb-2 ${isAvailable ? 'text-blue-600' : 'text-gray-400'}`} />
                  <div className="text-center">
                    <div className="font-medium text-sm">{nodeNames[nodeId]}</div>
                    {!isAvailable && (
                      <div className="text-xs mt-1">需要升級</div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-blue-900">當前配置</h4>
                <p className="text-sm text-blue-700">
                  版本: {uiConfigs[currentVersion].name} | 
                  角色: {currentRole === 'developer' ? '開發者' : 
                         currentRole === 'tester' ? '測試者' :
                         currentRole === 'manager' ? '項目經理' : '系統管理員'}
                </p>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setActiveTab('ui-config')}
                className="border-blue-300 text-blue-700 hover:bg-blue-100"
              >
                配置界面
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 六大技術護城河 */}
      <Card>
        <CardHeader>
          <CardTitle>🛡️ 六大技術護城河</CardTitle>
          <CardDescription>PowerAutomation的核心競爭優勢</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-purple-700 mb-2">🎭 多智能體協作創新</h4>
              <p className="text-sm text-gray-600">四大專業智能體並行協作，效率提升5-10倍</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">🧠 智能引擎+測試驅動</h4>
              <p className="text-sm text-gray-600">AI驅動的智能決策和全面測試保障</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-green-700 mb-2">🛡️ 隱私優先架構</h4>
              <p className="text-sm text-gray-600">端側Admin + 加密雲同步，數據主權保護</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-orange-700 mb-2">🎨 智慧UI適配系統</h4>
              <p className="text-sm text-gray-600">版本角色感知，動態界面調整</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-red-700 mb-2">☁️ 端雲協同技術</h4>
              <p className="text-sm text-gray-600">本地處理 + 雲端增強的混合架構</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-indigo-700 mb-2">🌍 開源透明生態</h4>
              <p className="text-sm text-gray-600">Community版開源，企業版私有部署</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 版本對比 */}
      <Card>
        <CardHeader>
          <CardTitle>📦 版本對比</CardTitle>
          <CardDescription>選擇最適合您需求的版本</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(uiConfigs).map(([key, config]) => (
              <div 
                key={key}
                className={`p-6 border-2 rounded-lg ${
                  currentVersion === key ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{config.name}</h3>
                <div className="space-y-2 mb-4">
                  {config.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  包含 {config.nodes.length} 個功能節點
                </div>
                <Button 
                  variant={currentVersion === key ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setCurrentVersion(key)}
                >
                  {currentVersion === key ? '當前版本' : '選擇此版本'}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  // 智慧UI演示組件
  const SmartUIDemo = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="h-5 w-5" />
            <span>智慧UI適配系統</span>
          </CardTitle>
          <CardDescription>根據版本和角色動態調整界面</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 版本選擇器 */}
          <div className="space-y-2">
            <label className="text-sm font-medium">選擇版本</label>
            <Select value={currentVersion} onValueChange={setCurrentVersion}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="community">Community版 - 開源透明</SelectItem>
                <SelectItem value="personal">Personal版 - 隱私優先</SelectItem>
                <SelectItem value="enterprise">Enterprise版 - 企業級管理</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 角色選擇器 */}
          <div className="space-y-2">
            <label className="text-sm font-medium">選擇角色</label>
            <Select value={currentRole} onValueChange={setCurrentRole}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">開發者</SelectItem>
                <SelectItem value="tester">測試者</SelectItem>
                <SelectItem value="manager">項目經理</SelectItem>
                <SelectItem value="admin">系統管理員</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* 當前配置展示 */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">{uiConfigs[currentVersion].name}</h3>
              <Badge 
                variant="secondary" 
                className={`${
                  uiConfigs[currentVersion].color === 'green' ? 'bg-green-100 text-green-800' :
                  uiConfigs[currentVersion].color === 'blue' ? 'bg-blue-100 text-blue-800' :
                  'bg-purple-100 text-purple-800'
                }`}
              >
                {currentRole === 'developer' ? '開發者' : 
                 currentRole === 'tester' ? '測試者' :
                 currentRole === 'manager' ? '項目經理' : '系統管理員'}
              </Badge>
            </div>

            {/* 工作流節點展示 */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-600">可用功能節點</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {uiConfigs[currentVersion].nodes.map((nodeId) => {
                  const Icon = nodeIcons[nodeId]
                  return (
                    <div 
                      key={nodeId}
                      className="flex items-center space-x-2 p-2 bg-white rounded border"
                    >
                      <Icon className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">{nodeNames[nodeId]}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* 功能特性 */}
            <div className="mt-4 space-y-2">
              <div className="text-sm font-medium text-gray-600">版本特性</div>
              <div className="flex flex-wrap gap-1">
                {uiConfigs[currentVersion].features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* 智慧適配說明 */}
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">智慧適配機制</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• <strong>版本感知</strong>：自動識別用戶版本，顯示對應功能</li>
              <li>• <strong>角色適配</strong>：根據用戶角色調整界面權限</li>
              <li>• <strong>動態佈局</strong>：實時調整側邊欄和功能模塊</li>
              <li>• <strong>學習優化</strong>：基於使用習慣智能優化界面</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="flex h-screen bg-gray-50">
      {/* 側邊導航 */}
      <div className={`bg-blue-600 text-white transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-16'}`}>
        <div className="p-4">
          <div className="flex items-center space-x-3">
            <Zap className="h-8 w-8" />
            {sidebarOpen && (
              <div>
                <span className="text-xl font-bold">PowerAutomation</span>
                <div className="text-xs opacity-75">{uiConfigs[currentVersion].name}</div>
              </div>
            )}
          </div>
        </div>
        
        <nav className="mt-8">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 text-left hover:bg-blue-700 transition-colors ${
                  activeTab === item.id ? 'bg-blue-700 border-r-4 border-white' : ''
                }`}
              >
                <Icon className="h-5 w-5" />
                {sidebarOpen && <span className="ml-3">{item.label}</span>}
              </button>
            )
          })}
        </nav>

        {/* 版本和角色指示器 */}
        {sidebarOpen && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-xs opacity-75 space-y-1">
              <div>版本: {uiConfigs[currentVersion].name}</div>
              <div>角色: {
                currentRole === 'developer' ? '開發者' : 
                currentRole === 'tester' ? '測試者' :
                currentRole === 'manager' ? '項目經理' : '系統管理員'
              }</div>
            </div>
          </div>
        )}
      </div>

      {/* 主要內容區域 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 頂部導航 */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-semibold text-gray-900">
                {sidebarItems.find(item => item.id === activeTab)?.label}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                群組用戶
              </Button>
            </div>
          </div>
        </header>

        {/* 主要內容 */}
        <main className="flex-1 overflow-auto p-6">
          {activeTab === 'homepage' && <Homepage />}

          {activeTab === 'users' && (
            <div className="space-y-6">
              {/* 統計卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">帳戶會員</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12,340</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% 較上月
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">權限參與</CardTitle>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      啟用
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">98.5%</div>
                    <p className="text-xs text-muted-foreground">
                      系統正常運行
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">團隊給廣</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-20">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                          <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#2563eb" 
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 用戶管理表格 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>用戶管理</CardTitle>
                      <CardDescription>管理系統中的所有用戶帳戶</CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="搜索用戶..."
                          className="pl-10 w-64"
                        />
                      </div>
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        篩選
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-6 gap-4 text-sm font-medium text-gray-500 border-b pb-2">
                      <div>名稱</div>
                      <div>電子信箱</div>
                      <div>會員</div>
                      <div>角色</div>
                      <div>狀態</div>
                      <div>操作</div>
                    </div>
                    
                    {users.map((user) => (
                      <div key={user.id} className="grid grid-cols-6 gap-4 items-center py-3 border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} />
                            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{user.name}</span>
                        </div>
                        <div className="text-gray-600">{user.email}</div>
                        <div className="font-medium">{user.credits.toLocaleString()}</div>
                        <div>
                          <Badge variant="outline" className="text-xs">
                            {user.role === 'developer' ? '開發者' : 
                             user.role === 'tester' ? '測試者' :
                             user.role === 'manager' ? '項目經理' : '系統管理員'}
                          </Badge>
                        </div>
                        <div>
                          <Badge 
                            variant={user.status === 'active' ? 'default' : 'secondary'}
                            className={user.status === 'active' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}
                          >
                            {user.status === 'active' ? '啟用' : '停用'}
                          </Badge>
                        </div>
                        <div>
                          <Button variant="outline" size="sm">
                            {user.status === 'active' ? '停用' : '啟用'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'ui-config' && <SmartUIDemo />}

          {activeTab === 'results' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>結果管理</CardTitle>
                  <CardDescription>查看和管理自動化任務的執行結果</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">結果管理功能開發中...</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>排程管理</CardTitle>
                  <CardDescription>管理自動化任務的執行排程</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">排程管理功能開發中...</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>系統設置</CardTitle>
                  <CardDescription>配置系統參數和偏好設置</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">系統設置功能開發中...</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App

