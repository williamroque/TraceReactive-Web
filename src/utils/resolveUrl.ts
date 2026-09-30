export function resolveUrl(href: string, base: string): string {
    if (!href) return '';
    try {
        return new URL(href, base || undefined).href;
    } catch {
        return href;
    }
}
