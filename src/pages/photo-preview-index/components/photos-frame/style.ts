import Style from 'styled-components';

export const StyleAllContent = Style.div`
    width: calc(100% - 300px);
    padding-left: 12px;
    padding-top: 24px;
    
    .pagin {
        position: fixed;
        left: 300px;
        bottom: 36px;
        
    }
`;

export const StyleHeader = Style.div`
    font-size: 20px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btnBox {
        display: flex;
    }

    .upload {
        margin-left: 24px;
    }

    .buildNewCut {
        margin-left: 24px;
        margin-right: 36px;
        margin-top: 2px;
    }

    .cancel {
        margin-left: 24px;
        margin-right: 36px;
    }

    .backTitle {
        display: flex;
        align-items: center;
    }
`;

export const StyleBody = Style.div`
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .loading {
        width: 100%;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`;

export const StylePhotoCheck = Style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


export const StyleNotFound = Style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;

    .notFound {
        width: 200px;
        height: 200px;
    }

    p {
        color: rgb(227, 242, 250);
        font-size: 20px;
    }
`