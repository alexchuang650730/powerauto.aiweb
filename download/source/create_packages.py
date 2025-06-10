#!/usr/bin/env python3
"""
PowerAuto.ai v0.53 打包工具
創建 Windows 和 Mac 安裝包
"""

import os
import shutil
import zipfile
import json
from pathlib import Path

def create_windows_package():
    """創建 Windows 安裝包"""
    print("📦 創建 Windows 安裝包...")
    
    # 創建 Windows 目錄結構
    win_dir = Path("/home/ubuntu/projects/powerauto-packages/v0.53/windows")
    win_dir.mkdir(parents=True, exist_ok=True)
    
    # 複製主程序
    shutil.copy("/home/ubuntu/projects/powerauto-releases/v0.53/powerauto.py", 
                win_dir / "powerauto.py")
    
    # 創建 Windows 啟動腳本
    bat_content = '''@echo off
title PowerAuto.ai v0.53
echo.
echo ========================================
echo   PowerAuto.ai v0.53 for Windows
echo   開發工作流端到端閉環管理平台
echo ========================================
echo.

REM 檢查 Python 是否安裝
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 錯誤：未檢測到 Python
    echo 請先安裝 Python 3.8+ 
    echo 下載地址：https://python.org/downloads
    pause
    exit /b 1
)

echo ✅ Python 環境檢測通過
echo 🚀 啟動 PowerAuto.ai...
echo.

python powerauto.py

pause
'''
    
    with open(win_dir / "PowerAuto.ai.bat", "w", encoding="utf-8") as f:
        f.write(bat_content)
    
    # 創建安裝說明
    readme_content = '''# PowerAuto.ai v0.53 for Windows

## 🚀 快速開始

### 系統要求
- Windows 10/11 (64位)
- Python 3.8 或更高版本
- 2GB 可用內存
- 1GB 可用磁盤空間

### 安裝步驟

1. **安裝 Python**
   - 訪問 https://python.org/downloads
   - 下載並安裝 Python 3.8+
   - 安裝時勾選 "Add Python to PATH"

2. **運行 PowerAuto.ai**
   - 雙擊 `PowerAuto.ai.bat` 啟動
   - 或在命令行運行 `python powerauto.py`

### 功能特色

🔒 **隱私保護** - 本地AI處理，代碼永不上傳
⚡ **智能決策** - 精準匹配最佳AI模型和處理策略  
🤖 **協同作業** - 多個AI智能體協同工作
📚 **持續學習** - 學習項目上下文，提供個性化體驗

### 技術支持

- 官網：https://powerauto.ai
- 郵箱：support@powerauto.ai
- 文檔：https://powerauto.ai/docs

---
PowerAuto.ai Team © 2025
'''
    
    with open(win_dir / "README.md", "w", encoding="utf-8") as f:
        f.write(readme_content)
    
    # 創建版本信息文件
    version_info = {
        "name": "PowerAuto.ai",
        "version": "0.53",
        "platform": "Windows",
        "build_date": "2025-06-10",
        "python_required": "3.8+",
        "architecture": "x64",
        "size_mb": 1.2
    }
    
    with open(win_dir / "version.json", "w", encoding="utf-8") as f:
        json.dump(version_info, f, indent=2, ensure_ascii=False)
    
    # 打包為 ZIP
    zip_path = "/home/ubuntu/projects/powerauto-packages/v0.53/PowerAuto.ai-v0.53-Windows.zip"
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for file_path in win_dir.rglob('*'):
            if file_path.is_file():
                arcname = file_path.relative_to(win_dir)
                zipf.write(file_path, arcname)
    
    print(f"✅ Windows 安裝包創建完成：{zip_path}")
    return zip_path

