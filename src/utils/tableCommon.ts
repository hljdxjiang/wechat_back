import moment from "moment";
import EditorState from 'braft-editor'

export function onItemChange(row, e, stype, sid) {
    if (sid === undefined) {
        var id = e.target.id;
        var value = e.target.value
        row[id] = value
        return { ...row, [id]: value }

    } else {
        if (moment.isMoment(sid)) {
            var format;
            if (stype === "datetime") {
                format = "YYYY-MM-DD hh:mm:ss"
            } else if (stype === "time") {
                format = "hh:mm:ss"
            } else {
                format = "YYYY-MM-DD"
            }
            return { ...row, [e as string]: (sid as moment.Moment).format(format) }
        }
         else if (stype === "edit") {
            return { ...row, [e as string]: sid.toHTML() }
        }
        else {
            return { ...row, [e as string]: sid }
        }
    }

}
