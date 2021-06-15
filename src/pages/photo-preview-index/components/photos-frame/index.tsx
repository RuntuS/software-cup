import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

type Props = {};

const PREVIEW_MAP: {
  [key: string]: string;
} = {
  'all-photo': '全部照片',
  recent: '最近图片',
  album: '相册',
  people: '人物',
  placement: '地点',
  things: '事件',
};

export const PhotoFrame: React.FC<Props> = (props) => {
  const params = useParams();
  const location = useLocation();

  console.log('local', location);

  // @ts-ignore
  const title = params ? PREVIEW_MAP[params.current] : '';

  console.log(title);

  console.log(params);
  return <div>ss</div>;
};
