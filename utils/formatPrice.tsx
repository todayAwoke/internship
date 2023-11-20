export const formatPrice =
    (amount: number) => {
        return new Intl.NumberFormat(
            'en-ET', {
                style: 'currency',
                currency:'ETB'
        }).format(amount); 
}