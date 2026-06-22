# WaveBlurring 批量渲染指南

## 📋 脚本说明

`batch-render-waveblurring.jsx` 用于在 AE 中批量渲染 WaveBlurring 插件的所有参数组合。

---

## 🎯 渲染方案

### 方案 1：完整档位（125 张）

**参数配置**：
- AdjustHorizontalChromatic: 0, 25, 50, 75, 100 (5档)
- AdjustDistortion: 0, 25, 50, 75, 100 (5档)
- AdjustSpeed: 60 (固定)
- AdjustSize: 60 (固定)
- AdjustBlur: 0, 25, 50, 75, 100 (5档)

**总数量**：5 × 5 × 5 = **125 张**

**预计时间**：
- 如果每张渲染 10 秒 = 约 20 分钟
- 如果每张渲染 30 秒 = 约 60 分钟

**存储空间**：约 50-150 MB（取决于图片大小）

---

### 方案 2：精简档位（27 张，推荐）

**参数配置**：
- AdjustHorizontalChromatic: 0, 50, 100 (3档)
- AdjustDistortion: 0, 50, 100 (3档)
- AdjustSpeed: 60 (固定)
- AdjustSize: 60 (固定)
- AdjustBlur: 0, 50, 100 (3档)

**总数量**：3 × 3 × 3 = **27 张**

**预计时间**：约 5-15 分钟

**存储空间**：约 10-30 MB

**优点**：快速完成，效果已覆盖主要变化

---

### 方案 3：最小档位（8 张，快速测试）

**参数配置**：
- AdjustHorizontalChromatic: 0, 100 (2档)
- AdjustDistortion: 0, 100 (2档)
- AdjustSpeed: 60 (固定)
- AdjustSize: 60 (固定)
- AdjustBlur: 0, 100 (2档)

**总数量**：2 × 2 × 2 = **8 张**

**预计时间**：约 1-3 分钟

**存储空间**：约 3-10 MB

**用途**：快速验证流程

---

## 🚀 使用步骤

### 1. 修改脚本配置

打开 `batch-render-waveblurring.jsx`，修改以下配置：

```javascript
// 输出路径（改成你的路径）
var OUTPUT_FOLDER = "~/Desktop/waveblurring-renders/";

// 源图片路径（改成你的测试图片）
var SOURCE_IMAGE = "~/Desktop/照片/截屏2026-05-11 15.08.11.png";

// 参数档位配置（根据需要修改）
var PARAMS = {
    horizontalChromatic: [0, 50, 100],  // 改成你想要的档位
    distortion: [0, 50, 100],
    speed: [60],
    size: [60],
    blur: [0, 50, 100]
};
```

---

### 2. 在 AE 中运行脚本

#### 方法 1：通过菜单运行

1. 打开 After Effects
2. 菜单：`File` > `Scripts` > `Run Script File...`
3. 选择 `batch-render-waveblurring.jsx`
4. 点击"确定"开始渲染

#### 方法 2：安装到脚本面板（推荐）

1. 将脚本复制到 AE 脚本文件夹：
   ```
   /Applications/Adobe After Effects 2024/Scripts/ScriptUI Panels/
   ```
2. 重启 AE
3. 菜单：`Window` > `batch-render-waveblurring.jsx`
4. 在脚本面板中点击运行

---

### 3. 等待渲染完成

- 脚本会自动创建合成、应用效果、渲染、清理
- 进度会在控制台显示
- 完成后会弹出提示

---

### 4. 检查输出文件

渲染完成后，检查输出文件夹：

```bash
cd ~/Desktop/waveblurring-renders/
ls -lh
```

文件命名格式：
```
waveblur_h0_d0_s60_z60_b0.png
waveblur_h25_d0_s60_z60_b0.png
waveblur_h50_d0_s60_z60_b0.png
...
```

命名规则：
- `h` = HorizontalChromatic
- `d` = Distortion
- `s` = Speed
- `z` = Size
- `b` = Blur

---

### 5. 复制到前端项目

```bash
# 创建目录
mkdir -p /Users/fanshuwei/ae-plugin-preview/public/prerendered

# 复制渲染结果
cp ~/Desktop/waveblurring-renders/*.png /Users/fanshuwei/ae-plugin-preview/public/prerendered/
```

---

## 🔧 常见问题

### Q1: 脚本报错"无法添加 WaveBlurring 效果"

**原因**：插件未正确安装或效果名称不匹配

**解决**：
1. 确认插件已安装到 AE 插件目录
2. 在 AE 中手动创建图层，查看效果准确名称
3. 修改脚本中的效果名称：
   ```javascript
   var effect = layer.Effects.addProperty("KSkr: WaveBlurring");
   ```

---

### Q2: 渲染速度太慢

**解决**：
1. 减少参数档位（用方案 2 或方案 3）
2. 降低合成尺寸：
   ```javascript
   var COMP_WIDTH = 800;  // 默认 1080
   var COMP_HEIGHT = 800;
   ```
3. 关闭预览：`Preferences` > `Previews` > `Disable`

---

### Q3: 输出文件太大

**解决**：
1. 使用 JPEG 格式代替 PNG：
   ```javascript
   outputModule.applyTemplate("JPEG Sequence");
   ```
2. 降低合成尺寸
3. 压缩图片：
   ```bash
   # 使用 ImageMagick 批量压缩
   cd ~/Desktop/waveblurring-renders/
   mogrify -quality 85 -resize 800x800 *.png
   ```

---

### Q4: 如何修改参数档位

打开脚本，修改 `PARAMS` 对象：

```javascript
// 更多档位（更平滑）
var PARAMS = {
    horizontalChromatic: [0, 20, 40, 60, 80, 100],
    distortion: [0, 20, 40, 60, 80, 100],
    speed: [60],
    size: [60],
    blur: [0, 20, 40, 60, 80, 100]
};

// 或者只渲染特定组合
var PARAMS = {
    horizontalChromatic: [70],  // 只用默认值
    distortion: [0, 25, 50, 75, 100],
    speed: [60],
    size: [60],
    blur: [0, 25, 50, 75, 100]
};
```

---

## 📊 推荐渲染策略

### 第一次（验证流程）
使用 **方案 3**（8 张），确保脚本能正常运行

### 第二次（实际使用）
使用 **方案 2**（27 张），覆盖主要效果变化

### 第三次（精细调整，可选）
根据需要增加档位，使用 **方案 1** 或自定义配置

---

## 🎨 多张测试图片

如果要用多张测试图片：

### 方法 1：修改脚本源图片路径

```javascript
var SOURCE_IMAGES = [
    "~/Desktop/照片/截屏2026-05-11 15.08.11.png",
    "~/Desktop/照片/截屏2026-05-11 15.08.20.png",
    "~/Desktop/照片/截屏2026-05-11 15.08.33.png"
];
```

然后在主循环外再套一层循环

### 方法 2：多次运行脚本

每次修改 `SOURCE_IMAGE` 和 `OUTPUT_FOLDER`

---

## ⏱️ 预计渲染时间参考

基于 M1 Pro MacBook Pro：

| 方案 | 图片数 | 预计时间 | 文件大小 |
|------|--------|----------|----------|
| 方案 3 | 8 张 | 1-3 分钟 | 3-10 MB |
| 方案 2 | 27 张 | 5-15 分钟 | 10-30 MB |
| 方案 1 | 125 张 | 20-60 分钟 | 50-150 MB |

---

## 下一步

渲染完成后告诉我，我会：
1. 重构前端代码，使用预渲染资源
2. 实现参数插值和平滑切换
3. 优化加载性能

现在可以开始渲染了！
