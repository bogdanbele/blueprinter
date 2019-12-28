/**
 * Accepts [contentSection] as a parameter
 * @param data
 */
export function interpretContent(data) {

    let contentNameArray = [];
    data.map(elem =>
        contentNameArray.push(elem.__typename)
    );
    console.log(contentNameArray);

    contentNameArray.map((contentName, index) => {
        returnContent(contentName,index)
    });

    function returnContent(contentName, index) {
        switch (contentName) {
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


