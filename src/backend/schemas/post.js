export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'longDescription',
            title: 'Long Description',
            type: 'text',
        },
        {
            name: 'releaseDate',
            title: 'Release date',
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
            name: 'admin',
            title: 'Admin',
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