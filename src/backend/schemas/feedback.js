export default {
    name: 'feedback',
    title: 'Feedback',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            title: 'Message',
            name: 'message',
            type: 'text',
        },
        {
            name: 'imageUrl',
            title: 'Image',
            type: 'image',
        },

    ]
}

