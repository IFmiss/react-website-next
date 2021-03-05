import React, { memo } from 'react';
import './nonetext.less';
// import PropTypes from 'prop-types';

export interface NoneTextProps {
  text?: string;
}

const NoneText: React.FC<NoneTextProps> = ({
  text = '暂无数据...'
}) => {
  return (
    <div className='nonetext'>{text}</div>
  );
};

//NoneText.propTypes = {
//	props: PropTypes.string
//};

export default memo(NoneText);
