(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,o)=>{const s=o(377),a=o(613),{lightningChart:n,LUT:i,PalettedFill:r,emptyLine:l,ColorShadingStyles:d,LegendBoxBuilders:c,regularColorSteps:h,SolidLine:p,Themes:u}=s,{createWaterDropDataGenerator:y}=a,m=document.getElementById("chart")||document.body;m===document.body&&(m.style.width="100vw",m.style.height="100vh",m.style.margin="0px");const w=document.createElement("div"),g=document.createElement("div");m.append(w),m.append(g),w.style.width="100%",w.style.height="70%",g.style.width="100%",g.style.height="30%";const x=n({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}),S=x.Chart3D({container:w,theme:u[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Click twice to project path to 2D").setBoundingBox({x:1,z:1,y:.4}).setCameraAutomaticFittingEnabled(!1).setCameraLocation({x:.23,z:.44,y:.5}).setCursorMode(void 0),v=x.ChartXY({container:g}).setTitle("");v.forEachAxis((e=>e.setAnimationScroll(!1))),v.axisY.setInterval({start:0,end:100}),v.axisX.setTitle("Distance"),y().setColumns(500).setRows(500).generate().then((e=>{const t=S.getTheme(),o=new i({interpolate:!0,steps:h(0,70,t.examples.coldHotColorPalette)}),s=new r({lut:o,lookUpProperty:"y"}),a=S.addSurfaceGridSeries({columns:500,rows:500}).setFillStyle(s).setWireframeStyle(l).setColorShadingStyle(new d.Phong).invalidateHeightMap(e),n=v.addPointLineAreaSeries({dataPattern:"ProgressiveX"}).setAreaFillStyle(s);let u,y;v.axisY.setStrokeStyle(new p({thickness:3,fillStyle:s})),S.addLegendBox(c.VerticalLegendBox).add(S);const m=S.addPointSeries({individualPointSizeEnabled:!0}).setMouseInteractions(!1).setAutoScrollingEnabled(!1),w=()=>{const t=[],o=[];if(u&&t.push({...u,size:15}),u&&y){o.push({x:0,y:u.y});const s=y.x-u.x,a=y.z-u.z,n=Math.sqrt(s**2+a**2),i={x:s/n,z:a/n},r=5;for(let s=r;s<=n-r;s+=r){const a=u.x+s*i.x,n=u.z+s*i.z,r=e[Math.round(a)][Math.round(n)];t.push({x:a,z:n,y:r,size:8}),o.push({x:s,y:r})}t.push({...y,size:15}),o.push({x:n,y:y.y})}m.clear().add(t),n.clear().appendJSON(o)};a.onMouseMove(((e,t,o)=>{!u||u.preview?u={...o,preview:!0}:y&&!y.preview||(y={...o,preview:!0}),w()})),a.onMouseClick(((e,t,o)=>{!u||u.preview?u=o:!y||y.preview?y=o:(u=void 0,y=void 0),w()}))}))}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);