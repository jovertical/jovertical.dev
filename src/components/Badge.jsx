export default function Badge({ text }) {
    return (
        <span className="inline-flex rounded-full items-center font-medium px-2 py-1 text-sm text-gray-lightest dark:text-gray-dark hover:text-gray-lighter dark:hover-text-gray-darker bg-blue dark:bg-green">
            {text}
        </span>
    );
}
