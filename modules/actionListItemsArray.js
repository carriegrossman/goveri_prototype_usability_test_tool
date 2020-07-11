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
            "item" : `Support black-owned businesses`,
            "url" : `https://www.yelp.com/search?find_desc=Black+Owned+Businesses&find_loc=${city}%2C+${state}&ns=1`,
            "points" : 200
        },
        {
            "icon" : "modules/img/secondicon.png",
            "item" : `Vote Early!`,
            "url" : `https://www.google.com/search?rlz=1C5CHFA_enUS903US905&sxsrf=ALeKk01RD454Dxlts5vzqJCosqxJLS9ITQ%3A1594497506076&ei=4hkKX6iTBMeotQWU0ZaQCg&q=early+voting+locations+${city}+${state}&oq=early+voting+locations+${city}+${state}&gs_lcp=CgZwc3ktYWIQAzICCAAyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46BAgAEEc6BAgjECc6BAgAEEM6CwgAELEDEIMBEJECOgsILhDHARCvARCRAjoICAAQsQMQgwE6BQgAELEDOgQILhBDOgoILhDHARCvARBDOgUIABCRAjoKCAAQsQMQgwEQQzoHCAAQFBCHAlCEJFi0VWDfVmgBcAN4AIABbIgBgxSSAQQzMi4ymAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwiojMeL_sXqAhVHVK0KHZSoBaIQ4dUDCAw&uact=5`,
            "points" : 200
        },
        {
            "icon" : "modules/img/secondicon.png",
            "item" : `You're all caught up in this category!`,
            "url" : `https://forms.gle/68Cs14VxrxiXLhMm7`,
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
            "url" : `https://www.google.com/search?q=${city}+recycling+program&rlz=1C5CHFA_enUS903US905&oq=${city}+recycling+program&aqs=chrome..69i57j0.7982j0j4&sourceid=chrome&ie=UTF-8`,
            "points" : 50
        },
        {
            "icon" : "modules/img/tree_icon.png",
            "item" : `Purchase a reusable item`,
            "url" : `https://www.growingagreenfamily.com/50-reusable-goods-vs-disposable-goods/`,
            "points" : 50
        },
        {
            "icon" : "modules/img/tree_icon.png",
            "item" : `You're all caught up in this category!`,
            "url" : `https://forms.gle/68Cs14VxrxiXLhMm7`,
            "points" : 0
        }
    ],
    "election":[
        {
            "icon" : "modules/img/thirdicon.png",
            "item" : `Learn about local politics!`,
            "url" : ``,
            "points" : 5
        },
        {
            "icon" : "modules/img/thirdicon.png",
            "item" : `Learn your state's mail-in ballot process!`,
            "url" : `https://www.google.com/search?rlz=1C5CHFA_enUS903US905&sxsrf=ALeKk00WooBsHfB9wQ52pKw_gqqsa3d7hA%3A1594497517953&ei=7RkKX4jeOYq6tgWo6IWoCA&q=${state}+mail+in+voting&oq=${state}+mail&gs_lcp=CgZwc3ktYWIQAxgAMgcIABAUEIcCMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgQIABBHOg4ILhDHARCvARCRAhCTAjoLCAAQsQMQgwEQkQI6CAgAELEDEIMBOgUIABCxAzoOCC4QsQMQxwEQowIQgwE6CAguEMcBEKMCOgQIIxAnOgQIABBDOgcILhCxAxBDOgQILhBDOgUIABCRAjoKCC4QxwEQrwEQQzoNCC4QsQMQxwEQowIQQzoICC4QxwEQrwE6CwguEMcBEK8BEJECOgsILhCxAxDHARCvAToOCC4QsQMQxwEQrwEQgwFQ--wiWO32ImC0gSNoAHAIeACAAWmIAcUHkgEEMTAuMpgBAKABAaoBB2d3cy13aXo&sclient=psy-ab`,
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
            "url" : `https://forms.gle/68Cs14VxrxiXLhMm7`,
            "points" : 0
        }
        
    ]
})

// export default actionListItemsArray