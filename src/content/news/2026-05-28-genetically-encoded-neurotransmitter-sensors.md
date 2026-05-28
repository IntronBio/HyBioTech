---
title: "前沿 | 基因编码荧光探针如何实现神经递质的实时、在体、高时空分辨检测"
date: 2026-05-28
description: "北京大学李毓龙课题组等团队近年来开发的 GRAB 系列与 dLight 系列基因编码荧光探针，正在改写神经生物学研究的范式。本文梳理其技术路线、性能对比与代表性应用。"
author: "HyBioTech"
---

<div class="not-prose">

<!-- ====== Lede / 导语 ====== -->
<div class="border-l-2 border-cyan-500 pl-8 mb-20">
  <p class="text-xl md:text-2xl text-slate-300 leading-relaxed font-light mb-0">
    神经递质是神经系统信息传递的核心化学信使。长期以来，检测神经递质在<strong class="text-white font-normal">活体大脑中的实时动态变化</strong>一直是一个巨大的技术挑战——传统方法在时间分辨率、分子特异性与空间精度之间，始终难以兼得。
  </p>
</div>

<!-- ====== 传统方法 vs GEFI 对比图 ====== -->
<div class="mb-20">
  <svg viewBox="0 0 720 210" xmlns="http://www.w3.org/2000/svg" class="w-full">
    <defs>
      <linearGradient id="gCyan" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="#22d3ee" stop-opacity="0.03"/>
      </linearGradient>
      <linearGradient id="gRed" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#f87171" stop-opacity="0.10"/>
        <stop offset="100%" stop-color="#f87171" stop-opacity="0.02"/>
      </linearGradient>
      <linearGradient id="gGreen" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#4ade80" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#4ade80" stop-opacity="0.02"/>
      </linearGradient>
    </defs>

    <!-- 传统方法 -->
    <rect x="10" y="10" width="215" height="190" rx="8" fill="url(#gRed)" stroke="#f87171" stroke-opacity="0.15"/>
    <text x="30" y="42" fill="#f87171" font-size="12" font-weight="600" letter-spacing="2">TRADITIONAL</text>
    <text x="30" y="70" fill="#94a3b8" font-size="14">
      <tspan x="30" dy="0">微透析 + HPLC</tspan>
      <tspan x="30" dy="22">时间分辨率: <tspan fill="#f87171">~ 分钟</tspan></tspan>
      <tspan x="30" dy="22">分子特异性: <tspan fill="#fbbf24">中等</tspan></tspan>
      <tspan x="30" dy="22">空间精度: <tspan fill="#f87171">低</tspan></tspan>
    </text>

    <!-- 电化学 -->
    <rect x="12" y="14" width="211" height="182" rx="7" fill="none" stroke="#f87171" stroke-opacity="0.08" stroke-width="1" stroke-dasharray="3 3"/>

    <!-- 电化学 -->
    <rect x="250" y="10" width="215" height="190" rx="8" fill="url(#gRed)" stroke="#f87171" stroke-opacity="0.15"/>
    <text x="270" y="42" fill="#f87171" font-size="12" font-weight="600" letter-spacing="2">ELECTROCHEMICAL</text>
    <text x="270" y="70" fill="#94a3b8" font-size="14">
      <tspan x="270" dy="0">FSCV 快扫循环伏安</tspan>
      <tspan x="270" dy="22">时间分辨率: <tspan fill="#4ade80">~ 100 ms</tspan></tspan>
      <tspan x="270" dy="22">分子特异性: <tspan fill="#f87171">低</tspan></tspan>
      <tspan x="270" dy="22">适用递质: <tspan fill="#fbbf24">仅可氧化分子</tspan></tspan>
    </text>

    <!-- 箭头 -->
    <text x="478" y="110" fill="#475569" font-size="24">→</text>

    <!-- GEFI -->
    <rect x="500" y="10" width="210" height="190" rx="8" fill="url(#gCyan)" stroke="#22d3ee" stroke-opacity="0.25"/>
    <text x="520" y="42" fill="#22d3ee" font-size="12" font-weight="600" letter-spacing="2">GEFI PROBES ★</text>
    <text x="520" y="70" fill="#94a3b8" font-size="14">
      <tspan x="520" dy="0">基因编码荧光探针</tspan>
      <tspan x="520" dy="22">时间分辨率: <tspan fill="#4ade80">毫秒级</tspan></tspan>
      <tspan x="520" dy="22">分子特异性: <tspan fill="#4ade80">极高</tspan></tspan>
      <tspan x="520" dy="22">细胞类型特异性: <tspan fill="#4ade80">是</tspan></tspan>
    </text>

    <!-- 标签 -->
    <text x="230" y="170" fill="#475569" font-size="11" text-anchor="middle">✕ 时空分辨率难以兼得</text>
    <text x="605" y="170" fill="#22d3ee" font-size="11" text-anchor="middle" opacity="0.7">✓ 三者同时满足</text>
  </svg>
  <p class="text-center text-xs text-slate-600 mt-3 tracking-wide">图 1 · 神经递质检测方法的技术路线对比</p>
