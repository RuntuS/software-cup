import Style, { css } from 'styled-components'

export const StyleHighQualityImage = Style.div`
    .image{
        max-width: 300px;
        width: e-xpression(this.width > 590 ? "590px" : this.width);
        max-height: 600px; 
        height: e-xpression(this.height > 600 ? "600px" : this.height);
    }
    display: flex;
    jusitify-content: space-around;

`