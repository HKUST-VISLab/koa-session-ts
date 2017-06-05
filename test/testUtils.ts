export function wait(ms: number) {
    return new Promise((resolve, rejcect) => {
        setTimeout(resolve, ms);
    });
}
