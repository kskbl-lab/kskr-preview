# AE Plugin Preview - WaveBlurring

AE 插件实时预览工具 - 波形模糊效果

## 功能特性

- ✅ 实时预览 WaveBlurring 插件效果
- ✅ 5 个参数实时调节
- ✅ 支持上传自定义图片
- ✅ 原图/效果图对比模式
- ✅ WebGL 加速渲染
- ✅ 参数一键重置

## 参数说明

| 参数名 | 范围 | 说明 |
|--------|------|------|
| AdjustHorizontalChromatic | 0-100 | 水平色差强度 |
| AdjustDistortion | 0-100 | 波形扭曲程度 |
| AdjustSpeed | 0-100 | 动画速度 |
| AdjustSize | 0-100 | 波形尺寸/频率 |
| AdjustBlur | 0-100 | 模糊强度 |

## 技术栈

- Vue 3
- Three.js (WebGL)
- Vite

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

浏览器会自动打开 `http://localhost:3000`

### 构建生产版本

```bash
npm run build
```

## 项目结构

```
ae-plugin-preview/
├── src/
│   ├── App.vue                      # 主应用组件
│   ├── main.js                      # 入口文件
│   ├── style.css                    # 全局样式
│   └── effects/
│       └── WaveBlurringEffect.js    # WebGL 效果实现
├── public/
│   └── demo.jpg                     # 默认测试图片
├── index.html
├── vite.config.js
└── package.json
```

## 使用说明

1. **调节参数**：拖动左侧滑块实时调节 5 个效果参数
2. **上传图片**：点击"上传图片"按钮选择本地图片
3. **对比模式**：点击"显示对比"同时查看原图和效果图
4. **重置参数**：点击"重置参数"恢复默认值

## 效果说明

### 核心算法

WaveBlurring 效果由以下部分组成：

1. **波形扭曲**：使用正弦波对图像坐标进行偏移
2. **色差**：RGB 三通道分别偏移采样
3. **模糊**：高斯模糊处理
4. **动画**：基于时间的连续变化

### Shader 实现

使用 GLSL fragment shader 实时计算每个像素的效果，通过 Three.js 渲染管线实现硬件加速。

## 扩展性

当前架构支持轻松添加新插件：

1. 在 `src/effects/` 下创建新的效果类
2. 在 `App.vue` 中添加对应的参数控制
3. 切换不同的效果渲染器

## 已知限制

- 前端 WebGL 模拟与 AE 真实插件效果可能存在 10-20% 差异
- 复杂参数组合下效果可能与 AE 不完全一致
- 建议最终效果以 AE 渲染结果为准

## 后续计划

- [ ] 添加更多 KSkr 插件支持
- [ ] 参数预设保存/加载
- [ ] 导出效果图
- [ ] 后端 AE 真实渲染（高精度模式）
- [ ] 插件配置化管理

## License

内部项目 - 快手团队使用
