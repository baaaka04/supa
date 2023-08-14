import { SocialsItem } from "./SocialsItem"
import { ReactComponent as Vkontakte } from './icons/vk.svg'
import { ReactComponent as GitHub } from './icons/github.svg'
import { ReactComponent as Telegram } from './icons/telegram.svg'
import { ReactComponent as Codewars } from './icons/codewars.svg'
import { ReactComponent as LinkedIn } from './icons/linkedin.svg'


export function Socials(props) {

    const items = [
        {
            icon: <LinkedIn />,
            title: 'LinkedIn',
            value: props.socials.linkedin,
            url: 'https://www.linkedin.com/in/artem-berezin-ios',
            color: '#007ab9'
        },
        {
            icon: <GitHub />,
            title: 'GitHub',
            value: props.socials.github,
            url: 'https://github.com/baaaka04',
            color: 'white'
        },
        {
            icon: <Telegram />,
            title: 'Telegram',
            value: props.socials.telegram,
            url: 'https://t.me/baaaka',
            color: null
        },
        {
            icon: <Codewars />,
            title: 'Codewars',
            value: props.socials.codewars,
            url: 'https://www.codewars.com/users/baaaka04',
            color: '#b1361e'
        },
        {
            icon: <Vkontakte />,
            title: 'Vkontakte',
            value: props.socials.vk,
            url: 'https://vk.com/baaaka',
            color: '#5281b8'
        },
    ]

    return (
        <div>
            <p>Socials</p>
            {items.map(item =>
                <SocialsItem
                    key={item.title + item.value}
                    icon={item.icon}
                    title={item.title}
                    value={item.value}
                    bgcolor={item.color}
                    url={item.url}
                />
            )}
        </div>
    )
}