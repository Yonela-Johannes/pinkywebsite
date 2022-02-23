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
            name: 'slug',
            title: 'Slug',
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
            name: 'price',
            title: 'Price',
            type: 'number',
            options: {
                decimalScale: 2,
                fixedDecimalScale: true,
              },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },

    ]
}