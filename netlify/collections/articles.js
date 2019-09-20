import { getArticlesSelectWidget } from '../helpers'

const getArticleConfig = ({ lang, langLabel }) => ({
  name: `${lang}_articles`,
  label: `${langLabel} articles`,
  folder: `resources/content/articles/${lang}`,
  create: true,
  delete: true,
  slug: `{{slug}}-${lang}`,
  fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string'
    },
    getArticlesSelectWidget({ multiple: false, required: false, lang }),
    {
      name: 'order',
      widget: 'number',
      label: 'Order'
    },
    {
      name: 'body',
      label: 'Content',
      widget: 'markdown'
    }
  ]
})

export default [
  getArticleConfig({ lang: 'en', langLabel: 'English' })
]
