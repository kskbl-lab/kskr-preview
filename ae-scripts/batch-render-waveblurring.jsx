// ========================================
// WaveBlurring 批量渲染脚本
// ========================================
// 用途：自动渲染 WaveBlurring 插件的所有参数组合
// 使用方法：在 AE 中 File > Scripts > Run Script File
// ========================================

(function() {
    // ============ 配置区域 ============
    
    // 输出路径（请修改为你的路径）
    var OUTPUT_FOLDER = "~/Desktop/waveblurring-renders/";
    
    // 源图片路径（请修改为你要使用的测试图片）
    var SOURCE_IMAGE = "~/Desktop/照片/截屏2026-05-11 15.08.11.png";
    
    // 参数档位配置
    var PARAMS = {
        horizontalChromatic: [0, 25, 50, 75, 100],
        distortion: [0, 25, 50, 75, 100],
        speed: [60], // 固定值
        size: [60],  // 固定值
        blur: [0, 25, 50, 75, 100]
    };
    
    // 合成尺寸
    var COMP_WIDTH = 1080;
    var COMP_HEIGHT = 1080;
    var FRAME_RATE = 30;
    var DURATION = 1; // 秒
    
    // ============ 主函数 ============
    
    function main() {
        // 检查输出文件夹
        var outputFolder = new Folder(OUTPUT_FOLDER);
        if (!outputFolder.exists) {
            outputFolder.create();
        }
        
        // 检查源图片
        var sourceFile = new File(SOURCE_IMAGE);
        if (!sourceFile.exists) {
            alert("错误：源图片不存在！\n路径：" + SOURCE_IMAGE);
            return;
        }
        
        // 创建新项目
        app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
        var project = app.newProject();
        
        // 导入源图片
        var importOptions = new ImportOptions(sourceFile);
        var sourceFootage = app.project.importFile(importOptions);
        
        // 计算总渲染数量
        var totalRenders = PARAMS.horizontalChromatic.length * 
                          PARAMS.distortion.length * 
                          PARAMS.speed.length * 
                          PARAMS.size.length * 
                          PARAMS.blur.length;
        
        alert("准备渲染 " + totalRenders + " 张图片\n\n" +
              "参数档位：\n" +
              "- HorizontalChromatic: " + PARAMS.horizontalChromatic.length + " 档\n" +
              "- Distortion: " + PARAMS.distortion.length + " 档\n" +
              "- Speed: " + PARAMS.speed.length + " 档\n" +
              "- Size: " + PARAMS.size.length + " 档\n" +
              "- Blur: " + PARAMS.blur.length + " 档\n\n" +
              "输出路径：" + OUTPUT_FOLDER + "\n\n" +
              "点击确定开始渲染");
        
        var renderCount = 0;
        var startTime = new Date();
        
        // 遍历所有参数组合
        for (var i1 = 0; i1 < PARAMS.horizontalChromatic.length; i1++) {
            for (var i2 = 0; i2 < PARAMS.distortion.length; i2++) {
                for (var i3 = 0; i3 < PARAMS.speed.length; i3++) {
                    for (var i4 = 0; i4 < PARAMS.size.length; i4++) {
                        for (var i5 = 0; i5 < PARAMS.blur.length; i5++) {
                            var params = {
                                horizontalChromatic: PARAMS.horizontalChromatic[i1],
                                distortion: PARAMS.distortion[i2],
                                speed: PARAMS.speed[i3],
                                size: PARAMS.size[i4],
                                blur: PARAMS.blur[i5]
                            };
                            
                            renderCount++;
                            
                            // 创建合成并渲染
                            renderSingleFrame(sourceFootage, params, outputFolder, renderCount, totalRenders);
                            
                            // 每 10 个显示进度
                            if (renderCount % 10 === 0) {
                                var elapsed = (new Date() - startTime) / 1000;
                                var avgTime = elapsed / renderCount;
                                var remaining = (totalRenders - renderCount) * avgTime;
                                
                                $.writeln("进度：" + renderCount + "/" + totalRenders + 
                                         " | 已用时：" + Math.round(elapsed) + "秒" +
                                         " | 预计剩余：" + Math.round(remaining) + "秒");
                            }
                        }
                    }
                }
            }
        }
        
        var totalTime = (new Date() - startTime) / 1000;
        alert("渲染完成！\n\n" +
              "总数量：" + totalRenders + " 张\n" +
              "总耗时：" + Math.round(totalTime) + " 秒\n" +
              "输出路径：" + OUTPUT_FOLDER);
    }
    
    // ============ 渲染单帧函数 ============
    
    function renderSingleFrame(sourceFootage, params, outputFolder, index, total) {
        // 创建合成
        var comp = app.project.items.addComp(
            "Render_" + index,
            COMP_WIDTH,
            COMP_HEIGHT,
            1.0,
            DURATION,
            FRAME_RATE
        );
        
        // 添加源图层
        var layer = comp.layers.add(sourceFootage);
        
        // 居中并缩放
        layer.position.setValue([COMP_WIDTH / 2, COMP_HEIGHT / 2]);
        
        // 缩放图层以适应合成
        var scaleX = COMP_WIDTH / sourceFootage.width;
        var scaleY = COMP_HEIGHT / sourceFootage.height;
        var scale = Math.min(scaleX, scaleY) * 100;
        layer.scale.setValue([scale, scale]);
        
        // 应用 WaveBlurring 效果
        var effect = layer.Effects.addProperty("KSkr: WaveBlurring");
        
        if (effect) {
            // 设置参数
            try {
                effect.property("AdjustHorizontalChromatic").setValue(params.horizontalChromatic);
                effect.property("AdjustDistortion").setValue(params.distortion);
                effect.property("AdjustSpeed").setValue(params.speed);
                effect.property("AdjustSize").setValue(params.size);
                effect.property("AdjustBlur").setValue(params.blur);
            } catch (e) {
                $.writeln("警告：参数设置失败 - " + e.toString());
            }
        } else {
            alert("错误：无法添加 WaveBlurring 效果！\n请确认插件已正确安装。");
            return;
        }
        
        // 生成文件名
        var fileName = "waveblur_" +
                      "h" + params.horizontalChromatic +
                      "_d" + params.distortion +
                      "_s" + params.speed +
                      "_z" + params.size +
                      "_b" + params.blur +
                      ".png";
        
        var outputFile = new File(outputFolder.fsName + "/" + fileName);
        
        // 添加到渲染队列
        var renderItem = app.project.renderQueue.items.add(comp);
        
        // 配置输出模块
        var outputModule = renderItem.outputModule(1);
        outputModule.file = outputFile;
        
        // PNG 序列设置
        outputModule.applyTemplate("PNG Sequence");
        
        // 渲染设置
        renderItem.render = true;
        
        // 执行渲染
        app.project.renderQueue.render();
        
        // 清理合成
        comp.remove();
        
        // 进度显示
        $.writeln("[" + index + "/" + total + "] 渲染完成：" + fileName);
    }
    
    // ============ 执行 ============
    
    app.beginUndoGroup("WaveBlurring Batch Render");
    main();
    app.endUndoGroup();
    
})();
