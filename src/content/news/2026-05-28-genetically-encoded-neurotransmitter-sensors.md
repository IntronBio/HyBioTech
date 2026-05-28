---
title: "前沿 | 基因编码荧光探针如何实现神经递质的实时、在体、高时空分辨检测"
date: 2026-05-28
description: "北京大学李毓龙课题组等团队近年来开发的 GRAB 系列与 dLight 系列基因编码荧光探针，正在改写神经生物学研究的范式。本文梳理其技术路线、性能对比与代表性应用。"
author: "HyBioTech"
---

神经递质是神经系统信息传递的核心化学信使。长期以来，检测神经递质在活体大脑中的实时动态变化一直是一个巨大的技术挑战。微透析 (microdialysis) 结合 HPLC 是经典方法，但时间分辨率在分钟级别；电化学方法（如快速扫描循环伏安法 FSCV）虽有时空优势，但仅适用于少数可氧化的递质（如多巴胺），且难以区分结构相似的分子。

基因编码荧光探针 (Genetically Encoded Fluorescent Indicators, GEFIs) 的出现，正在从根本上改变这一局面。这类探针将分子识别元件与荧光报告基团融合表达，能够在特定细胞类型或亚细胞结构中实现对目标分子的"看见"。

## 技术路线

当前主流的神经递质荧光探针主要基于两类支架：

**1. 基于 GPCR 骨架的重组传感器（以 GRAB 系列为代表）**

GRAB (**G**PCR-**A**ctivation **B**ased) 策略由北京大学李毓龙课题组首创。其核心思路是：将构象敏感的 cpEGFP（环化重排 GFP）插入到特定 GPCR 的第三胞内环 (ICL3)。当配体结合 GPCR 时，受体跨膜区的构象变化驱动 cpEGFP 生色团微环境改变，产生荧光信号变化。

目前已报道的 GRAB 家族成员包括但不限于：
- **GRAB_DA (dLight 的并行工作)**：多巴胺传感器，覆盖 DA1m/DA2m/DA3m 等变体，动态范围 (ΔF/F₀) 通常 > 200%
- **GRAB_NE**：去甲肾上腺素传感器，对不同胺类表现出良好的选择性
- **GRAB_5-HT**：5-羟色胺（血清素）传感器
- **GRAB_ACh**：乙酰胆碱传感器，已迭代至 v3 版本
- **GRAB_Ado**：腺苷传感器
- **GRAB_ATP**：ATP 传感器，实现了对胞外 ATP 释放的实时可视化

**2. 基于细菌周质结合蛋白 (PBPs) 的支架**

这类传感器以 **iGluSnFR**（谷氨酸）和 **iSeroSnFR**（血清素）为代表，由 Loren Looger 实验室（HHMI Janelia）主导开发。其设计基于 PBPs 的"铰链-闭合"构象变化，耦合 cpGFP 的荧光调制。

## 性能指标与对比

在选择基因编码荧光探针时，研究者通常关心以下几个核心指标：

| 指标 | 含义 | 典型要求 |
|------|------|----------|
| ΔF/F₀ (max) | 最大荧光响应幅度 | GRAB 系列多在 100-300%，iGluSnFR3 > 400% |
| Kd | 表观解离常数（亲和力） | 应匹配待测区域的生理浓度范围 |
| 选择性 | 对目标 vs. 类似物的偏好 | 需验证交叉反应谱 |
| 动力学 (τ_on / τ_off) | 响应与衰减速度 | 毫秒至秒级，取决于应用场景 |
| 光稳定性 | 长时间成像下的抗漂白能力 | 双光子成像中尤为重要 |
| 光谱属性 | 激发/发射波长 | 近红外探针有利于深层组织成像 |

## 应用前沿

**多色、多重成像：** 2024 年前后，多个团队开发了近红外 (NIR) 波段的基因编码探针，使得在同一脑区同时观察两种甚至三种不同神经调质的动态成为可能。例如，结合绿色 GRAB_DA 与红色钙指示剂 jRGECO1a，可同时记录多巴胺释放与神经元钙活动。

**自由活动动物中的光纤记录 (Fiber Photometry)：** 这是基因编码探针最具临床转化潜力的应用方向之一。通过埋植光纤，可在小鼠执行行为任务时（社交、奖赏学习、药物成瘾）实时读取特定脑区的神经化学信号。

**亚细胞分辨率的递质释放可视化：** 将探针融合特定的定位信号（如膜定位、突触前/后定位），可区分不同亚细胞区室的递质动力学，揭示突触可塑性机制中此前无法观测的动态过程。

## 对分子咨询工作的启示

基因编码荧光探针的开发涉及：
- GPCR 结构-功能关系的精细解析（分子建模与理性设计）
- 连接肽 (linker) 长度与序列的筛选优化
- 荧光蛋白生色团的构象耦合效率优化
- 细胞筛选体系与体外验证的高通量搭建
- 病毒载体包装、体内表达与成像方案的集成

这些正是 HyBioTech 团队擅长的技术栈。我们可为从事探针开发或应用的课题组提供从方案评估到实验验证的全链路咨询。

</br>

---

<div class="bg-cyan-900/10 border-l-4 border-cyan-500 p-6 rounded-r-xl mb-14 text-sm md:text-base text-slate-300 leading-relaxed">
  <div class="font-bold text-cyan-400 mb-3 tracking-wide">🔬 延伸阅读</div>
  <ul class="list-disc list-inside space-y-2">
    <li>Sun, F. et al. A Genetically Encoded Fluorescent Sensor Enables Rapid and Specific Detection of Dopamine in Flies, Fish, and Mice. <em>Cell</em>, 2018.</li>
    <li>Feng, J. et al. A Genetically Encoded Fluorescent Sensor for Rapid and Specific In Vivo Detection of Norepinephrine. <em>Neuron</em>, 2019.</li>
    <li>Wan, J. et al. A Genetically Encoded Sensor for Measuring Serotonin Dynamics. <em>Nature Neuroscience</em>, 2021.</li>
    <li>Aggarwal, A. et al. Glutamate Indicators with Improved Kinetics and Localization for Synaptic Imaging. <em>Nature Methods</em>, 2023.</li>
    <li>李毓龙课题组. GRAB 探针系列综述. <em>Nature Reviews Neuroscience</em>, 2024.</li>
  </ul>
</div>
