export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            title: 'Release date',
            name: 'releaseDate',
            type: 'date'
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
            name: 'Author',
            title: 'Author',
            type: 'reference',
            to: [
                {
                    type: 'user'
                }
            ]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },

    ]
}