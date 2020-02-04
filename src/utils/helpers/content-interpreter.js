/**
 * Accepts [contentSection] as a parameter
 * @param data
 */
import ContentSection from "../../components/template-components/ContentSection/ContentSection";

export function interpretContent(data) {

    let contentNameArray = [];
    data.map(elem =>
        contentNameArray.push(elem)
    )
    console.log(contentNameArray);

    contentNameArray.map((content, index) => {
        returnContent(content,index)
    });

    function returnContent(content, index) {
        switch (content.__typename) {
            case 'ContentfulContentSection':
                console.log('content de care trebe')
                break;
            case 'ContentfulPricePlan':
                console.log(' HAISA');
                break;
            default:
                break;
        }
    }

}


