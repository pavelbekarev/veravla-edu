export const Button = (
    { onClick, text, children, extraClasses }: 
    { onClick?: () => void, text?: string, children?: React.ReactNode, extraClasses?: string[] }
) => {
    const customClasses = [...(extraClasses || [])].filter(Boolean).join(' ');

    return (
        <button onClick={onClick} className={`button ${customClasses}`}>{ text }</button>
    )
}