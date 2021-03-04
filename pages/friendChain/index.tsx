import React, { memo, useEffect } from 'react';
import './friendchain.less';
import Layout from '@components/Layout'
import {
  NextPage
} from 'next'
import classNames from 'classnames'
import { PROJECT_NAME, HOME_LINK_LISTS, PAGE_LAYOUT_SEO } from '@root/constance'
import http from '@utils/req'
import Link from 'next/link'
import {
  FRIEND_CHAIN
} from '@constance/api'

// import PropTypes from 'prop-types';

export interface FriendChainProps {
  friendChain: any[];
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
      <div className={classString}>
        <div>this is friendChain</div>
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
