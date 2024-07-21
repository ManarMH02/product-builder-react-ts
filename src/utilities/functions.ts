export function txtSlicer(text: string, max: number = 100) {
    return text.length >= max ?
    `${text.slice(0, 100)}...` :
    text;
}