def create_mac_package():
    """創建 Mac 安裝包"""
    print("📦 創建 Mac 安裝包...")
    
    # 創建 Mac 目錄結構
    mac_dir = Path("/home/ubuntu/projects/powerauto-packages/v0.53/mac")
    app_dir = mac_dir / "PowerAuto.ai.app" / "Contents"
    app_dir.mkdir(parents=True, exist_ok=True)
    
    # 創建 Mac 應用結構
    (app_dir / "MacOS").mkdir(exist_ok=True)
    (app_dir / "Resources").mkdir(exist_ok=True)
    
    # 複製主程序
    shutil.copy("/home/ubuntu/projects/powerauto-releases/v0.53/powerauto.py", 
                app_dir / "Resources" / "powerauto.py")
    
    # 創建 Mac 啟動腳本
    launcher_content = '''#!/bin/bash

# PowerAuto.ai v0.53 for macOS
# 開發工作流端到端閉環管理平台

echo "========================================="
echo "   PowerAuto.ai v0.53 for macOS"
echo "   開發工作流端到端閉環管理平台"
echo "========================================="
echo

# 獲取應用路徑
APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RESOURCES_DIR="$APP_DIR/Resources"

# 檢查 Python 是否安裝
if ! command -v python3 &> /dev/null; then
    echo "❌ 錯誤：未檢測到 Python 3"
    echo "請先安裝 Python 3.8+"
    echo "推薦使用 Homebrew: brew install python"
    echo "或訪問：https://python.org/downloads"
    read -p "按任意鍵退出..."
    exit 1
fi

echo "✅ Python 環境檢測通過"
echo "🚀 啟動 PowerAuto.ai..."
echo

# 啟動應用
cd "$RESOURCES_DIR"
python3 powerauto.py

read -p "按任意鍵退出..."
'''
    
    launcher_path = app_dir / "MacOS" / "PowerAuto.ai"
    with open(launcher_path, "w", encoding="utf-8") as f:
        f.write(launcher_content)
    
    # 設置執行權限
    os.chmod(launcher_path, 0o755)
    
    # 創建 Info.plist
    plist_content = '''<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CFBundleName</key>
    <string>PowerAuto.ai</string>
    <key>CFBundleDisplayName</key>
    <string>PowerAuto.ai</string>
    <key>CFBundleIdentifier</key>
    <string>ai.powerauto.app</string>
    <key>CFBundleVersion</key>
    <string>0.53</string>
    <key>CFBundleShortVersionString</key>
    <string>0.53</string>
    <key>CFBundleExecutable</key>
    <string>PowerAuto.ai</string>
    <key>CFBundlePackageType</key>
    <string>APPL</string>
    <key>CFBundleSignature</key>
    <string>PWAI</string>
    <key>LSMinimumSystemVersion</key>
    <string>10.15</string>
    <key>NSHighResolutionCapable</key>
    <true/>
    <key>LSApplicationCategoryType</key>
    <string>public.app-category.developer-tools</string>
    <key>CFBundleDocumentTypes</key>
    <array>
        <dict>
            <key>CFBundleTypeName</key>
            <string>All Files</string>
            <key>CFBundleTypeOSTypes</key>
            <array>
                <string>****</string>
            </array>
            <key>CFBundleTypeRole</key>
            <string>Editor</string>
        </dict>
    </array>
</dict>
</plist>
'''
    
    with open(app_dir / "Info.plist", "w", encoding="utf-8") as f:
        f.write(plist_content)
    
    # 創建安裝說明
    readme_content = '''# PowerAuto.ai v0.53 for macOS

## 🚀 快速開始

### 系統要求
- macOS 10.15 (Catalina) 或更高版本
- Python 3.8 或更高版本
- 2GB 可用內存
- 1GB 可用磁盤空間

### 安裝步驟

1. **安裝 Python**
   ```bash
   # 使用 Homebrew (推薦)
   brew install python
   
   # 或訪問 https://python.org/downloads
   ```

2. **安裝 PowerAuto.ai**
   - 將 `PowerAuto.ai.app` 拖拽到 `應用程序` 文件夾
   - 雙擊啟動應用

3. **首次運行**
   - 系統可能提示安全警告
   - 前往 `系統偏好設置` > `安全性與隱私`
   - 點擊 `仍要打開` 允許運行

### 功能特色

🔒 **隱私保護** - 本地AI處理，代碼永不上傳
⚡ **智能決策** - 精準匹配最佳AI模型和處理策略  
🤖 **協同作業** - 多個AI智能體協同工作
📚 **持續學習** - 學習項目上下文，提供個性化體驗

### 終端運行

也可以在終端中直接運行：
```bash
cd /Applications/PowerAuto.ai.app/Contents/Resources
python3 powerauto.py
```

### 技術支持

- 官網：https://powerauto.ai
- 郵箱：support@powerauto.ai
- 文檔：https://powerauto.ai/docs

---
PowerAuto.ai Team © 2025
'''
    
    with open(mac_dir / "README.md", "w", encoding="utf-8") as f:
        f.write(readme_content)
    
    # 創建版本信息文件
    version_info = {
        "name": "PowerAuto.ai",
        "version": "0.53",
        "platform": "macOS",
        "build_date": "2025-06-10",
        "python_required": "3.8+",
        "min_os_version": "10.15",
        "architecture": "universal",
        "size_mb": 1.1
    }
    
    with open(app_dir / "Resources" / "version.json", "w", encoding="utf-8") as f:
        json.dump(version_info, f, indent=2, ensure_ascii=False)
    
    # 打包為 ZIP (模擬 DMG)
    zip_path = "/home/ubuntu/projects/powerauto-packages/v0.53/PowerAuto.ai-v0.53-macOS.zip"
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for file_path in mac_dir.rglob('*'):
            if file_path.is_file():
                arcname = file_path.relative_to(mac_dir)
                zipf.write(file_path, arcname)
    
    print(f"✅ Mac 安裝包創建完成：{zip_path}")
    return zip_path

def main():
    print("🚀 PowerAuto.ai v0.53 打包工具")
    print("=" * 50)
    
    # 創建打包目錄
    os.makedirs("/home/ubuntu/projects/powerauto-packages/v0.53", exist_ok=True)
    
    # 創建安裝包
    windows_package = create_windows_package()
    mac_package = create_mac_package()
    
    print("\n🎉 打包完成！")
    print(f"📦 Windows: {windows_package}")
    print(f"📦 macOS: {mac_package}")
    
    # 顯示文件信息
    for package in [windows_package, mac_package]:
        if os.path.exists(package):
            size_mb = os.path.getsize(package) / (1024 * 1024)
            print(f"   大小: {size_mb:.1f} MB")

if __name__ == "__main__":
    main()

