// src/content.config.ts
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- 新版必须引入加载器

// 定义新闻集合的规则
const newsCollection = defineCollection({
  // 告诉 Astro 去哪里找你的 Markdown 文件
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }), 
  schema: z.object({
    title: z.string(), 
    date: z.date(),    
    description: z.string(), 
    author: z.string().default('HyBioTech'), 
  }),
});

export const collections = {
  'news': newsCollection,
};