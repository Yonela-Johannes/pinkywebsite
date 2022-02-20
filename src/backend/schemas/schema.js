import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user'
import product from './product'
import post from './post'
import pin from './pin'
import comment from './comment'
import postedBy from './postedBy'
import save from './save'
import testimonials from './testimonials'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    user,
    product,
    post,
    pin,
    comment,
    postedBy,
    save,
    testimonials
  ]),
})
