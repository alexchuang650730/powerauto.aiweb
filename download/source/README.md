# PowerAuto.ai 源碼和打包工具

本目錄包含 PowerAuto.ai 桌面應用的源碼和自動打包工具。

## 📂 文件說明

### 核心文件
- **`powerauto.py`** - PowerAuto.ai v0.53 桌面應用主程序
- **`create_packages.py`** - 自動打包工具，生成 Windows 和 macOS 安裝包

## 🚀 PowerAuto.ai 桌面應用 (powerauto.py)

### 功能特色
- **🔒 隱私保護** - 本地AI處理，代碼永不上傳
- **⚡ 智能決策** - 精準匹配最佳AI模型和處理策略
- **🤖 協同作業** - 多個AI智能體協同工作
- **📚 持續學習** - 學習項目上下文，提供個性化體驗

### 系統要求
- **Python**: 3.8 或更高版本
- **操作系統**: Windows 10/11, macOS 10.15+, Linux
- **內存**: 2GB 可用內存
- **存儲**: 1GB 可用磁盤空間

### 直接運行
```bash
# 確保已安裝 Python 3.8+
python3 powerauto.py

# 或在 Windows 上
python powerauto.py
```

### 可用命令
- `help` - 顯示幫助信息
- `status` - 顯示系統狀態
- `version` - 顯示版本信息
- `exit/quit/q` - 退出程序

---

## 🛠️ 自動打包工具 (create_packages.py)

### 功能說明
自動生成跨平台安裝包，包含完整的應用結構和安裝腳本。

### 生成的安裝包

#### Windows 安裝包
- **文件結構**:
  ```
  PowerAuto.ai-v0.53-Windows.zip
  ├── powerauto.py          # 主程序
  ├── PowerAuto.ai.bat      # Windows 啟動腳本
  ├── README.md             # 安裝說明
  └── version.json          # 版本信息
  ```
- **特色功能**:
  - 自動檢測 Python 環境
  - 一鍵啟動批處理腳本
  - 完整的錯誤處理和用戶提示
  - Windows 系統集成

#### macOS 安裝包
- **文件結構**:
  ```
  PowerAuto.ai-v0.53-macOS.zip
  ├── PowerAuto.ai.app/     # macOS 應用包
  │   └── Contents/
  │       ├── Info.plist    # 應用信息
  │       ├── MacOS/        # 可執行文件
  │       │   └── PowerAuto.ai
  │       └── Resources/    # 資源文件
  │           ├── powerauto.py
  │           └── version.json
  └── README.md             # 安裝說明
  ```
- **特色功能**:
  - 原生 macOS 應用結構
  - 支持拖拽安裝
  - Retina 顯示支持
  - Apple Silicon 和 Intel 兼容

### 使用打包工具

#### 環境準備
```bash
# 確保 Python 3.8+ 已安裝
python3 --version

# 確保有寫入權限
chmod +x create_packages.py
```

#### 執行打包
```bash
# 運行打包工具
python3 create_packages.py

# 輸出示例:
# 🚀 PowerAuto.ai v0.53 打包工具
# ==================================================
# 📦 創建 Windows 安裝包...
# ✅ Windows 安裝包創建完成：PowerAuto.ai-v0.53-Windows.zip
# 📦 創建 Mac 安裝包...
# ✅ Mac 安裝包創建完成：PowerAuto.ai-v0.53-macOS.zip
# 🎉 打包完成！
```

#### 生成的文件
打包完成後會在當前目錄生成：
- `PowerAuto.ai-v0.53-Windows.zip` (約 2.7 MB)
- `PowerAuto.ai-v0.53-macOS.zip` (約 3.9 MB)

---

## 🔧 自定義打包

### 修改版本信息
編輯 `create_packages.py` 中的版本配置：

```python
# 修改版本號
version_info = {
    "name": "PowerAuto.ai",
    "version": "0.54",  # 更新版本號
    "platform": "Windows",
    "build_date": "2025-06-11",  # 更新日期
    # ...
}
```

### 添加新功能
1. **修改主程序** (`powerauto.py`)
2. **更新打包腳本** (`create_packages.py`)
3. **測試功能** 確保跨平台兼容
4. **重新打包** 生成新版本

### 自定義安裝腳本

#### Windows 批處理腳本
修改 `create_packages.py` 中的 `bat_content` 變量：

```python
bat_content = '''@echo off
title PowerAuto.ai v0.53
echo 您的自定義啟動信息
python powerauto.py
pause
'''
```

#### macOS 啟動腳本
修改 `create_packages.py` 中的 `launcher_content` 變量：

```bash
launcher_content = '''#!/bin/bash
echo "您的自定義啟動信息"
python3 powerauto.py
'''
```

---

## 🧪 測試和驗證

### 本地測試
```bash
# 測試主程序
python3 powerauto.py

# 測試打包工具
python3 create_packages.py

# 驗證生成的安裝包
unzip PowerAuto.ai-v0.53-Windows.zip
cd windows/
python3 powerauto.py
```

### 跨平台測試
1. **Windows 測試**:
   - 在 Windows 10/11 上解壓並運行
   - 測試批處理腳本功能
   - 驗證 Python 環境檢測

2. **macOS 測試**:
   - 在 macOS 10.15+ 上解壓並安裝
   - 測試應用包結構
   - 驗證權限和安全設置

3. **Linux 測試**:
   - 直接運行 `python3 powerauto.py`
   - 測試命令行界面功能

---

## 📋 開發指南

### 代碼結構
```python
# powerauto.py 主要組件
class PowerAutoAI:
    def __init__(self):          # 初始化
    def start(self):             # 主程序入口
    def show_help(self):         # 幫助信息
    def show_status(self):       # 狀態顯示
```

### 添加新命令
```python
# 在 start() 方法中添加新命令處理
elif command.lower() == 'your_command':
    self.your_function()

def your_function(self):
    print("您的新功能")
```

### 錯誤處理
```python
try:
    # 您的代碼
except Exception as e:
    print(f"❌ 錯誤: {e}")
```

---

## 🔄 持續集成

### 自動化打包
可以將打包工具集成到 CI/CD 流程中：

```yaml
# GitHub Actions 示例
name: Build Packages
on: [push, release]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Python
        uses: actions/setup-python@v2
        with:
          python-version: '3.8'
      - name: Create Packages
        run: |
          cd download/source
          python3 create_packages.py
      - name: Upload Artifacts
        uses: actions/upload-artifact@v2
        with:
          name: packages
          path: download/source/*.zip
```

---

## 🐛 故障排除

### 常見問題

#### Python 未找到
```bash
# 檢查 Python 安裝
python3 --version
which python3

# 安裝 Python (macOS)
brew install python

# 安裝 Python (Windows)
# 訪問 https://python.org/downloads
```

#### 權限問題 (macOS)
```bash
# 給予執行權限
chmod +x PowerAuto.ai.app/Contents/MacOS/PowerAuto.ai

# 允許未簽名應用
# 系統偏好設置 > 安全性與隱私 > 仍要打開
```

#### 打包失敗
```bash
# 檢查目錄權限
ls -la
chmod 755 .

# 檢查磁盤空間
df -h
```

---

## 📞 技術支持

如果您在使用源碼或打包工具時遇到問題：

- **GitHub Issues**: https://github.com/alexchuang650730/powerauto.aiweb/issues
- **郵箱**: support@powerauto.ai
- **文檔**: https://powerauto.ai/docs

---

## 📄 許可證

本源碼採用 MIT 許可證發布，您可以自由使用、修改和分發。

---

**PowerAuto.ai Team** © 2025

