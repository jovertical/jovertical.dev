export default function Badge({ text }) {
    return (
        <span className="inline-flex rounded-full items-center font-medium px-2 py-1 text-sm text-blue-dark dark:text-turquoise-darkest bg-blue-lightest dark:bg-turquoise-lightest">
            {text}
        </span>
    );
}
