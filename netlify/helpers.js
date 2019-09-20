import config from '../src/config'

// We control this through package.json scripts
export const isProduction = () => process.env.NODE_ENV === 'production'
// BRANCH environment variable is defined on Netlify's build servers
export const getBranch = () => process.env.HEAD

export const getLanguageSelectWidget = ({ name = 'lang', label = 'Language', required } = {}) => ({
  label,
  name,
  required,
  widget: 'select',
  options: Object.keys(config.availableLanguages).map(lang => ({
    label: `${config.availableLanguages[lang].label} ${config.availableLanguages[lang].flag || ''}`,
    value: lang
  })),
  default: Object.keys(config.availableLanguages)[0]
})

const getArticles = lang => JSON.parse(process.env.IOHK_ARTICLES)[lang] || []

export const getArticlesSelectWidget = ({ name = 'parent', label = 'Parent article', required, multiple, lang }) => ({
  label,
  name,
  required,
  multiple,
  widget: 'select',
  options: getArticles(lang).map(article => ({
    label: article.label,
    value: article.value
  }))
})
