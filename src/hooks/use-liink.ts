export function useLink(url: string) {
    const img = new Image();
    img.src = url;

    if (img.complete) {
        return true
    }

    return false
}