</div>

</div>

<!-- ====== 引言 ====== -->
基因编码荧光探针 (Genetically Encoded Fluorescent Indicators, **GEFIs**) 的出现，正在从根本上改变这一局面。这类探针将分子识别元件与荧光报告基团融合表达，能够在**特定细胞类型**或**亚细胞结构**中实现对目标分子的实时"看见"。

<div class="w-16 h-[1px] bg-slate-700/50 my-16 mx-auto"></div>

## 技术路线

当前主流的神经递质荧光探针主要基于两类支架：**GPCR 骨架重组**与**细菌周质结合蛋白 (PBPs)**。

<div class="not-prose">

<!-- ====== GRAB 原理示意图 ====== -->
<div class="my-16">
  <svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" class="w-full">
    <defs>
      <linearGradient id="memGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#475569" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#475569" stop-opacity="0.1"/>
      </linearGradient>
    </defs>

    <!-- 左侧：静息态 -->
    <text x="170" y="28" fill="#94a3b8" font-size="13" text-anchor="middle" letter-spacing="1">静息态 (Basal)</text>

    <!-- 细胞膜 -->
    <rect x="40" y="45" width="260" height="8" rx="4" fill="url(#memGrad)" stroke="#64748b" stroke-opacity="0.3"/>
    <text x="170" y="45" fill="#64748b" font-size="9" text-anchor="middle" dy="-6">Plasma Membrane</text>

    <!-- GPCR 7TM 示意 -->
    <rect x="100" y="53" width="140" height="22" rx="4" fill="#1e293b" stroke="#475569" stroke-opacity="0.6"/>
    <text x="170" y="68" fill="#64748b" font-size="9" text-anchor="middle">GPCR 7-TM Domain</text>

    <!-- TM1-7 简易柱 -->
    <g fill="none" stroke="#475569" stroke-opacity="0.4" stroke-width="1">
      <rect x="107" y="30" width="9" height="52" rx="2"/>
      <rect x="120" y="30" width="9" height="52" rx="2"/>
      <rect x="133" y="30" width="9" height="52" rx="2"/>
      <rect x="157" y="30" width="9" height="52" rx="2"/>
      <rect x="170" y="30" width="9" height="52" rx="2"/>
      <rect x="183" y="30" width="9" height="52" rx="2"/>
      <rect x="196" y="30" width="9" height="52" rx="2"/>
    </g>

    <!-- cpEGFP (暗) -->
    <ellipse cx="170" cy="90" rx="22" ry="20" fill="#1e293b" stroke="#475569" stroke-opacity="0.5"/>
    <text x="170" y="94" fill="#64748b" font-size="9" text-anchor="middle">cpEGFP</text>
    <text x="170" y="120" fill="#475569" font-size="10" text-anchor="middle">低荧光</text>

    <!-- 箭头 -->
    <text x="340" y="80" fill="#475569" font-size="28">→</text>
    <text x="340" y="100" fill="#475569" font-size="9" text-anchor="middle">配体结合</text>

    <!-- 右侧：激活态 -->
    <text x="510" y="28" fill="#22d3ee" font-size="13" text-anchor="middle" letter-spacing="1">激活态 (Ligand-Bound) ✦</text>

    <rect x="380" y="45" width="260" height="8" rx="4" fill="url(#memGrad)" stroke="#64748b" stroke-opacity="0.3"/>

    <!-- NT 配体 -->
    <circle cx="510" cy="18" r="10" fill="#22d3ee" fill-opacity="0.2" stroke="#22d3ee" stroke-opacity="0.5"/>
    <text x="510" y="15" fill="#22d3ee" font-size="8" text-anchor="middle" dy="-12">Ligand</text>

    <rect x="440" y="53" width="140" height="22" rx="4" fill="#0f172a" stroke="#22d3ee" stroke-opacity="0.3"/>
    <g fill="none" stroke="#22d3ee" stroke-opacity="0.2" stroke-width="1">
      <rect x="447" y="30" width="9" height="52" rx="2"/>
      <rect x="460" y="30" width="9" height="52" rx="2"/>
      <rect x="473" y="30" width="9" height="52" rx="2"/>
      <rect x="497" y="30" width="9" height="52" rx="2"/>
      <rect x="510" y="30" width="9" height="52" rx="2"/>
      <rect x="523" y="30" width="9" height="52" rx="2"/>
      <rect x="536" y="30" width="9" height="52" rx="2"/>
    </g>

    <!-- cpEGFP (亮) -->
    <ellipse cx="510" cy="90" rx="24" ry="22" fill="#22d3ee" fill-opacity="0.15" stroke="#22d3ee" stroke-opacity="0.5"/>
    <text x="510" y="94" fill="#22d3ee" font-size="9" text-anchor="middle">cpEGFP</text>
    <text x="510" y="120" fill="#22d3ee" font-size="10" text-anchor="middle">高荧光 ➔</text>

    <!-- 荧光信号示意 -->
    <g transform="translate(510, 150)">
      <rect x="-60" y="0" width="120" height="28" rx="4" fill="#22d3ee" fill-opacity="0.08"/>
      <text x="0" y="12" fill="#22d3ee" font-size="10" text-anchor="middle">ΔF/F₀ > 200%</text>
      <text x="0" y="26" fill="#64748b" font-size="8" text-anchor="middle">荧光响应输出</text>
    </g>

    <!-- 底部标注 -->
    <text x="170" y="270" fill="#475569" font-size="10" text-anchor="middle">GPCR 3rd Intracellular Loop (ICL3)</text>
    <text x="510" y="270" fill="#64748b" font-size="10" text-anchor="middle">构象重排 → cpEGFP 增亮</text>
  </svg>
  <p class="text-center text-xs text-slate-600 mt-3 tracking-wide">图 2 · GRAB 探针工作原理：cpEGFP 插入 GPCR 第三胞内环 (ICL3)，配体结合引发构象变化，驱动荧光增强</p>
