import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        class: z.string().default('prose')
      })
    }),
    games: defineCollection({
      type: 'page',
      source: {include: 'games/*.md', exclude: ['games/index.md']},
      schema: z.object({
        hero_image: z.string(),
        hero_bg: z.string(),
        icon: z.string(),
        name: z.string(),
        game_id: z.string(),
        cover_image: z.string().optional(),
        release_date: z.date().optional(),
        show_full_release_date: z.boolean().default(false),
        genre: z.string().optional(),
        age_rating: z.string().optional(),
        engine: z.string().optional(),
        budget: z.string().optional(),
        platforms: z.array(z.object({
          platform_id: z.string(),
          url: z.string().optional(),
          platform_name: z.string()
        })).default([]),
        user_rating: z.number().optional(),
        carousel: z.object({
          slides: z.array(z.object({
            url: z.string(),
            type: z.enum(['image', 'video']).default('image'),
            alt: z.string().optional()
          })).default([]),
          options: z.object({
            axis: z.enum(['x', 'y']).default('x'),
          }).optional(),
        }).optional()
      })
    }),
    stats: defineCollection({
      type: 'data',
      source: 'stats/*.yml',
      schema: z.object({
        groups: z.array(z.string()).default([]),
        value: z.number(),
        unit: z.string().optional(),
        label: z.string().optional()
        
      })
    }),
    person: defineCollection({
      type: 'data',
      source: 'person/*.yml',
      schema: z.object({
        slug: z.string(),
        name: z.string(),
        role: z.string(),
        image: z.string().optional(),
        skills: z.array(z.string()).default([]),
        weapons: z.array(z.string()).default([]),
        social: z.array(z.object({
          platform_id: z.string(),
          url: z.string(),
          platform_name: z.string().optional()
        })).default([])

      })
    }),
    job: defineCollection({
      type: 'page',
      source: {include: 'join-us/*.md', exclude: ['join-us/index.md']},
      schema: z.object({
        job_title: z.string(),
        job_id: z.string(),
        creation_date: z.date().optional(),
        expiration_date: z.date().optional(),
        location: z.string().optional(),
        location_type: z.enum(['onsite', 'remote', 'hybrid']).default('remote'),
        employment_type: z.enum(['full-time', 'part-time', 'contract', 'internship']).default('full-time'),
        contract_type: z.enum(['permanent', 'fixed-term', 'temporary']).default('permanent'),
        level: z.array(z.enum(['training', 'entry', 'mid', 'senior', 'lead'])).default(['mid']),
        department: z.string().optional(),
        budget: z.string().optional(),
      })
    }),
    
  }
})