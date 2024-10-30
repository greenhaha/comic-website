import { z } from 'zod';

const comicSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  image: z.string().url(),
});

export { comicSchema };