</div>

</div>

### 1. 基于 GPCR 骨架：GRAB 系列

**GRAB** (**G**PCR-**A**ctivation **B**ased) 策略由北京大学李毓龙课题组首创。其核心思路极为精巧：将构象敏感的 **cpEGFP**（环化重排 GFP）插入到特定 GPCR 的第三胞内环 (ICL3)。配体结合触发的受体跨膜区构象重排，直接驱动 cpEGFP 生色团微环境变化，将化学信号转化为光学信号。

目前已报道的 GRAB 家族成员覆盖了神经科学中最受关注的小分子递质与调质：

<div class="not-prose">
<div class="grid grid-cols-2 md:grid-cols-3 gap-3 my-10">
  <div class="bg-slate-900/60 border border-slate-800 rounded-lg px-5 py-4">
    <div class="text-cyan-400 font-bold text-sm mb-1">GRAB_DA</div>
    <div class="text-slate-400 text-xs">多巴胺 · 3 种亲和力变体</div>
    <div class="text-slate-500 text-xs mt-1">ΔF/F₀ > 200%</div>
  </div>
  <div class="bg-slate-900/60 border border-slate-800 rounded-lg px-5 py-4">
    <div class="text-indigo-400 font-bold text-sm mb-1">GRAB_NE</div>
    <div class="text-slate-400 text-xs">去甲肾上腺素</div>
    <div class="text-slate-500 text-xs mt-1">高选择性</div>
  </div>
  <div class="bg-slate-900/60 border border-slate-800 rounded-lg px-5 py-4">
    <div class="text-emerald-400 font-bold text-sm mb-1">GRAB_5-HT</div>
    <div class="text-slate-400 text-xs">5-羟色胺 / 血清素</div>
    <div class="text-slate-500 text-xs mt-1">亚秒级响应</div>
  </div>
  <div class="bg-slate-900/60 border border-slate-800 rounded-lg px-5 py-4">
    <div class="text-amber-400 font-bold text-sm mb-1">GRAB_ACh</div>
    <div class="text-slate-400 text-xs">乙酰胆碱 · v3 迭代</div>
    <div class="text-slate-500 text-xs mt-1">灵敏度持续优化</div>
  </div>
  <div class="bg-slate-900/60 border border-slate-800 rounded-lg px-5 py-4">
    <div class="text-rose-400 font-bold text-sm mb-1">GRAB_Ado</div>
    <div class="text-slate-400 text-xs">腺苷</div>
    <div class="text-slate-500 text-xs mt-1">首款 GPCR-Ado 探针</div>
  </div>
  <div class="bg-slate-900/60 border border-slate-800 rounded-lg px-5 py-4">
    <div class="text-sky-400 font-bold text-sm mb-1">GRAB_ATP</div>
    <div class="text-slate-400 text-xs">胞外 ATP</div>
    <div class="text-slate-500 text-xs mt-1">嘌呤能信号可视化</div>
  </div>
