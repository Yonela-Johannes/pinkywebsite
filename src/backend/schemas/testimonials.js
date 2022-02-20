export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string',
        },        
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },        
        {
            title: 'Release date',
            name: 'releaseDate',
            type: 'date'
        },

    ]
}