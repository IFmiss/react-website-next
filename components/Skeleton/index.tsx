import React, { useEffect } from 'react'
import classNames from 'classnames'
// import './nav.less'
import {
  PROJECT_NAME,
  WEBSITE_TITLE
} from '@constance/index' 

export interface SkeletonProps {
  routerName: 'home' | 'blogList' | 'blogDetail'
}

const Skeleton: React.FC<SkeletonProps> = ({
  routerName
}) => {
  return (
    <div>123123</div>
  );
};

export default Skeleton;
