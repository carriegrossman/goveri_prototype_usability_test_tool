import {lat,lng} from "./geolocation.js"
import {sendCityState} from "./avatar.js"

console.log(lat,lng)

let city
let state

export default () => {
    [city,state] = sendCityState()
    console.log(city,state)
}

export let actionListItemsArray = () => ({
    "blm":[
        {
            "icon" : "modules/img/secondicon.png",
            "item" : `Donate to ${city} Black Lives Matter`,
            "url": `https://www.google.com/search?rlz=1C5CHFA_enUS903US905&sxsrf=ALeKk02j-pHPsvMfuXLr0POKUtOSNGyUXg%3A1594235806999&ei=nhsGX5bEPIfYtAWU0KmYDQ&q=${city}+black+lives+matter&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgUIABCLAzIFCAAQiwMyBQgAEIsDMgUIABCLAzIFCAAQiwMyBQgAEIsDMggIABCxAxCLAzICCAA6BAgAEEc6BwgjELACECc6BwgAEA0QiwM6BggAEA0QCjoGCAAQBxAeOggIABAHEAoQHjoECAAQDVC2PliJSGC2SWgAcAF4AIABlQGIAdMHkgEDMC44mAEAoAEBqgEHZ3dzLXdpergBAw&sclient=psy-ab&ved=0ahUKEwiWi9uXr77qAhUHLK0KHRRoCtMQ4dUDCAw&uact=5`,
            "points" : 200
        },
        {
            "icon" : "modules/img/secondicon.png",
            "item" : `Support black-owned businesses by downloading this app`,
            "url" : ``,
            "points" : 200
        },
        {
            "icon" : "modules/img/secondicon.png",
            "item" : `Support black-owned businesses by downloading this app: https://www.supportblackowned.com/`,
            "url" : ``,
            "points" : 200
        },
        {
            "icon" : "modules/img/secondicon.png",
            "item" : `You're all caught up in this category!`,
            "points" : 0
        }
    ],
    "environment":[
        {
            "icon" : "modules/img/tree_icon.png",
            "item" : `Shop at a local farmer's market`,
            //EXAMPLE OF WHAT URL WILL LOOK LIKE
            "url" : `https://www.google.com/maps/search/${city}+farmers+market/@${lat},${lng},13z/data=!3m1!4b1`,
            "points" : 50
        },
        {
            "icon" : "modules/img/tree_icon.png",
            "item" : `Learn about your local recycling program`,
            "points" : 50
        },
        {
            "icon" : "modules/img/tree_icon.png",
            "item" : `Purchase a reusable item`,
            "points" : 50
        },
        {
            "icon" : "modules/img/tree_icon.png",
            "item" : `You're all caught up in this category!`,
            "points" : 0
        }
    ],
    "election":[
        {
            "icon" : "modules/img/thirdicon.png",
            "item" : `Educate yourself about local politics by clicking the apple icon below!`,
            "points" : 5
        },
        {
            "icon" : "modules/img/thirdicon.png",
            "item" : `Educate yourself about your state's mail-in ballot process!`,
            "points" : 5
        },
        {
            "icon" : "modules/img/thirdicon.png",
            "item" : `Educate yourself about local politics!`,
            "points" : 5
        },
        {
            "icon" : "modules/img/thirdicon.png",
            "item" : `You're all caught up in this category!`,
            "points" : 0
        }
        
    ]
})

// export default actionListItemsArray