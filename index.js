function WinLossRatio(Win, Loss) {
    // Calcula o saldo de Rankeadas
    let WLRatio = Win - Loss;
    let Rank;

    // Determina o nível com base na quantidade de vitórias
    if (Win < 10) {
        Rank = "Ferro";
    } else if (WLRatio >= 11 && WLRatio <= 20) {
        Rank = "Bronze";
    } else if (WLRatio >= 21 && WLRatio <= 50) {
        Rank = "Prata";
    } else if (WLRatio >= 51 && WLRatio <= 80) {
        Rank = "Ouro";
    } else if (WLRatio >= 81 && WLRatio <= 90) {
        Rank = "Diamante";
    } else if (WLRatio >= 91 && WLRatio <= 100) {
        Rank = "Lendário";
    } else { 
        Rank = "Imortal";
    }

    
    return `O Herói tem de saldo de **${WLRatio}** está no nível de **${Rank}**`;
}

let Win = 105; 
let Loss = 45;

let resultadoFinal = WinLossRatio(Win, Loss); 
console.log(resultadoFinal); 