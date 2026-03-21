export const metadata = {
    title: {
        template: '%s|services',
        default: 'services',
    }
}
export default function serviceslayout({ children }) {
    return (
        <><section><h3>serviceslayout</h3>{children}</section></>
    );
}