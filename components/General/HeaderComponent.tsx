import { OpenTime } from "./OpenTime"
interface props {
    title: String
    titleFontSize?: number
    description?: String
    descriptionFontSize?: number
    ubication?: 'left' | 'right' | 'center'
    textAling?: 'left' | 'right' | 'center'
    showOpenTime: Boolean
    background?: String
    textContainerWidth?: number,
}

export const
    HeaderComponent = ({
        textContainerWidth = 55,
        title,
        titleFontSize = 10.8,
        description,
        descriptionFontSize = 3.2,
        ubication = 'left',
        textAling = 'left',
        background = '/static/defaultBackground.webp',
        showOpenTime
    }: props) => {
        if (textContainerWidth > 100) {
            textContainerWidth = 100
        }
        const ubicacionValores = {
            left: 'flex-start',
            right: 'flex-end',
            center: 'center',
        };
        const textAlingValores = {
            left: 'left',
            right: 'right',
            center: 'center',
        };
        const alingItems = {
            left: 'flex-start',
            right: 'flex-end',
            center: 'center',
        }
        const ubicationStyle = ubicacionValores[ubication] || 'flex-start';
        const textAlingStyle = textAlingValores[textAling] || 'left';
        const alingItemsStyle = alingItems[textAling] || 'flex-start';

        const headerStyle = {
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            justifyContent: ubicationStyle
        }
        const containerStyle = {
            width: `${textContainerWidth}%`,
            textAling: textAlingStyle,
            alignItems: alingItemsStyle
        }
        return (
            <header className="header__component" style={headerStyle} >
                <div className="header__component__container" style={containerStyle}>
                    <h1 className="title" style={{ fontSize: `${titleFontSize}rem` }}>{title}</h1>
                    {description && <p className="description" style={{ fontSize: `${descriptionFontSize}rem` }}>{description}</p>}
                </div>
                {showOpenTime && <div className="open__time"><OpenTime title={'Open Time'} openDays={'Sunday-Friday'} /></div>}
            </header>
        )
    }
