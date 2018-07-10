import { types } from 'mobx-state-tree'
import Resource from './Resource'

const FieldGuide = types
  .model('FieldGuide', {
    items: types.frozen,
    language: types.string
  })

export default types.compose(Resource, FieldGuide)
