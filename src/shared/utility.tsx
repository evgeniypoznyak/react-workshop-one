export function updateObject(oldState: Readonly<any>, updatedProperties: any): object {
    return {
        ...oldState,
        ...updatedProperties
    };
}
