type Contact = {
    text: string
    url: string
}

const Contacts: Contact[] = [
    {
        text: "kraev.mixail@gmail.com",
        url: "mailto:kraev.mixail@gmail.com"
    },
    {
        text: "t.me/gelugu",
        url: "https://t.me/gelugu"
    },
    {
        text: "instagram.com/kotomisha",
        url: "https://instagram.com/kotomisha"
    }
]

export const ContactsList = () => {
    return (
        <div className={"flex gap-6 flex-wrap items-center justify-center"}>
            {Contacts.map((contact, index) => (
                <a
                    key={`contact-${index}`}
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {contact.text}
                </a>
            ))}
        </div>
    )
}
