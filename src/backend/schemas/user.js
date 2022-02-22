export default {
    name: 'user',
    title: 'User',
    type: 'document',
    isAdmin: false,
    
    fields: [
        {
            name: 'admin',
            title: 'Admin',
            type: 'boolean',
            desciption: 'string',
        },
        {
            name: 'userName',
            title: 'UserName',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
    ]
}