import antfu from '@antfu/eslint-config'
import ii from '@importantimport/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu({
  react: true,
  typescript: true,
}).append(ii({ functional: false })).append(...tailwind.configs['flat/recommended'])
