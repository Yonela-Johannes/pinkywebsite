import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    projectId: 'ej2n2bux',
    dataset: 'production',
    apiVersion: '2022-02-19',
    useCdn: true,
    token: 'skhjguZ1x0LYGKAEJx4wZfAHAP2cuRm4NdiKMuHDiqxZdjbWmxOqe26YRbkGG1vN8z6rTAxgsXc4aD9ODvlOz7s2CO3fJ5zKGqEOR4Iq6VTQnTOm2CGluA5QMeTvcIkPvOIZaWWn5zHTG9Jx3o669hZ8Fctr5oVQPspw02GRk0HeDX18nC69',
    // token: '',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
 