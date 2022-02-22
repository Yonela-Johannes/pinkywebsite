import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user'
import products from './products'
import post from './post'
import pin from './pin'
import comment from './comment'
import feedback from './feedback'
import postedBy from './postedBy'
import save from './save'
import testimonials from './testimonials'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    user,
    products,
    post,
    pin,
    feedback,
    comment,
    postedBy,
    save,
    testimonials
  ]),
})
