import * as THREE from 'three'

export default class WaveBlurringEffect {
  constructor(effectCanvas, originalCanvas) {
    this.effectCanvas = effectCanvas
    this.originalCanvas = originalCanvas
    this.renderer = null
    this.scene = null
    this.camera = null
    this.material = null
    this.texture = null
    this.mesh = null
    this.params = {
      horizontalChromatic: 70.0,
      distortion: 50.0,
      speed: 60.0,
      size: 60.0,
      blur: 60.0
    }
    this.time = 0
    this.animationId = null
    this.currentImage = null
    this.compareMode = false
  }

  init() {
    // 创建 Three.js 场景
    this.scene = new THREE.Scene()
    
    // 相机
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    
    // 渲染器
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.effectCanvas,
      antialias: true,
      alpha: true
    })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    
    // 创建 shader material
    this.createMaterial()
    
    // 创建平面
    const geometry = new THREE.PlaneGeometry(2, 2)
    this.mesh = new THREE.Mesh(geometry, this.material)
    this.scene.add(this.mesh)
    
    // 启动动画循环
    this.animate()
    
    // 监听窗口大小变化
    window.addEventListener('resize', () => this.handleResize())
  }

  createMaterial() {
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: null },
        uTime: { value: 0 },
        uHorizontalChromatic: { value: 0.7 },
        uDistortion: { value: 0.5 },
        uSpeed: { value: 0.6 },
        uSize: { value: 0.6 },
        uBlur: { value: 0.6 },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uTextureResolution: { value: new THREE.Vector2(1, 1) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform float uTime;
        uniform float uHorizontalChromatic;
        uniform float uDistortion;
        uniform float uSpeed;
        uniform float uSize;
        uniform float uBlur;
        uniform vec2 uResolution;
        uniform vec2 uTextureResolution;
        
        varying vec2 vUv;
        
        // 简单的噪声函数
        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }
        
        // 波形扭曲
        vec2 waveDistortion(vec2 uv, float time) {
          float waveFreq = uSize * 10.0 + 1.0;
          float waveAmp = uDistortion * 0.1;
          float waveSpeed = uSpeed * 0.05;
          
          // 多层波形叠加
          float wave1 = sin(uv.y * waveFreq + time * waveSpeed) * waveAmp;
          float wave2 = sin(uv.x * waveFreq * 0.7 + time * waveSpeed * 1.3) * waveAmp * 0.5;
          float wave3 = sin((uv.x + uv.y) * waveFreq * 0.5 + time * waveSpeed * 0.8) * waveAmp * 0.3;
          
          uv.x += wave1 + wave3;
          uv.y += wave2 + wave3;
          
          return uv;
        }
        
        // 高斯模糊采样
        vec4 gaussianBlur(sampler2D tex, vec2 uv, float intensity) {
          if (intensity < 0.01) {
            return texture2D(tex, uv);
          }
          
          vec4 color = vec4(0.0);
          float total = 0.0;
          float blurSize = intensity * 0.01;
          
          // 9点采样
          for (float x = -1.0; x <= 1.0; x += 1.0) {
            for (float y = -1.0; y <= 1.0; y += 1.0) {
              vec2 offset = vec2(x, y) * blurSize;
              float weight = exp(-(x*x + y*y) / 2.0);
              color += texture2D(tex, uv + offset) * weight;
              total += weight;
            }
          }
          
          return color / total;
        }
        
        void main() {
          vec2 uv = vUv;
          
          // 应用波形扭曲
          vec2 distortedUV = waveDistortion(uv, uTime);
          
          // 色差效果
          float chromatic = uHorizontalChromatic * 0.02;
          
          vec2 uvR = distortedUV + vec2(chromatic, 0.0);
          vec2 uvG = distortedUV;
          vec2 uvB = distortedUV - vec2(chromatic, 0.0);
          
          // 分别采样 RGB 通道
          float r = gaussianBlur(uTexture, uvR, uBlur).r;
          float g = gaussianBlur(uTexture, uvG, uBlur).g;
          float b = gaussianBlur(uTexture, uvB, uBlur).b;
          
          vec4 finalColor = vec4(r, g, b, 1.0);
          
          // 边缘处理
          if (distortedUV.x < 0.0 || distortedUV.x > 1.0 || 
              distortedUV.y < 0.0 || distortedUV.y > 1.0) {
            finalColor = vec4(0.0);
          }
          
          gl_FragColor = finalColor;
        }
      `
    })
  }

  loadImage(img) {
    this.currentImage = img
    
    // 更新纹理
    if (this.texture) {
      this.texture.dispose()
    }
    
    this.texture = new THREE.Texture(img)
    this.texture.needsUpdate = true
    this.material.uniforms.uTexture.value = this.texture
    this.material.uniforms.uTextureResolution.value.set(img.width, img.height)
    
    // 更新画布尺寸
    this.updateCanvasSize(img.width, img.height)
    
    // 如果是对比模式，更新原图 canvas
    if (this.compareMode && this.originalCanvas) {
      this.drawOriginalImage(img)
    }
  }

  drawOriginalImage(img) {
    if (!this.originalCanvas) return
    
    const ctx = this.originalCanvas.getContext('2d')
    this.originalCanvas.width = img.width
    this.originalCanvas.height = img.height
    ctx.drawImage(img, 0, 0)
  }

  updateCanvasSize(imgWidth, imgHeight) {
    const container = this.effectCanvas.parentElement
    if (!container) return
    
    const maxWidth = container.clientWidth - 48
    const maxHeight = container.clientHeight - 48
    
    const scale = Math.min(maxWidth / imgWidth, maxHeight / imgHeight, 1)
    
    const width = Math.floor(imgWidth * scale)
    const height = Math.floor(imgHeight * scale)
    
    this.effectCanvas.style.width = `${width}px`
    this.effectCanvas.style.height = `${height}px`
    
    this.renderer.setSize(imgWidth, imgHeight, false)
    this.material.uniforms.uResolution.value.set(imgWidth, imgHeight)
    
    if (this.compareMode && this.originalCanvas) {
      this.originalCanvas.style.width = `${width}px`
      this.originalCanvas.style.height = `${height}px`
    }
  }

  updateParams(params) {
    this.params = { ...params }
    
    // 将 0-100 范围的参数映射到 shader 使用的范围
    this.material.uniforms.uHorizontalChromatic.value = params.horizontalChromatic / 100.0
    this.material.uniforms.uDistortion.value = params.distortion / 100.0
    this.material.uniforms.uSpeed.value = params.speed / 100.0
    this.material.uniforms.uSize.value = params.size / 100.0
    this.material.uniforms.uBlur.value = params.blur / 100.0
  }

  setCompareMode(enabled) {
    this.compareMode = enabled
    
    if (enabled && this.currentImage && this.originalCanvas) {
      this.drawOriginalImage(this.currentImage)
      this.updateCanvasSize(this.currentImage.width, this.currentImage.height)
    }
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate())
    
    // 更新时间
    this.time += 0.016 // 约 60fps
    this.material.uniforms.uTime.value = this.time
    
    // 渲染
    this.renderer.render(this.scene, this.camera)
  }

  handleResize() {
    if (this.currentImage) {
      this.updateCanvasSize(this.currentImage.width, this.currentImage.height)
    }
  }

  dispose() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
    
    if (this.texture) {
      this.texture.dispose()
    }
    
    if (this.material) {
      this.material.dispose()
    }
    
    if (this.renderer) {
      this.renderer.dispose()
    }
    
    window.removeEventListener('resize', () => this.handleResize())
  }
}
