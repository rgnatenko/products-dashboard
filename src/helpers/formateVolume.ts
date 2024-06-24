export default function formatVolume(amount: number) {
    let parts = amount.toString().split('.');

    let integerPart = parts[0];

    let formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    let formattedAmount = formattedInteger + ' €';

    return formattedAmount;
}
