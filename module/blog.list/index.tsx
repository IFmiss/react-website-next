import React, {
  useEffect
} from 'react'

interface BlogListProps {}

const BlogList: React.FC<BlogListProps> = () => {
  useEffect(() => {
    console.log('BlogList')
  })

  return (
    <div>
      blogList
    </div>
  )
}

export default BlogList
