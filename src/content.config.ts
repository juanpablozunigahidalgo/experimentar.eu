import { defineCollection, z } from 'astro:content';

const portafolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    github: z.string().url(), // Esto es lo que causa el error en 'about'
  }),
});

// Esta nueva colección para el 'about' no pide github
const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { portafolio, about };