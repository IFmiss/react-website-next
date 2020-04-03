/**
 * 设置 网页 置灰
 */
import {
  cssFilter,
  formatDate
} from '@utils/utils'

const DEFAULT_DATE = [
  '2020-04-04',
  '-09-18',
  '-12-13',
]

export default function useGrayPage () {
  const now = formatDate('yyyy-MM-dd hh:mm:ss')
  const gray = DEFAULT_DATE.some(item => now.includes(item))
  if (gray) {
    cssFilter(document.body, 'grayscale', 1)
  }
}
