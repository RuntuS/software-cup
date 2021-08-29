import Style from 'styled-components'

export const StyleHighQualityImage = Style.div`
    .image{
        max-width: 300px;
        width: e-xpression(this.width > 590 ? "590px" : this.width);
        max-height: 600px; 
        height: e-xpression(this.height > 600 ? "600px" : this.height);
    }
    display: flex;
    jusitify-content: space-around;

    .uploadTime {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
    }


    .descrption {
        margin-left: 12px;
        dispaly: flex;
        flex-direction: column;
    }

    .title {
        font-size: 20px;
        font-weight: 500;
    }

    .tag {
        margin-top: 12px;

        .tagItem {
            margin-top: 12px;
        }
    }

    .PS {
        position: absolute;
        bottom: 12px;
        left: 24px;
        cursor: pointer;
        width: 30px;
        height: 30px;

        img {
            width: 100%;
            height: 100%;
        }
    }
`

export const StyleLoadingBox = Style.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`