</div>
</div>

### 2. 基于 PBP 支架：iGluSnFR / iSeroSnFR

另一条技术路线以细菌周质结合蛋白 (Periplasmic Binding Proteins, **PBPs**) 为分子识别骨架，由 HHMI Janelia 的 **Loren Looger** 实验室主导。PBP 在结合配体后发生"铰链-闭合"构象变化，这一机械运动被耦合到 cpGFP 的荧光调制上。

<div class="not-prose">
<div class="grid grid-cols-2 gap-3 my-10">
  <div class="bg-slate-900/60 border border-slate-800 rounded-lg px-5 py-4">
    <div class="text-green-400 font-bold text-sm mb-1">iGluSnFR v3</div>
    <div class="text-slate-400 text-xs">谷氨酸 · 突触精确定位</div>
    <div class="text-slate-500 text-xs mt-1">ΔF/F₀ > 400%</div>
  </div>
  <div class="bg-slate-900/60 border border-slate-800 rounded-lg px-5 py-4">
    <div class="text-purple-400 font-bold text-sm mb-1">iSeroSnFR</div>
    <div class="text-slate-400 text-xs">血清素 · 快速动力学</div>
    <div class="text-slate-500 text-xs mt-1">亚微摩尔亲和力</div>
  </div>
</div>
</div>

<div class="w-16 h-[1px] bg-slate-700/50 my-16 mx-auto"></div>

## 性能指标与对比

<div class="not-prose">
<div class="overflow-x-auto my-12">
  <table class="w-full text-sm border-separate border-spacing-0">
    <thead>
      <tr>
        <th class="text-left px-5 py-3 bg-slate-900/80 border-b border-slate-800 text-slate-300 font-semibold text-xs uppercase tracking-wider rounded-tl-lg">指标</th>
        <th class="text-left px-5 py-3 bg-slate-900/80 border-b border-slate-800 text-slate-300 font-semibold text-xs uppercase tracking-wider">含义</th>
        <th class="text-left px-5 py-3 bg-slate-900/80 border-b border-slate-800 text-slate-300 font-semibold text-xs uppercase tracking-wider rounded-tr-lg">评估基准</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-slate-800/50">
        <td class="px-5 py-4 text-cyan-400 font-mono text-xs font-bold">ΔF/F₀</td>
        <td class="px-5 py-4 text-slate-300">最大荧光响应幅度</td>
        <td class="px-5 py-4 text-slate-400 text-xs">GRAB 100–300% · iGluSnFR3 > 400%</td>
      </tr>
      <tr class="border-b border-slate-800/50">
        <td class="px-5 py-4 text-cyan-400 font-mono text-xs font-bold">K<sub>d</sub></td>
        <td class="px-5 py-4 text-slate-300">表观解离常数（亲和力）</td>
        <td class="px-5 py-4 text-slate-400 text-xs">匹配靶区生理浓度范围</td>
      </tr>
      <tr class="border-b border-slate-800/50">
        <td class="px-5 py-4 text-cyan-400 font-mono text-xs font-bold">S / N</td>
        <td class="px-5 py-4 text-slate-300">对靶标 vs. 类似物的选择性</td>
        <td class="px-5 py-4 text-slate-400 text-xs">需全交叉反应谱验证</td>
      </tr>
      <tr class="border-b border-slate-800/50">
        <td class="px-5 py-4 text-cyan-400 font-mono text-xs font-bold">τ<sub>on/off</sub></td>
        <td class="px-5 py-4 text-slate-300">响应与衰减动力学</td>
        <td class="px-5 py-4 text-slate-400 text-xs">毫秒–秒级 · 取决于应用场景</td>
      </tr>
      <tr class="border-b border-slate-800/50">
        <td class="px-5 py-4 text-cyan-400 font-mono text-xs font-bold">λ<sub>ex/em</sub></td>
        <td class="px-5 py-4 text-slate-300">激发 / 发射光谱</td>
        <td class="px-5 py-4 text-slate-400 text-xs">NIR 探针利于深层组织 · 多色复用</td>
      </tr>
      <tr>
        <td class="px-5 py-4 text-cyan-400 font-mono text-xs font-bold rounded-bl-lg">t<sub>½</sub></td>
        <td class="px-5 py-4 text-slate-300">光稳定性（抗漂白）</td>
        <td class="px-5 py-4 text-slate-400 text-xs rounded-br-lg">双光子长时间成像关键参数</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

