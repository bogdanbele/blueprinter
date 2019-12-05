import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

/**
 *
 * @param category
 * @param action
 */
const t = (category, action) =>{
    trackCustomEvent({
        // string - required - The object that was interacted with (e.g.video)
        category: category,
        // string - required - Type of interaction (e.g. 'play')
        action: action,
        // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
        //label: label,
        // number - optional - Numeric value associated with the event. (e.g. A product ID)
        //value: value
    })
};

export default t;
