export default function convertCurrencyToNumber(currencyString: string) {
    return parseFloat(currencyString.replace(/[^\d,.]/g, '').replace(',', '.').replace('.', ''));
}
