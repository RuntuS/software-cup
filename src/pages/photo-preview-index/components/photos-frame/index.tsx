import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { Modal, Pagination, Button, Upload } from 'antd'
import { Photo } from '@/components/photo'
import { UploadOutlined } from '@ant-design/icons'
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
  id: string,
  url: string,
  desc?: string,
}> = [
  {
    id: '1',
    url: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png',
    desc: 'hello'
  },
  {
    id: '2',
    url: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png',
    desc: 'hello'
  },
  {
    id: '3',
    url: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png',
    desc: 'hello'
  },
  {
    id: '4',
    url: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png',
    desc: 'hello'
  },
  {
    id: '5',
    url: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png',
    desc: 'hello'
  },
  {
    id: '6',
    url: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png',
    desc: 'hello'
  },
  {
    id: '7',
    url: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png',
    desc: 'hello'
  },
  {
    id: '8',
    url: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png',
    desc: 'hello'
  }
]

export const PhotoFrame: React.FC<Props> = (props) => {
  const params = useParams();
  const [vis, setVis] = useState(false)
  const [choosedId, setChoosedId] = useState('')
  
  const [totalPgaes, setTotalPages] = useState(1)
  const [current, setCurrent] = useState(1)

  const screenHeight = window.screen.availHeight

  console.log(screenHeight)


  // @ts-ignore
  const title = params ? PREVIEW_MAP[params.current] : '';

  return title ? (
    <StyleAllContent>
      <StyleHeader>
        <span>{title}</span>
        <div className="btnBox">
          <Upload
            className="upload"
            multiple
            // action -> 上传地址
          >
            <Button icon={<UploadOutlined />}>
              上传图片
            </Button>
          </Upload>
          <Button
            className="buildNewCut"
          >
            生成精彩剪辑
          </Button>
        </div>

      </StyleHeader>

      <Modal
        visible={vis}
        onCancel={() => {setVis(false)}}
        onOk={() => {setVis(false)}}
        centered
        title="详细"
      >
        <HighQualityPhoto
          id={choosedId}
        />
      </Modal>
      <StyleBody

      >{
        MOCK_URLS.map(item => (
        <Photo
         id={item.id}
         url={item.url}
         onIdChange={(id) => setChoosedId(id)}
         onVisChange={(vis) => setVis(vis)}
         desc={item.desc}  
          />)) 
      }</StyleBody>
      <Pagination
        className="pagin"
        current={current}
        onChange={(page) => setCurrent(page)}
        total={totalPgaes}
      />
    </StyleAllContent>
  ) : (
    <span>404 not found</span>
  );
};
