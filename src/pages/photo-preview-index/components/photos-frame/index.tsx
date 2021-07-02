import React, {useState} from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Modal, Pagination, Button, Upload, Checkbox } from 'antd'
import { Photo } from '@/components/photo'
import { Album } from '@/components/album'
import { UploadOutlined } from '@ant-design/icons'
import { HighQualityPhoto } from '@/components/high-quality-photo'
import { StyleAllContent, StyleBody, StyleHeader, StylePhotoCheck } from './style'

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
  isAlbum : boolean,
  desc: string,
  number ?: number,
}> = [
  {
    id: '1',
    url: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png',
    isAlbum: false,
    desc: 'hello1'
  },
  {
    id: '2',
    url: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png',
    isAlbum: false,
    desc: 'hello2'
  },
  {
    id: '3',
    url: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png',
    isAlbum: false,
    desc: 'hello3'
  },
  {
    id: '4',
    url: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png',
    isAlbum: false,
    desc: 'hello4'
  },
  {
    id: '5',
    url: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png',
    isAlbum: false,
    desc: 'hello5'
  },
  {
    id: '6',
    url: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png',
    isAlbum: false,
    desc: 'hello6'
  },
  {
    id: '7',
    url: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png',
    isAlbum: false,
    desc: 'hello7'
  },
  {
    id: '8',
    url: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png',
    isAlbum: false,
    desc: 'hello8'
  },
  {
    id: '9',
    url: 'https://lao-lan-go.oss-cn-beijing.aliyuncs.com/software-2021/pixiv32.png',
    isAlbum: true,
    desc: 'hello9',
    number: 10
  }
]

export const PhotoFrame: React.FC<Props> = (props) => {
  const params = useParams();
  const urlObj = useLocation();
  const [vis, setVis] = useState(false)
  const [choosedId, setChoosedId] = useState('')
  
  const [totalPgaes, setTotalPages] = useState(1)
  const [current, setCurrent] = useState(1)
  const [isEdit, setIsEdit] = useState(false)

  const [wonderfulIds, setWonderfulIds] = useState<Array<string>>([])

  const screenHeight = window.screen.availHeight

  // TODO lhl 这里去请求数据
  console.log('最外层的obj', urlObj)



  // @ts-ignore
  const title = params ? PREVIEW_MAP[params.current] : '';

  return title ? (
    <StyleAllContent>
      <StyleHeader>
        <span>{title}</span>
        <div className="btnBox">
          {
          !isEdit ?
          (<>
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
              onClick={() => {setIsEdit(true)}}
            >
              生成精彩剪辑
            </Button>
          </>)
          :
          (
            <>
              <Button className="build" type="primary">
                生成
              </Button>
              <Button className="cancel" onClick={() => {setIsEdit(false)}}>
                取消
              </Button>
            </>
          )
        }
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
      <StyleBody>
        {
        MOCK_URLS.map(item => !item.isAlbum ? (
        <StylePhotoCheck>
          <Photo
          id={item.id}
          url={item.url}
          onIdChange={(id) => setChoosedId(id)}
          onVisChange={(vis) => setVis(vis)}
          desc={item.desc}  
          />
          {
          !!isEdit &&
          (<Checkbox> 选择 </Checkbox>)
          }
        </StylePhotoCheck>
        )
          :
          <Album
            id={item.id}
            title={item.desc}
            url={item.url}
            number={item.number}
          />
        )
      }
      </StyleBody>
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
