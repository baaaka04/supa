import { ContactsItem } from "./ContactsItem"
import { ReactComponent as Phone } from './icons/phone.svg'
import { ReactComponent as Mail } from './icons/mail.svg'
import { ReactComponent as Address } from './icons/address.svg'


export function Contacts(props) {

    const items = [
        {
            title: 'Email',
            value: props.contacts.email,
            IconComponent: <Mail />
        },
        {
            title: 'Phone',
            value: props.contacts.phone,
            IconComponent: <Phone />
        },
        {
            title: 'Address',
            value: props.contacts.address,
            IconComponent: <Address />
        },
    ]
    return (
        <div>
            {items.map(item =>
                <ContactsItem
                    key={item.value}
                    title={item.title}
                    value={item.value}
                    icon={item.IconComponent}
                />
            )
            }
        </div>
    )
}
