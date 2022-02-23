export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
}

export const feedQuery = `*[_type == "pin"]
    {
        image{
            asset -> {
                url
            }
        },
        releaseDate,
        shortDesciption,
        longDescription,
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

// export const blogPost = `*[_type = "post"]{
//     title,
//     slug,
//     body,
//     mainImage {
//       asset -> {
//         _id,
//         url
//       },
//       alt
//     }
//   }`

export const productsQuery = `*[_type == "products"]{
    _id,
    slug,
    name,
    price,
    image {
        asset -> {
            url
        }
    }
}`

export const feedbackQuery = `*[_type == "feedback"]{
    _id,
    name,
    message,
    image {
        asset -> {
            url
        }
    }
}`

export const post = `*[_type == "post"]{
    _id,
    admin,
    description,
    longDescription,
    releaseDate,
    slug,
    admin,
    image {
        asset -> {
            url
        }
    }
}`