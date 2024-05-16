interface TableProps {
    headData?: {label: string, name: string}[];
    rowData?: any[];
    loading?: boolean;
    error?: boolean;
}

export const Table = ({ headData, rowData, loading, error }: TableProps): JSX.Element => {
    return (
        <table>
            <thead>
                <tr>
                    {headData.map((head, index) => (
                        <th key={index}>{head}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rowData.map((row, index) => (
                    <tr key={index}>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};