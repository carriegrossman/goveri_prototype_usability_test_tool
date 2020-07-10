import {actionListUrl1, actionListUrl2, actionListUrl3} from "./loadActionList.js"

export default () => {
    let actionUrl = [actionListUrl1, actionListUrl2, actionListUrl3]
    let idx = 1 // "opens blm"

    window.open(actionUrl[idx])

}