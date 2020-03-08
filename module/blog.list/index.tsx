import React, {
  // useEffect
} from 'react'
import { PROJECT_NAME } from '@root/constance'
import classNames from 'classnames'
import Link from 'next/link'
import './list.less'

export interface BlogListCategorieOrTag {
  id: string;
  name: string;
}

export interface IBlogList {
  id: string;
  name: string;
  readCount: string;
  editDate: string;
  createDate: string;
  categorie: BlogListCategorieOrTag[];
  tagLists: BlogListCategorieOrTag[];
  contentLite: string;
}

interface BlogListProps {
  list: IBlogList;
}

const BlogList: React.FC<BlogListProps> = ({ list }) => {
  const classString = classNames({
    [`${PROJECT_NAME}-comp-blog-list`]: true
  })

  return (
    <li className={classString}>
      <Link href={`/blog/detail?id=${list.id}`}>
        <a title={list.name}>
          <h2 className={`${classString}-title`}>{list.name}</h2>
        </a>
      </Link>
    </li>
  )
}

export default BlogList
