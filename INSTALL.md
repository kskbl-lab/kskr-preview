# 安装和运行指南

## ⚠️ 前置要求

项目需要 Node.js 环境。如果还未安装，请先安装：

### macOS 安装 Node.js

**方法 1：使用 Homebrew（推荐）**
```bash
# 如果没有 Homebrew，先安装 Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 Node.js
brew install node
```

**方法 2：下载官方安装包**
访问 https://nodejs.org/ 下载 macOS 安装包（推荐 LTS 版本）

### 验证安装

```bash
node --version   # 应显示 v18.x.x 或更高
npm --version    # 应显示 9.x.x 或更高
```

---

## 🚀 快速启动

### 1. 安装依赖

```bash
cd /Users/fanshuwei/ae-plugin-preview
npm install
```

如果 npm 太慢，可以使用国内镜像：
```bash
npm install --registry=https://registry.npmmirror.com
```

### 2. 启动开发服务器

```bash
npm run dev
```

启动成功后会自动打开浏览器，访问 `http://localhost:3000`

### 3. 使用

- 左侧面板调节 5 个参数
- 点击"上传图片"加载自己的图片
- 点击"显示对比"查看原图和效果图对比
- 点击"重置参数"恢复默认值

---

## 📁 项目文件说明

```
ae-plugin-preview/
├── src/
│   ├── App.vue                      # 主界面（参数面板 + 预览区域）
│   ├── main.js                      # Vue 入口
│   ├── style.css                    # 全局样式
│   └── effects/
│       └── WaveBlurringEffect.js    # WebGL 效果核心算法
├── public/
│   └── demo.jpg                     # 默认测试图片（你的照片）
├── index.html                       # HTML 入口
├── vite.config.js                   # Vite 配置
├── package.json                     # 依赖配置
└── README.md                        # 项目说明
```

---

## 🎨 效果参数说明

| 参数 | 范围 | 默认值 | 效果 |
|------|------|--------|------|
| **AdjustHorizontalChromatic** | 0-100 | 70 | 水平色差，数值越大 RGB 分离越明显 |
| **AdjustDistortion** | 0-100 | 50 | 扭曲程度，控制波形变形强度 |
| **AdjustSpeed** | 0-100 | 60 | 动画速度，数值越大波动越快 |
| **AdjustSize** | 0-100 | 60 | 波形尺寸/频率，数值越大波纹越密 |
| **AdjustBlur** | 0-100 | 60 | 模糊强度，数值越大越模糊 |

---

## 🔧 常见问题

### 1. npm install 失败

**解决方案：使用国内镜像**
```bash
npm config set registry https://registry.npmmirror.com
npm install
```

### 2. 端口 3000 被占用

**解决方案：修改端口**
编辑 `vite.config.js`：
```js
server: {
  port: 3001,  // 改成其他端口
  open: true
}
```

### 3. 图片加载失败

确保 `/public/demo.jpg` 文件存在。如果没有，项目会自动生成占位图。

### 4. 效果与 AE 不完全一致

这是正常的。前端 WebGL 模拟的是近似效果，和 AE 真实插件可能有 10-20% 差异。

---

## 📝 后续扩展

### 添加新插件

1. 在 `src/effects/` 创建新的 Effect 类（参考 `WaveBlurringEffect.js`）
2. 在 `App.vue` 添加对应的参数控制
3. 更新 UI 和 shader 逻辑

### 添加后端渲染

如果需要 100% 还原 AE 效果：
1. 搭建 Node.js 后端
2. 调用 AE CLI (`aerender`)
3. 返回真实渲染结果

---

## 💡 技术细节

### WebGL Shader 实现

效果通过 GLSL fragment shader 实现：
- 波形扭曲：正弦波坐标偏移
- 色差：RGB 通道分别采样
- 模糊：9 点高斯模糊
- 动画：基于时间参数的连续变化

### 性能优化

- 使用 Three.js 的 WebGL 渲染器（硬件加速）
- 按需更新 uniform 参数
- 响应式 canvas 尺寸调整

---

## 📞 联系

快手内部项目 - WaveBlurring 实时预览工具
