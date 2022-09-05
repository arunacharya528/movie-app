export const MainTitle = ({ text }) => {
    return (
        <div className="text-3xl font-bold text-center py-5">{text}</div>
    );
}

export const SectionTitle = ({ text }) => {
    return (
        <div className="text-xl font-bold py-5 text-center">{text}</div>
    );
}

export const ErrorText = ({ message = '' }) => {
    return (
        <div className="h-80 flex flex-col justify-center items-center space-x-5">
            <span className="text-5xl font-semibold py-5">(･_･)</span>
            <span>{message}</span>
        </div>
    );
}