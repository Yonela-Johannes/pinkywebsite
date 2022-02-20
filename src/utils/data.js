export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
}

export const feedQuery = `*[_type == 'pin] | order(_createdAt desc)
    {
        image{
            asset -> {
                url
            }
        },
        _id,
        destination,
        postedBy -> {
            _id,
            userName,
            image
        },
        save[] {
            _key,
            postedBy -> {
                _id,
                userName,
                image
            },
        },
    }`

export const blogPost = `*[_type = "post]{
    title,'
    slug,
    body,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt
    }
  }`