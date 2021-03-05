import React, { memo, useEffect } from 'react';
import './friendchain.less';
import Layout from '@components/Layout'
import {
  NextPage
} from 'next'
import classNames from 'classnames'
import { PROJECT_NAME, PAGE_LAYOUT_SEO } from '@root/constance'
import http from '@utils/req'
import {
  FRIEND_CHAIN
} from '@constance/api'
import NoneText from '@root/components/NoneText';

// import PropTypes from 'prop-types';

export interface FriendChainProps {
  friendChain: Array<{
    disc: string;
    id: number;
    name: string;
    url: string;
  }>;
}

const FriendChain: NextPage<FriendChainProps> = ({
  friendChain
}) => {
  const classString = classNames({
    [`${PROJECT_NAME}-friend-chain`]: true
  });
  
  useEffect(() => {
    console.info('friendChain', friendChain);
  });

  return (
    <Layout {...PAGE_LAYOUT_SEO.friendChain}>
      <h3 className='page-title'>友情链接 👬</h3>
      <div className={classString}>
        {
          friendChain?.length ? (
            friendChain.map(item => (
              <div className='friend-chain-item' key={item.id}>
                <a href={item.url}>{item.name}</a>
              </div>
            ))
          ) : (
            <NoneText/>
          )
        }
      </div>
    </Layout>
  );
};

FriendChain.getInitialProps = async (ctx) => {
  const res = await http.get(`${FRIEND_CHAIN}`)
  return {
    friendChain: res?.data?.result ?? []
  }
} 

//FriendChain.propTypes = {
//	props: PropTypes.string
//};

export default FriendChain;
