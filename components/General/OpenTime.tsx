interface props {
    title: String
    titleFontSize?: number
    openDays: String
    openDaysFontSize?: number
    width?: number
}

export const OpenTime = ({ title, titleFontSize = 3.2, openDays, openDaysFontSize = 2.4, width = 67 }: props) => {

    const schedule = [
        {
            "name": "breakfast",
            "openTime": "8:00",
            "closeTime": "10:00"
        },
        {
            "name": "brunch",
            "openTime": "11:00",
            "closeTime": "13:00"
        },
        {
            "name": "lunch",
            "openTime": "14:00",
            "closeTime": "16:00"
        },
        {
            "name": "snack",
            "openTime": "17:00",
            "closeTime": "19:00"
        },
        {
            "name": "dinner",
            "openTime": "20:00",
            "closeTime": "23:00"
        },
        {
            "name": "bar",
            "openTime": "20:00",
            "closeTime": "3:00"
        }
    ]
    return (
        <div className="opentime__container" style={{ width: `${width}rem` }}>
            <div className="opentime__container__up">
                <div className="title" style={{ fontSize: `${titleFontSize}rem` }}>{title}</div>
                <div className="open__days" style={{ fontSize: `${openDaysFontSize}rem` }}>{openDays}</div>
            </div>
            <div className="opentime__container__down">
                {schedule.map((item, index) => {
                    return (
                        <div key={index} className="schedule__item">
                            <div className="name" style={{ fontSize: `${openDaysFontSize}rem` }}>{item.name}</div>
                            <div className="time" style={{ fontSize: `${openDaysFontSize}rem` }}>{item.openTime} - {item.closeTime}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
