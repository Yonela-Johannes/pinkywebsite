export default {
    name: 'product',
    title: 'Product',
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
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
              .toLowerCase()
              .replace(/\s+/g, '-')
              .slice(0, 200)
            }
        },
        {
            title: 'price',
            name: 'Price',
            type: 'number'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },

    ]
}