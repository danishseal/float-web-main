"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1662],{1662:(e,i,t)=>{t.r(i),t.d(i,{Demo:()=>x});var n=t(29625),o=t(75617),r=t(13407),s=t(81908);class a{constructor(e,i){if(this.onResize=()=>{if(this.disposed)return;let e=this.canvas;this.vp.canvas.width=e.offsetWidth,this.vp.canvas.height=e.offsetHeight,this.vp.canvas.dpr=Math.min(window.devicePixelRatio,2),this.renderer.setSize(this.vp.canvas.width,this.vp.canvas.height,!1),this.composer.setSize(this.vp.canvas.width,this.vp.canvas.height),this.camera.aspect=this.vp.canvas.width/this.vp.canvas.height,this.camera.updateProjectionMatrix(),this.vp.scene=this.getViewSizeAtDepth()},!e)return;this.canvas=e;const t={BG:new n.Color(0),highlight:new n.Color(0xffffff)};this.palette=i||t,this.palette.highlight&&this.palette.highlight.getHexString||(this.palette.highlight=t.highlight),this.palette.BG&&this.palette.BG.clone||(this.palette.BG=t.BG);let a="#"+this.palette.highlight.getHexString();document.documentElement.style.setProperty("--text",a),this.disposed=!1,this.vp={canvas:{width:e.offsetWidth,height:e.offsetHeight,dpr:Math.min(window.devicePixelRatio,2)},scene:{width:1,height:1},screen:{width:window.innerWidth,height:window.innerHeight}},this.renderer=new n.WebGLRenderer({canvas:e,antialias:!1,stencil:!1,depth:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.vp.canvas.width,this.vp.canvas.height,!1),this.renderer.setPixelRatio(this.vp.canvas.dpr),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=n.PCFSoftShadowMap,this.camera=new n.PerspectiveCamera(45,this.vp.canvas.width/this.vp.canvas.height,.1,1e3),this.camera.position.z=5,this.scene=new n.Scene,this.scene.background=this.palette.BG.clone(),this.clock=new n.Clock,this.vp.scene=this.getViewSizeAtDepth(),this.addEvents(),this.composer=new o.s(this.renderer),this.renderPass=new s.A(this.scene,this.camera),this.params={shape:2,radius:10,scatter:1,blending:1,blendingMode:1,greyscale:!0,disable:!1},this.halftonePass=new r.l(window.innerWidth,window.innerHeight,this.params),this.composer.addPass(this.renderPass)}addEvents(){window.addEventListener("resize",this.onResize)}dispose(){this.disposed=!0,window.removeEventListener("resize",this.onResize),this.renderer&&this.renderer.dispose(),this.composer&&this.composer.dispose(),this.scene&&this.scene.clear()}getViewSizeAtDepth(e=0){let i=this.camera.fov*Math.PI/180,t=Math.abs((this.camera.position.z-e)*Math.tan(i/2)*2);return{width:t*this.camera.aspect,height:t}}init(){}render(){if(this.disposed)return;let e=this.clock.getDelta();this.composer.render(e)}}var l=t(99654);n.ColorManagement.enabled=!1;let h={black:{index:0,accentPalette:"black",id:"black",BG:new n.Color("#000"),BGLight:new n.Color("#2a282a"),text:new n.Color("#b9bec2"),highlightHover:new n.Color("#cccccc"),inactive:new n.Color("#6d6d6d"),highlight:new n.Color("#ffffff")},pink:{index:1,accentPalette:"black",id:"pink",text:new n.Color("#f0dede"),inactive:new n.Color("#e39393"),BG:new n.Color("#db7676"),highlightHover:new n.Color("#f3c6c6"),BGLight:new n.Color("#d55f5f"),highlight:new n.Color("#ffffff")},aquamarine:{index:2,accentPalette:"black",id:"aquamarine",BGLight:new n.Color("#66a2a5"),text:new n.Color("#e0f1f1"),highlightHover:new n.Color("#b5d6d8"),inactive:new n.Color("#56979b"),BG:new n.Color("#7fb9bc"),highlight:new n.Color("#ffffff")},blue:{index:3,accentPalette:"black",id:"blue",BG:new n.Color("#5963fa"),BGLight:new n.Color("#424bd3"),highlight:new n.Color("#f6f6f4"),text:new n.Color("#d2daf3"),highlightHover:new n.Color("#c1c3e9"),inactive:new n.Color("#7b82e7")},darkblue:{index:4,accentPalette:"black",id:"darkblue",BGLight:new n.Color("#2c4570"),BG:new n.Color("#446091"),text:new n.Color("#a4b8db"),highlightHover:new n.Color("#9fbae9"),highlight:new n.Color("#e7e6e4"),inactive:new n.Color("#6580ad")},grey:{index:5,accentPalette:"white",id:"grey",inactive:new n.Color("#7c8598"),BG:new n.Color("#ebebeb"),BGLight:new n.Color("#bcc2c9"),highlight:new n.Color("#122438"),text:new n.Color("#2a3e53"),highlightHover:new n.Color("#3c526a")},white:{index:6,accentPalette:"white",id:"white",BG:new n.Color("#ffffff"),BGLight:new n.Color("#dfdfdf"),text:new n.Color("#3d3d3d"),highlightHover:new n.Color("#333333"),inactive:new n.Color("#8d8d8d"),highlight:new n.Color("#000000")},orange:{index:7,accentPalette:"black",id:"orange",BG:new n.Color("#f5e1ce"),BGLight:new n.Color("#f1d7c0"),highlight:new n.Color("#f04924"),text:new n.Color("#ff7657"),highlightHover:new n.Color("#fd6e4e"),inactive:new n.Color("#ebaf92")}},d={black:{c0:new n.Color(0xb9bec2),c1:new n.Color(0),c2:new n.Color(0),c3:new n.Color(0)},pink:{c0:new n.Color(9737364),c1:new n.Color(0x9ccd32),c2:new n.Color(8608257),c3:new n.Color(8089472)},aquamarine:{c0:new n.Color(8255852),c1:new n.Color(0xaccd32),c2:new n.Color(9401144),c3:new n.Color(0xf52ee5)},blue:{c0:new n.Color(.8,.95,.4),c1:new n.Color(.5,.5,.35),c2:new n.Color(.1,.5,.4),c3:new n.Color(0,0,.85)},darkblue:{c0:new n.Color(0xd8e3ba),c1:new n.Color(8355673),c2:new n.Color(1671014),c3:new n.Color(592211)},grey:{c0:new n.Color(8882055),c1:new n.Color(8627610),c2:new n.Color(0xebebeb),c3:new n.Color(54973)},white:{c0:new n.Color(0),c1:new n.Color(0),c2:new n.Color(0),c3:new n.Color(0)},orange:{c0:new n.Color(.5,.5,.5),c1:new n.Color(.5,.5,.5),c2:new n.Color(.5,.5,.5),c3:new n.Color(.5,.5,.5)}},c=["black","pink","aquamarine","blue","darkblue","grey","white","orange"];class f{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let w=new n.OrthographicCamera(-1,1,1,-1,0,1),m=new n.BufferGeometry;m.setAttribute("position",new n.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new n.Float32BufferAttribute([0,2,0,0,2,0],2));class g{constructor(e){this._mesh=new n.Mesh(m,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,w)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}let p={name:"OrderedDitherShader",uniforms:{tDiffuse:{value:null},thresholdMapSize:{value:4},scale:{value:1},resolution:{value:new n.Vector2(1,1)},fontBaseSize:{value:1}},vertexShader:`
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float thresholdMapSize;
    uniform float scale;
    uniform vec2 resolution;
    uniform float fontBaseSize;
    varying vec2 vUv;

    float colorQuantity = 64.;

    float luma(vec3 color) {
      return dot(color, vec3(0.299, 0.587, 0.114));
    }

    float luma(vec4 color) {
      return dot(color.rgb, vec3(0.299, 0.587, 0.114));
    }

    // Otimizado: Usando lookup table em vez de condicionais
    const float bayerMatrix8x8[64] = float[64](
      0.0, 48.0, 12.0, 60.0, 3.0, 51.0, 15.0, 63.0,
      32.0, 16.0, 44.0, 28.0, 35.0, 19.0, 47.0, 31.0,
      8.0, 56.0, 4.0, 52.0, 11.0, 59.0, 7.0, 55.0,
      40.0, 24.0, 36.0, 20.0, 43.0, 27.0, 39.0, 23.0,
      2.0, 50.0, 14.0, 62.0, 1.0, 49.0, 13.0, 61.0,
      34.0, 18.0, 46.0, 30.0, 33.0, 17.0, 45.0, 29.0,
      10.0, 58.0, 6.0, 54.0, 9.0, 57.0, 5.0, 53.0,
      42.0, 26.0, 38.0, 22.0, 41.0, 25.0, 37.0, 21.0
    );

    float dither8x8(vec2 position, float brightness) {
      int x = int(mod(position.x, 8.0));
      int y = int(mod(position.y, 8.0));
      int index = x + y * 8;
      
      float limit = bayerMatrix8x8[index] / 64.0;
      return brightness < limit ? 0.0 : 1.0;
    }

    vec4 dither8x8(vec2 position, vec4 color) {
      return vec4(color.rgb * dither8x8(position, luma(color)), 1.0);
    }

    float dither4x4(vec2 position, float brightness) {
    int x = int(mod(position.x, 4.0));
    int y = int(mod(position.y, 4.0));
    int index = x + y * 4;
    float limit = 0.0;

    if (x < 4) {
        if (index == 0) limit = 0.0;
        if (index == 1) limit = 0.5625;
        if (index == 2) limit = 0.1875;
        if (index == 3) limit = 0.6875;
        if (index == 4) limit = 0.8125;
        if (index == 5) limit = 0.3125;
        if (index == 6) limit = 0.9375;
        if (index == 7) limit = 0.4375;
        if (index == 8) limit = 0.25;
        if (index == 9) limit = 0.75;
        if (index == 10) limit = 0.125;
        if (index == 11) limit = 0.625;
        if (index == 12) limit = 1.0;
        if (index == 13) limit = 0.5;
        if (index == 14) limit = 0.875;
        if (index == 15) limit = 0.375;
    }

    return brightness < limit ? 0.0 : 1.0;
    }

    vec3 dither4x4(vec2 position, vec3 color) {
    return color * dither4x4(position, luma(color));
    }

    vec4 dither4x4(vec2 position, vec4 color) {
    return vec4(color.rgb * dither4x4(position, luma(color)), 1.0);
    }

    float dither2x2(vec2 position, float brightness) {
    int x = int(mod(position.x, 2.0));
    int y = int(mod(position.y, 2.0));
    int index = x + y * 2;
    float limit = 0.0;

    if (x < 8) {
            if (index == 0) limit = 0.25;
            if (index == 1) limit = 0.75;
            if (index == 2) limit = 1.00;
            if (index == 3) limit = 0.50;
        }

        return brightness < limit ? 0.0 : 1.0;
    }

    vec3 dither2x2(vec2 position, vec3 color) {
        return color * dither2x2(position, luma(color));
    }

    vec4 dither2x2(vec2 position, vec4 color) {
        return vec4(color.rgb * dither2x2(position, luma(color)), 1.0);
    }

    void main() {
      float baseScale = (fontBaseSize * 2.0) / max(resolution.x, resolution.y);
      float scaleClean = scale / baseScale;

      vec2 newUV = vUv;
      vec4 texel = texture2D(tDiffuse, newUV);
      
      // Aplicar dithering 8x8 otimizado
      gl_FragColor = dither8x8(gl_FragCoord.xy * scaleClean, texel) * 30.0;
    }`};class v extends f{constructor(e,i){super(),this.uniforms=n.UniformsUtils.clone(p.uniforms);const t=parseFloat(getComputedStyle(document.documentElement).fontSize);this.uniforms.fontBaseSize.value=t,this.uniforms.thresholdMapSize.value=void 0!==e?e:4,this.uniforms.scale.value=void 0!==i?i:1,this.material=new n.ShaderMaterial({name:p.name,uniforms:this.uniforms,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader}),this.fsQuad=new g(this.material)}render(e,i,t){this.uniforms.tDiffuse.value=t.texture,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(i),this.clear&&e.clear()),this.fsQuad.render(e)}dispose(){this.material.dispose(),this.fsQuad.dispose()}updateFontSize(){let e=parseFloat(getComputedStyle(document.documentElement).fontSize);this.uniforms.fontBaseSize.value=e}}let u=function(e="black"){let i=new URLSearchParams(window.location.search);return null==i.get("palette")?e:i.get("palette")}("black");h[u],d[u];class x{constructor(){const e=document.querySelector("#canvas");if(!e)return;const i=h.black||{BG:new n.Color(0),highlight:new n.Color(0xffffff)};this.rendering=new a(e,i);const t=new n.AmbientLight(0xffffff,1);this.rendering.scene.add(t);const o=new n.PointLight(0xffffff,150);o.position.set(0,5,5),this.rendering.scene.add(o),this.loader=new l.B,this.loader.load("/models/semmaterial.glb",e=>{let i=e.scene;i.traverse(e=>{e.isMesh}),i.scale.set(.75,.75,.75),this.model=i,this.rendering.scene.add(i)},void 0,e=>{console.log(e)});const r=new v(8,7.5);this.rendering.composer.addPass(r),this.rendering.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.rendering.renderer.powerPreference="high-performance",this.rendering.renderer.shadowMap.enabled=!1,this.isAnimating=!1,this.animationFrameId=null,this.lastUpdate=0,this.render=this.render.bind(this),this.init()}init(){this.isAnimating=!0,this.render()}render(){if(this.rendering&&!this.disposed&&this.isAnimating){if(this.model){let e=performance.now(),i=Math.min(e-this.lastUpdate,16.666666666666668),t=2e-4*Math.PI;this.model.rotation.y+=i*t,this.lastUpdate=e}this.rendering.composer.render(),this.isAnimating&&(this.animationFrameId=requestAnimationFrame(this.render))}}pause(){this.isAnimating=!1,this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}resume(){this.isAnimating||(this.isAnimating=!0,this.render())}dispose(){this.disposed=!0,this.pause(),this.rendering&&(this.rendering.renderer.dispose(),this.rendering.composer.dispose(),this.rendering.scene.clear())}}window.addEventListener("keydown",e=>{let i=c.indexOf(u);switch(e.key){case"ArrowLeft":let t=i-1<0?c.length-1:i-1;window.location.search="?palette="+c[t];break;case"ArrowRight":let n=(i+1)%c.length;window.location.search="?palette="+c[n]}})}}]);