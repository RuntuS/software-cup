import Style from 'styled-components'

export const StyleImageBox = Style.div`
    width: 100%;
    z-index: -114514;
    position: absolute;

    img {
        width: 100%;
        height: 100%;
    }
`

export const StyleLoginBody = Style.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .allBox {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 36px;
        padding-bottom: 36px;
        padding-left: 48px;
        padding-right: 48px;
        border-radius: 8px;
        background-color: rgba(240,240,240, 0.5)
    }

    .titleBox {
        display: flex;
        align-items: center;

        .imageBox {
            width: 35px;
            height: 35px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .title {
            margin-left: 24px;
            font-size: 30px;
            font-weight: 500;
        }
    }

    .subTitle {
        color: #595959;
    }

    .menu {
        display: flex;
        justify-content: center;
        width: 300px;
        background-color: #f0f0f0;
        margin-top: 36px;
    }

    .loginBox{
        display: flex;
        flex-direction: column;
        align-items: center;


        .icon {
            color: #595959; 
        }
    
        .input {
            width: 300px;
            margin-top: 24px;
        }
    }

    
    .loginBtn {
        width: 300px;
        margin-top: 24px;
    }


`