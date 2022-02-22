export default {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              slugify: input => input
              .toLowerCase()
              .replace(/\s+/g, '-')
              .slice(0, 200)
            }
        },
        {
            title: 'price',
            name: 'Price',
            type: 'number',
            options: {
                decimalScale: 2,
                fixedDecimalScale: true,
              },
        },
        {
            name: 'imageUrl',
            title: 'Image',
            type: 'image',
        },

    ]
}