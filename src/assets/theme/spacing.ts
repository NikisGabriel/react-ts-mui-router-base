// 10 Px => 1 Rem, FontSize 10px
const spacing = (factor: number) => `${(factor / 10 / 100) * 62.5}rem`;
export default spacing;
