import Style from 'styled-components'

export const StyleImageBox = Style.div`
    position: relative;
    margin-left: 24px;
    margin-top: 24px;

    .imgBox {
        width: 150px;
        height: 200px;
        filter: opacity(75%);
        display: flex;
        justify-content: space-around;
        align-items: center;

        img {
            transform: scale(3);
        }
    }

    .imgBox:hover {
        cursor: pointer;
        filter: none;
    }


    .desc {
        width: 100px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 20px;
        left: 50%;
        transform: translateX(-50%);
        top: 66px;
        transition: all 0.5s ease-in-out;
    }

    &:hover {
        .desc {
            display: none;
        }
    }
`
