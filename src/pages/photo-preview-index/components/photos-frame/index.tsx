import { Album as IAlbum, requestAlbum } from '@/axios/album';
import { Photo as IPhoto, requestAllPhotos, requestPhotos, requestWonderful } from '@/axios/photo';
import { Album } from '@/components/album';
import { HighQualityPhoto } from '@/components/high-quality-photo';
import { Photo } from '@/components/photo';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Checkbox, Modal, Pagination, Upload } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import "./index.css";
import { StyleAllContent, StyleBody, StyleHeader, StylePhotoCheck } from './style';

type Props = {};

const PREVIEW_MAP: {
  [key: string]: string;
} = {
  'all-photo': '全部照片',
  recent: '最近图片',
  "0": '事务',
  "1": '风景',
};

export const PhotoFrame: React.FC<Props> = (props) => {
  const params: {current: string} = useParams();
  const urlObj = useLocation();


  const isAlbum = !urlObj.search


  const [vis, setVis] = useState(false)
  const [choosedId, setChoosedId] = useState('')
  
  const [totalPgaes, setTotalPages] = useState(1)
  const [current, setCurrent] = useState(1)
  const [isEdit, setIsEdit] = useState(false)

  const [wonderfulIds, setWonderfulIds] = useState<Array<string>>([])

  const [videoDialog, setVideoDialog] = useState(false)

  const [wondefulUrl, setwondefulUrl] = useState("")


  const screenHeight = window.screen.availHeight



  const [albums, setAlbums] = useState<Array<IAlbum>>([])
  const [photos, setPhotos] = useState<Array<IPhoto>>([])

  const requestAlbumLocal = useCallback(() => {
    const currentParam = params ? params.current : '0'
    // hard code
    requestAlbum('2018091609025',currentParam , true)
      .then(res => {
        setAlbums(res)

      })
      .catch(err => {
        console.error(err)
      })
  },[params])

  const requestPhotosLocal = useCallback(() => {
    const key = urlObj.search.split('=')[1]
    requestPhotos('2018091609025', key, current, 10)
      .then(res => {
        setTotalPages(res.total)
        setPhotos(res.imgList)
      })
      .catch(err => {
        console.error(err)
      })
  },[current, urlObj.search])

  const requestPhotoAllLocal = useCallback(() => {
    requestAllPhotos('2018091609025', current, 10)
    .then(res => {
      console.log('total', res.imgList )
      setTotalPages(res.total)
      setPhotos(res.imgList)
    })
    .catch(err => {
      console.error(err)
    })
  },[current])

  const local_requestWonderful = useCallback(() => {
    requestWonderful(wonderfulIds)
    .then(res => {
      console.log('url', res.url )
      setwondefulUrl(res.url)
    })
    .catch(err => {
      console.error(err)
    })
  },[wonderfulIds])

  // @ts-ignore
  const title = params ? PREVIEW_MAP[params.current] : '';

  useEffect(() => {
    if(title === '全部照片'){
      requestPhotoAllLocal()
    }
    else if(isAlbum){
      requestAlbumLocal()
    } else {
      requestPhotosLocal()
    }
  }, [isAlbum, requestAlbumLocal, requestPhotoAllLocal, requestPhotosLocal, title])

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
              data = {{userId:"2018091609025"}}
              action = "http://localhost:8081/oss/postfile"
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
              <Button className="build" type="primary" onClick={() => {setVideoDialog(true);local_requestWonderful()}}>
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
          isAlbum && params.current !== 'all-photo' ? 
            albums.map(item => (
              <Album
                id={item.title}
                title={item.title}
                url={item.imgUrl}
                number={item.number}
              />
            ))
          :
          photos.map(item => (
            <StylePhotoCheck>
              <Photo
                id={item.fileId}
                url={item.imgUrl}
                desc={item.fileName}
                onIdChange={(id) => {setChoosedId(id)}}
                onVisChange={(vis) => {setVis(vis)}}
              />
              {
                isEdit && 
                (
                  <Checkbox
                    disabled={!isEdit}
                    id={item.imgUrl}
                    onChange={(e) => {
                      if(e.target.checked) {
                        setWonderfulIds((pre) => {
                          const arr = [...pre]
                          arr.push(e.target.id as unknown as string)
                          return arr
                        })
                      } else {
                        setWonderfulIds((pre) => {
                          const newArray = pre.filter(item => {
                            if(item === e.target.id) {
                              return false
                            } else {
                              return true
                            }
                          })
                          return newArray
                        })
                      }
                    }}
                  >选择</Checkbox>
                )
              }
            </StylePhotoCheck>

          ))
        }
      </StyleBody>
      <Pagination
        className="pagin"
        current={current}
        onChange={(page) => setCurrent(page)}
        total={totalPgaes}
      />
      <Modal
        centered
        destroyOnClose
        width={900}
        visible={videoDialog}
        onCancel={() => {setVideoDialog(false);setwondefulUrl("")}}
        title="生成视频"
        wrapClassName="videoBox"
      >
        <video 
          src={wondefulUrl}
          controls
        >

        </video>
        </Modal>
    </StyleAllContent>
  ) : (
    <span>404 not found</span>
  );
};