> **选型要点：** 没有"最好"的探针，只有最匹配实验需求的探针。亲和力 (Kd) 应与待测脑区的生理浓度匹配——过高则信号饱和，过低则灵敏度不足。

<div class="w-16 h-[1px] bg-slate-700/50 my-16 mx-auto"></div>

## 应用前沿

<div class="not-prose">

<!-- ====== 应用场景图 ====== -->
<div class="grid md:grid-cols-3 gap-6 my-12">

  <div class="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
    <div class="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8" stroke-opacity="0.3"/><circle cx="12" cy="12" r="5" stroke-opacity="0.5"/></svg>
    </div>
    <h4 class="text-white font-bold text-sm mb-3">多色多重成像</h4>
    <p class="text-slate-400 text-xs leading-relaxed">
      近红外 (NIR) 波段探针的出现，使同一脑区同时观察 <strong class="text-slate-300">2–3 种</strong>神经调质动态成为可能。绿色 GRAB_DA 与红色钙指示剂 jRGECO1a 联用，可同步记录多巴胺释放与神经元放电。
    </p>
  </div>

  <div class="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
    <div class="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    </div>
    <h4 class="text-white font-bold text-sm mb-3">自由活动光纤记录</h4>
    <p class="text-slate-400 text-xs leading-relaxed">
      埋植光纤在小鼠执行<strong class="text-slate-300">社交、奖赏学习、药物成瘾</strong>等行为任务时，实时读取特定脑区神经化学信号——这是最具转化潜力的方向。
    </p>
  </div>

  <div class="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
    <div class="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
    </div>
    <h4 class="text-white font-bold text-sm mb-3">亚细胞分辨成像</h4>
    <p class="text-slate-400 text-xs leading-relaxed">
      融合<strong class="text-slate-300">突触前/后定位信号</strong>的探针变体，可区分不同亚细胞区室的递质动力学，揭示此前无法观测的突触可塑性机制。
    </p>
  </div>

</div>
</div>

<div class="w-16 h-[1px] bg-slate-700/50 my-16 mx-auto"></div>

## 对分子咨询工作的启示

基因编码荧光探针的开发是一个典型的**多学科交叉工程**，涉及分子建模、蛋白质工程、高通量筛选与在体验证的全链路能力：

