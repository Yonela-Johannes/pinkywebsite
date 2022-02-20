export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            readOnly: false,
        },
        {
            name: 'text',
            type: 'text',
        },
        {
            name: 'post',
            type: 'reference',
            to: [
                {
                    type: 'post'
                }
            ]
        },
    ]
}