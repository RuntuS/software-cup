import Style from 'styled-components'

export const StylePhotoBox = Style.div`
    margin-left: 24px;
    margin-top: 24px;
    
    .imgBox {
        width: 150px;
        height: 200px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        img {
           transform: scale(3);
        }
    }

    .imgBox:hover {
        cursor: pointer;
    }

    .desc {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }




`