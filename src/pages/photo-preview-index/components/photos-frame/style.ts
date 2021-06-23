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
`;

export const StyleBody = Style.div`
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;
