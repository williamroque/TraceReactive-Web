export interface FetchResult {
    status: number;
    statusText: string;
    headers: Record<string, string>;
    text: string;
    ok: boolean;
}

export function parseFetchResult(raw: any): FetchResult {
    const status = raw.status ?? 0;
    return {
        status,
        statusText: raw.statusText ?? '',
        headers: raw.headers ?? {},
        text: raw.text ?? '',
        ok: status >= 200 && status < 300
    };
}

export function headersToRows(headers: Record<string, string>): { key: string; value: string }[] {
    return Object.entries(headers).map(([key, value]) => ({ key, value }));
}

export function dataframeRowsToHeaders(rows: any[]): Record<string, string> {
    if (!Array.isArray(rows)) return {};
    const result: Record<string, string> = {};
    for (const row of rows) {
        if (row && typeof row.key === 'string') {
            result[row.key] = String(row.value ?? '');
        }
    }
    return result;
}
