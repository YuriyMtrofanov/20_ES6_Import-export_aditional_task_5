import moment from 'moment'

export function getTodayDateFormat(date) {
    return moment(date).format('MMM Do YYYY, h:mm:ss a')
}