import { LanguagesItem } from "./LanguagesItem"


export function Languages() {

    const items = [
        {
            icon: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png",
            title: 'Russian',
            value: 'Native',
        },
        {
            icon: "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png",
            title: 'English',
            value: 'Intermediate',
        }
    ]

    return (
        <div>
            <p>Languages</p>
            {items.map(item =>
                <LanguagesItem
                    key={item.value}
                    icon={item.icon}
                    title={item.title}
                    value={item.value}
                />
            )}
        </div>
    )
}