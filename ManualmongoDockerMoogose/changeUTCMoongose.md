https://stackoverflow.com/questions/35672248/how-to-change-date-timezone-in-mongoose
https://www.npmjs.com/package/moment-timezone
https://stackoverflow.com/questions/tagged/moment-timezone
https://momentjs.com/timezone/docs/
moment("2013-11-18").tz("Europe/Berlin").format('Z');
npm install moment-timezone

tareas

const moment = require('moment-timezone');
const dateThailand = moment.tz(Date.now(), "Asia/Bangkok");

console.log(dateThailand); // "2018-08-20T16:35:14.033+07:00"
*** Asia/Bangkok +07:00

Schema in the mongoose.

const categorySchema = new Schema(
    {
        _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
        c_name: String,
        created_by: String,
        created_date: {type: Date, default: dateThailand},
        updated_by: String,
        updated_date: {type: Date, default: dateThailand}
    }, {_id: false}
);