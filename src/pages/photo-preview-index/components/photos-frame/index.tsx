import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from 'antd'
import { HighQualityPhoto } from '@/components/high-quality-photo'
import { StyleAllContent, StyleBody, StyleHeader } from './style';

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

const MOCK_URLS: Array<{
  url: string,
  desc?: string,
}> = [
  {
    url: '',
    desc: 'hello'
  }
]

export const PhotoFrame: React.FC<Props> = (props) => {
  const params = useParams();
  const [vis, setVis] = useState(false)
  const [choosedId, setChoosedId] = useState('')

  // @ts-ignore
  const title = params ? PREVIEW_MAP[params.current] : '';

  return title ? (
    <StyleAllContent>
      <StyleHeader>{title}</StyleHeader>

      <Modal
        visible={vis}
        onCancel={() => {setVis(false)}}
        onOk={() => {setVis(false)}}
      >
        <HighQualityPhoto
          id={choosedId}
        />
      </Modal>
      <StyleBody>图片放置处</StyleBody>
    </StyleAllContent>
  ) : (
    <span>404 not found</span>
  );
};
