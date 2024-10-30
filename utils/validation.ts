import { z } from 'zod';

const comicSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  image: z.string().url(),
});

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export { comicSchema, userSchema };
