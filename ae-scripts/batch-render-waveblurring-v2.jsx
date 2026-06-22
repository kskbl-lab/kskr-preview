// ========================================
// WaveBlurring 批量渲染脚本 v2
// ========================================
// 修复：强制输出 PNG 格式，修复渲染循环
// ========================================

(function() {
    // ============ 配置区域 ============
    
    // 输出路径
    var OUTPUT_FOLDER = "~/Desktop/waveblurring-renders/";
    
    // 源图片路径
    var SOURCE_IMAGE = "~/Desktop/照片/截屏2026-05-11 15.08.11.png";
    
    // 参数档位配置
    var PARAMS = {
        horizontalChromatic: [0, 50, 100],
        distortion: [0, 50, 100],
        speed: [60],
        size: [60],
        blur: [0, 50, 100]
    };
    
    // 合成设置
    var COMP_WIDTH = 1080;
    var COMP_HEIGHT = 1080;
    var FRAME_RATE = 30;
    var DURATION = 1;
    
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
        
        // 计算总数
        var totalRenders = PARAMS.horizontalChromatic.length * 
                          PARAMS.distortion.length * 
                          PARAMS.speed.length * 
                          PARAMS.size.length * 
                          PARAMS.blur.length;
        
        var result = confirm("准备渲染 " + totalRenders + " 张图片\n\n" +
              "参数档位：\n" +
              "- HorizontalChromatic: " + PARAMS.horizontalChromatic.join(", ") + "\n" +
              "- Distortion: " + PARAMS.distortion.join(", ") + "\n" +
              "- Speed: " + PARAMS.speed.join(", ") + "\n" +
              "- Size: " + PARAMS.size.join(", ") + "\n" +
              "- Blur: " + PARAMS.blur.join(", ") + "\n\n" +
              "输出路径：" + OUTPUT_FOLDER + "\n\n" +
              "点击确定开始渲染");
        
        if (!result) {
            return;
        }
        
        // 创建新项目
        app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
        
        // 导入源图片
        var importOptions = new ImportOptions(sourceFile);
        var sourceFootage = app.project.importFile(importOptions);
        
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
                            
                            $.writeln("========================================");
                            $.writeln("开始渲染 [" + renderCount + "/" + totalRenders + "]");
                            $.writeln("参数：h=" + params.horizontalChromatic + 
                                     " d=" + params.distortion +
                                     " s=" + params.speed +
                                     " z=" + params.size +
                                     " b=" + params.blur);
                            
                            // 渲染单帧
                            var success = renderSingleFrame(sourceFootage, params, outputFolder, renderCount, totalRenders);
                            
                            if (!success) {
                                alert("渲染失败！已停止。");
                                return;
                            }
                            
                            // 进度更新
                            if (renderCount % 5 === 0 || renderCount === totalRenders) {
                                var elapsed = (new Date() - startTime) / 1000;
                                var avgTime = elapsed / renderCount;
                                var remaining = (totalRenders - renderCount) * avgTime;
                                
                                $.writeln("进度：" + renderCount + "/" + totalRenders + 
                                         " (" + Math.round(renderCount/totalRenders*100) + "%)" +
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
              "总耗时：" + Math.round(totalTime) + " 秒 (" + Math.round(totalTime/60) + " 分钟)\n" +
              "平均每张：" + (totalTime/totalRenders).toFixed(1) + " 秒\n" +
              "输出路径：" + OUTPUT_FOLDER);
    }
    
    // ============ 渲染单帧函数 ============
    
    function renderSingleFrame(sourceFootage, params, outputFolder, index, total) {
        try {
            // 生成文件名
            var fileName = "waveblur_" +
                          "h" + params.horizontalChromatic +
                          "_d" + params.distortion +
                          "_s" + params.speed +
                          "_z" + params.size +
                          "_b" + params.blur +
                          ".png";
            
            var outputFile = new File(outputFolder.fsName + "/" + fileName);
            
            // 创建合成
            var compName = "Render_" + index;
            var comp = app.project.items.addComp(
                compName,
                COMP_WIDTH,
                COMP_HEIGHT,
                1.0,
                DURATION,
                FRAME_RATE
            );
            
            // 添加源图层
            var layer = comp.layers.add(sourceFootage);
            
            // 居中
            layer.position.setValue([COMP_WIDTH / 2, COMP_HEIGHT / 2]);
            
            // 缩放
            var scaleX = COMP_WIDTH / sourceFootage.width;
            var scaleY = COMP_HEIGHT / sourceFootage.height;
            var scale = Math.min(scaleX, scaleY) * 100;
            layer.scale.setValue([scale, scale]);
            
            // 应用 WaveBlurring 效果
            var effect = layer.Effects.addProperty("KSkr: WaveBlurring");
            
            if (!effect) {
                alert("错误：无法添加 WaveBlurring 效果！\n请确认插件已正确安装。");
                comp.remove();
                return false;
            }
            
            // 设置参数
            try {
                effect.property("AdjustHorizontalChromatic").setValue(params.horizontalChromatic);
                effect.property("AdjustDistortion").setValue(params.distortion);
                effect.property("AdjustSpeed").setValue(params.speed);
                effect.property("AdjustSize").setValue(params.size);
                effect.property("AdjustBlur").setValue(params.blur);
                
                $.writeln("参数设置成功");
            } catch (e) {
                $.writeln("警告：参数设置失败 - " + e.toString());
            }
            
            // 添加到渲染队列
            var renderItem = app.project.renderQueue.items.add(comp);
            
            // 配置输出模块 - 强制 PNG
            var outputModule = renderItem.outputModule(1);
            
            // 设置输出文件
            outputModule.file = outputFile;
            
            // 设置 PNG 格式
            outputModule.setSettings({
                "Format": "PNG",
                "Channels": "RGB",
                "Depth": "Millions of Colors",
                "PostRender Action": "None"
            });
            
            $.writeln("输出文件：" + fileName);
            
            // 执行渲染
            app.project.renderQueue.render();
            
            // 等待渲染完成
            while (app.project.renderQueue.numItems > 0) {
                $.sleep(100);
            }
            
            // 清理合成
            comp.remove();
            
            $.writeln("渲染完成：" + fileName);
            
            return true;
            
        } catch (e) {
            $.writeln("错误：" + e.toString());
            return false;
        }
    }
    
    // ============ 执行 ============
    
    app.beginUndoGroup("WaveBlurring Batch Render");
    try {
        main();
    } catch (e) {
        alert("脚本执行错误：\n" + e.toString());
    }
    app.endUndoGroup();
    
})();