<div class="not-prose">
<div class="relative my-12">
  <!-- 流程线 -->
  <div class="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-slate-800 -translate-y-1/2"></div>

  <div class="grid md:grid-cols-5 gap-4 relative">
    <div class="bg-[#020617] border border-slate-800 rounded-lg px-4 py-4 text-center">
      <div class="text-cyan-400 font-mono text-xs mb-2">01</div>
      <div class="text-white text-xs font-bold mb-1">GPCR 结构解析</div>
      <div class="text-slate-500 text-xs leading-relaxed">分子建模<br/>理性设计</div>
    </div>
    <div class="bg-[#020617] border border-slate-800 rounded-lg px-4 py-4 text-center">
      <div class="text-indigo-400 font-mono text-xs mb-2">02</div>
      <div class="text-white text-xs font-bold mb-1">Linker 优化</div>
      <div class="text-slate-500 text-xs leading-relaxed">长度 / 序列<br/>构象耦合筛选</div>
    </div>
    <div class="bg-[#020617] border border-slate-800 rounded-lg px-4 py-4 text-center">
      <div class="text-emerald-400 font-mono text-xs mb-2">03</div>
      <div class="text-white text-xs font-bold mb-1">高通量筛选</div>
      <div class="text-slate-500 text-xs leading-relaxed">细胞体系<br/>体外验证</div>
    </div>
    <div class="bg-[#020617] border border-slate-800 rounded-lg px-4 py-4 text-center">
      <div class="text-amber-400 font-mono text-xs mb-2">04</div>
      <div class="text-white text-xs font-bold mb-1">病毒包装</div>
      <div class="text-slate-500 text-xs leading-relaxed">AAV 载体<br/>体内递送</div>
    </div>
    <div class="bg-[#020617] border border-slate-800 rounded-lg px-4 py-4 text-center">
      <div class="text-rose-400 font-mono text-xs mb-2">05</div>
      <div class="text-white text-xs font-bold mb-1">在体成像</div>
      <div class="text-slate-500 text-xs leading-relaxed">光纤 / 双光子<br/>数据解析</div>
    </div>
  </div>
</div>
</div>

<div class="not-prose">
<div class="bg-gradient-to-r from-cyan-950/30 to-indigo-950/30 border border-cyan-500/20 rounded-2xl p-8 my-14">
  <div class="text-cyan-400 font-bold text-sm mb-3 tracking-wide">HyBioTech 的核心能力</div>
  <p class="text-slate-300 leading-relaxed text-sm">
    从探针骨架的理性设计，到连接肽序列的筛选优化，再到病毒包装与在体成像方案的搭建——我们为从事探针开发或应用的课题组提供<strong class="text-white">从方案评估到实验验证的全链路咨询</strong>，帮助研究者在最短时间内完成从概念到数据的技术闭环。
  </p>
</div>
</div>

---

<div class="not-prose">

<!-- ====== 延伸阅读 ====== -->
<div class="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mt-16 mb-14">
  <div class="flex items-center gap-3 mb-6">
    <div class="w-1 h-5 bg-cyan-500 rounded-full"></div>
    <span class="text-cyan-400 text-xs font-bold tracking-widest uppercase">Further Reading</span>
  </div>

  <div class="space-y-4">
    <div class="flex gap-4 items-start">
      <span class="text-slate-600 text-xs font-mono mt-0.5 shrink-0">Cell 2018</span>
      <span class="text-slate-300 text-sm">Sun, F. et al. <em>A Genetically Encoded Fluorescent Sensor Enables Rapid and Specific Detection of Dopamine in Flies, Fish, and Mice.</em></span>
    </div>
    <div class="flex gap-4 items-start">
      <span class="text-slate-600 text-xs font-mono mt-0.5 shrink-0">Neuron 2019</span>
      <span class="text-slate-300 text-sm">Feng, J. et al. <em>A Genetically Encoded Fluorescent Sensor for Rapid and Specific In Vivo Detection of Norepinephrine.</em></span>
    </div>
    <div class="flex gap-4 items-start">
      <span class="text-slate-600 text-xs font-mono mt-0.5 shrink-0">Nat Neurosci 2021</span>
      <span class="text-slate-300 text-sm">Wan, J. et al. <em>A Genetically Encoded Sensor for Measuring Serotonin Dynamics.</em></span>
    </div>
    <div class="flex gap-4 items-start">
      <span class="text-slate-600 text-xs font-mono mt-0.5 shrink-0">Nat Methods 2023</span>
      <span class="text-slate-300 text-sm">Aggarwal, A. et al. <em>Glutamate Indicators with Improved Kinetics and Localization for Synaptic Imaging.</em></span>
    </div>
    <div class="flex gap-4 items-start">
      <span class="text-slate-600 text-xs font-mono mt-0.5 shrink-0">Nat Rev Neurosci 2024</span>
      <span class="text-slate-300 text-sm">李毓龙课题组. <em>GRAB 探针系列综述：从设计原理到神经科学应用.</em></span>
    </div>
  </div>
</div>

</div>
