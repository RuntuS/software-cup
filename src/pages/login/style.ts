import Style from 'styled-components'

export const StyleLoginBody = Style.div`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
        background-color: #f5f5f5;
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