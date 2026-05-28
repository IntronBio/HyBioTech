---
title: "前沿 | David Baker课题组全面解读蛋白质计算设计的过去、现在与未来"
date: 2026-05-12
description: "华盛顿大学David Baker课题组在《Nature》发表重磅综述，系统梳理了全新蛋白质计算设计的方法学发展脉络，以及在关键应用方向的重要里程碑进展。"
author: "HyBioTech"
---



蛋白质是生命功能的核心载体。长期以来，人们希望按照需求获得具有新功能的蛋白质，主要依赖定向进化、随机筛选和经验驱动优化。虽然这些方法能够改造天然蛋白，但真正从零开始设计具有全新结构和功能的蛋白，一直被认为是极具挑战的问题，因为蛋白质设计本质上面对的是巨大的序列——结构——功能搜索空间，传统方法难以有效探索。

过去二十多年，计算蛋白设计的发展正在逐步改变这一局面。早期以 Rosetta 为代表的物理能量函数方法，开始能够设计新的折叠和组装体；近年来，随着深度学习特别是生成模型的发展，领域进入加速阶段。以 **RFdiffusion、ProteinMPNN** 为代表的方法，结合结构预测模型，推动蛋白设计能力实现质的跃升。

<div class="w-16 h-[1px] bg-slate-700/50 my-16 mx-auto"></div>

## 一、研究背景、综述关注点及局限性

随着深度学习驱动的蛋白质设计方法的不断发展，蛋白质工程领域正经历着随机筛选转变为靶向计算设计的范式革新。本文综述了现阶段从头蛋白质设计 (de novo protein design) 的研究进展。

尽管相关方法在设计成功率与功能活性层面仍有进一步优化空间，但针对全新蛋白质结构、蛋白质组装体及蛋白质结合体设计的难题已快解决。现阶段该领域的核心科学问题已从“如何设计蛋白”转向“设计什么蛋白”。

<div class="flex flex-col items-center my-16">
  <img src="/images/20260512/fig1.webp" class="w-full md:w-4/5 rounded-xl shadow-2xl border border-white/5" alt="图1" />
  <p class="text-sm text-slate-500 mt-6 italic tracking-wide">图1：用于设计具有全新目标功能蛋白质的计算设计工作流程与代表性成果</p>
</div>

## 二、蛋白质设计的方法进步

20世纪90年代计算蛋白质设计开始发展，直到大约5年前，该领域的计算主要依赖于基于物理化学模型。自2020年起，这一领域开始从上述基于物理学的方法转向基于机器学习 (ML) 方法。以 AlphaFold 和 RoseTTAFold 为代表的深度学习方法显著提高了蛋白质结构预测的准确性。

在当前最强大且用途最广的蛋白质设计方法中，有一类采用了生成式人工智能 (AI) 算法。**RFdiffusion** 和 Chroma 用于根据问题特异性输入信息生成蛋白质主链，其方式类似于 DALL-E 根据文本提示生成图像的方法。

<div class="w-16 h-[1px] bg-slate-700/50 my-16 mx-auto"></div>

## 三、取得的成果与应用领域

### 3.1 针对蛋白质靶点的结合剂设计

针对蛋白质靶点的结合剂在治疗领域具有巨大潜力，可用于阻断受体-配体及其他相互作用。与抗体相比，其在模块化、稳定性和尺寸方面具备潜在优势。

<div class="flex flex-col items-center my-16">
  <img src="/images/20260512/fig2.webp" class="w-full md:w-4/5 rounded-xl shadow-2xl border border-white/5" alt="图2" />
  <p class="text-sm text-slate-500 mt-6 italic tracking-wide">图2：从头设计蛋白结合蛋白及其治疗应用示例</p>
</div>

### 3.2 治疗与医学应用探索

* **抗病毒应用：** 研究人员已设计出小型稳定蛋白，使其能够结合并中和流感病毒、SARS-CoV-2、MERS-CoV 等。
* **中和毒素：** 针对蛇毒和中毒性休克的设计能为致死剂量的毒素提供强效保护。
* **受体拮抗剂与激动剂：** 研究人员已针对多种受体酪氨酸激酶胞外域设计了小型稳定蛋白。

<div class="flex flex-col items-center my-16">
  <img src="/images/20260512/fig3.webp" class="w-full md:w-4/5 rounded-xl shadow-2xl border border-white/5" alt="图3" />
  <p class="text-sm text-slate-500 mt-6 italic tracking-wide">图3：小分子结合蛋白与酶设计</p>
</div>

### 3.3 酶的设计

设计高活性的酶催化剂一直是从头蛋白质设计的长期目标。诸如 RFdiffusion All-Atom 等生成式 AI 方法，如今能够直接构建定制化的蛋白骨架来容纳任何所需的催化位点，从而实现多种化学反应的酶设计。

<div class="w-16 h-[1px] bg-slate-700/50 my-16 mx-auto"></div>

## 四、总结与展望

从头蛋白质设计正迅速兴起，成为众多分子工程应用中的前沿方法。在亲和试剂和治疗性抗体的开发领域，计算设计正逐渐展现出超越传统筛选技术的潜力。

<div class="flex flex-col items-center my-16">
  <img src="/images/20260512/fig4.webp" class="w-full md:w-4/5 rounded-xl shadow-2xl border border-white/5" alt="图4" />
  <p class="text-sm text-slate-500 mt-6 italic tracking-wide">图4：新功能蛋白质设计</p>
</div>

未来十年有望成为令人振奋的创新时代，从头蛋白质设计将应对人类面临的重大紧迫问题，并发展为横跨医学、可持续发展和生物技术领域的基础性工具。

</br>
</br>
</br>

<div class="bg-cyan-900/10 border-l-4 border-cyan-500 p-6 rounded-r-xl mb-14 text-sm md:text-base text-slate-300 leading-relaxed">
  <div class="font-bold text-cyan-400 mb-3 tracking-wide">📝 转载说明</div>
  本文转载自微信公众号：<strong>WangLab 王初课题组</strong> （发表于 2026年5月3日）。<br/>
  导读作者：杨为研究员（深圳医学科学院，该综述第一作者）。<br/>
  原文文献：<em>The Past, Present and Future of De Novo Protein Design</em>, Nature, 2026.<br/>
  <a href="https://doi.org/10.1038/s41586-026-10328-7" target="_blank" class="text-cyan-500 hover:text-cyan-400 underline decoration-cyan-500/30 underline-offset-4">https://doi.org/10.1038/s41586-026-10328-7</a>
</div>