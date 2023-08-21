
const DebounceInput = (callback : Function, value: string, timeout : number) => {
    setTimeout(() => {
        callback(value);
    }, timeout);
};
export default DebounceInput;