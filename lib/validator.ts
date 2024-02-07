import * as z from "zod"

export const eventFormSchema = z.object({
    title: z.string().min(3, 'Le titre doit comporter au moins 3 caractères'),
    description: z.string().min(3, '').max(400, 'La description doit comporter au moins 3 caractères'),
    location: z.string().min(3, 'L"emplacement doit comporter au moins 3 caractères').max(400, 'L"emplacement doit contenir moins de 400 caractères'),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()
})