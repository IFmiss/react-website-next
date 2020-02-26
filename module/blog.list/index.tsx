import React, {
  // useEffect
} from 'react'
import { PROJECT_NAME } from '@root/constance'
import classNames from 'classnames'
import Link from 'next/link'
import Icon from '@components/Icon'
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
        <a>
          <h2 className={`${classString}-title`}>{list.name}</h2>
          <div className={`${classString}-conf`}>
          <div className={`${classString}-date`} title={`创建于${list.createDate.split(' ')[0]}`}>
            <Icon svgId="creat" color="#999"> {list.createDate.split(' ')[0]} </Icon>
          </div>
          <div className={`${classString}-read`} title={`浏览量${list.readCount}`}>
            <Icon svgId="read" color="#999"> {list.readCount} </Icon>
          </div>
          <div className={`${classString}-tag`} title="分类">
            <Icon svgId="tag" color="#999">
              {
                list.tagLists && list.tagLists.map ((item, index) => (
                  <div className="cat-list" key={index}>
                    {
                      index > 0 ? (<span> , </span>) : null
                    }
                    {item.name}
                  </div>
                ))
              }
            </Icon>
          </div>
        </div>
        </a>
      </Link>
    </li>
  )
}

export default BlogList
