const getFourNumbers = () => {
    let numbers: number[] = [];
    while (numbers.length < 4) {
        let randomNumber = Math.floor(Math.random() * 58) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

export default getFourNumbers