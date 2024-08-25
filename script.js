// Vetor de preços de cada item para Infra de Rede
const prices = [
    10.00, // 1.a Tomada RJ 45 Fêmea (categoria 6)
    15.00, // 1.b1 Cordão de ligação (Patch Cord), (categoria 6), (Tamanho 3 m), (cor: azul)
    12.00, // 1.b2 Cordão de ligação (Patch Cord), (categoria 6), (Tamanho 1 m), (cor: [Cor do teto])
    8.00,  // 1.c Espelho de conexão (Tamanho 2x4 ou 4x4)
    2.00,  // 1.d Etiquetas para identificação de tomadas e espelho
    200.00, // 2.a Cabo UTP rígido (categoria 6) (azul)
    1.00,  // 2.b Etiqueta identificação do cabo de malha horizontal
    120.00, // 3.a Painel de Telecomunicações (Patch Panel), (Categoria 6), (24 portas), (Altura: 1U)
    100.00, // 3.a1 PPMH (Patch Panel de Malha Horizontal)
    20.00, // 3.d1 Cordão de Ligação, flexível, (Patch Cable), (categoria 6), (Tamanho: 2m), (cor: azul)
    20.00, // 3.d2 Cordão de Ligação, flexível, (Patch Cable), (categoria 6), (Tamanho: 2m), (cor: amarelo)
    18.00, // 3.d3 Cordão de Ligação, flexível, (Patch Cable), (categoria 5), (Tamanho: 2m), (cor: vermelho)
    50.00, // 3.e1 Organizador lateral para Rack XXU
    70.00, // 3.e2 Bandeja fixa - 19" de largura
    90.00, // 3.e3 Bandeja deslizante - 19" de largura
    5.00,  // 3.e4 Parafuso Porca Gaiola (conjunto com 10 unidades)
    0.50,  // 4.a Abraçadeira de velcro
    10.00, // 4.b Abraçadeira Hellermann (conjunto com 100 unidades)
    25.00, // 4.c Filtro de linha com 08 tomadas
    1.50,  // 4.d Etiquetas para Rack
    1.50,  // 4.e Etiquetas para Switch e Painel de Telecomunicações
    1.50,  // 4.f Etiquetas para identificação de portas do Switch
    1.50,  // 4.g Etiquetas para identificação de portas do Patch Panel
    1.50   // 4.h Etiquetas para identificação dos Patch Cables
];

// Vetor de preços de cada item para BackBone
const opticalPrices = [
    100.00, // 1.a Distribuidor óptico (DIO)
    20.00,  // 1.b PigTail
    15.00,  // 1.c Acoplador óptico
    50.00,  // 1.d Cordão óptico
    80.00,  // 2.a Terminador Óptico
    20.00,  // 2.b PigTail (Terminador Óptico)
    10.00,  // 3.a Cabo Óptico
    150.00, // 4.a Rack
    70.00,  // 4.b Bandeja fixa - 19" de largura
    90.00,  // 4.c Bandeja deslizante - 19" de largura
    5.00,   // 4.d Parafuso Porca Gaiola
    0.50,   // 5.a Abraçadeira de velcro
    10.00,  // 5.b Abraçadeira Hellermann
    25.00,  // 5.c Filtro de linha
    1.50,   // 5.d Etiquetas para Rack
    1.50,   // 5.e Etiquetas para Switch e DIO
    1.50    // 5.f Etiquetas para identificação dos cordões ópticos e Pigtails externos
];

function calculatePrice(formId, priceArray, totalPriceId) {
    let total = 0;
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input[type="number"]');
    inputs.forEach((input, index) => {
        const quantity = parseFloat(input.value) || 0;
        total += quantity * (priceArray[index] || 0);
    });
    document.getElementById(totalPriceId).innerText = total.toFixed(2);
}

document.getElementById('calculateButton').addEventListener('click', () => {
    calculatePrice('priceForm', prices, 'totalPrice');
});

document.getElementById('calculateButtonOptical').addEventListener('click', () => {
    calculatePrice('opticalPriceForm', opticalPrices, 'totalPriceOptical');
});

// Vetores com os nomes dos itens
const itemNames = [
    'Tomada RJ 45 Fêmea (categoria 6)',
    'Cordão de ligação (Patch Cord), (categoria 6), (Tamanho 3 m), (cor: azul)',
    'Cordão de ligação (Patch Cord), (categoria 6), (Tamanho 1 m), (cor: [Cor do teto])',
    'Espelho de conexão (Tamanho 2x4 ou 4x4)',
    'Etiquetas para identificação de tomadas e espelho',
    'Cabo UTP rígido (categoria 6) (azul)',
    'Etiqueta identificação do cabo de malha horizontal',
    'Painel de Telecomunicações (Patch Panel), (Categoria 6), (24 portas), (Altura: 1U)',
    'PPMH (Patch Panel de Malha Horizontal)',
    'Cordão de Ligação, flexível, (Patch Cable), (categoria 6), (Tamanho: 2m), (cor: azul)',
    'Cordão de Ligação, flexível, (Patch Cable), (categoria 6), (Tamanho: 2m), (cor: amarelo)',
    'Cordão de Ligação, flexível, (Patch Cable), (categoria 5), (Tamanho: 2m), (cor: vermelho)',
    'Organizador lateral para Rack XXU',
    'Bandeja fixa - 19" de largura',
    'Bandeja deslizante - 19" de largura',
    'Parafuso Porca Gaiola (conjunto com 10 unidades)',
    'Abraçadeira de velcro',
    'Abraçadeira Hellermann (conjunto com 100 unidades)',
    'Filtro de linha com 08 tomadas',
    'Etiquetas para Rack',
    'Etiquetas para Switch e Painel de Telecomunicações',
    'Etiquetas para identificação de portas do Switch',
    'Etiquetas para identificação de portas do Patch Panel',
    'Etiquetas para identificação dos Patch Cables'
];

const opticalItemNames = [
    'Distribuidor óptico (DIO)',
    'PigTail',
    'Acoplador óptico',
    'Cordão óptico',
    'Terminador Óptico',
    'PigTail (Terminador Óptico)',
    'Cabo Óptico',
    'Rack',
    'Bandeja fixa - 19" de largura',
    'Bandeja deslizante - 19" de largura',
    'Parafuso Porca Gaiola',
    'Abraçadeira de velcro',
    'Abraçadeira Hellermann',
    'Filtro de linha',
    'Etiquetas para Rack',
    'Etiquetas para Switch e DIO',
    'Etiquetas para identificação dos cordões ópticos e Pigtails externos'
];

function savePrices() {
    const form = document.getElementById('priceForm');
    const inputs = form.querySelectorAll('input[type="number"]');
    let data = 'Infra de Rede - Preços\n\n';
    let infraTotal = 0;
    
    inputs.forEach((input, index) => {
        const quantity = parseFloat(input.value) || 0;
        const price = prices[index] || 0;
        const itemName = itemNames[index] || `Item ${index + 1}`;
        const itemTotal = quantity * price;
        infraTotal += itemTotal;
        data += `${itemName}: ${quantity} x R$ ${price.toFixed(2)} = R$ ${itemTotal.toFixed(2)}\n`;
    });

    data += `\nTotal Infra de Rede: R$ ${infraTotal.toFixed(2)}\n\n`;

    data += 'BackBone - Preços\n\n';
    let opticalTotal = 0;
    const opticalInputs = document.getElementById('opticalPriceForm').querySelectorAll('input[type="number"]');
    
    opticalInputs.forEach((input, index) => {
        const quantity = parseFloat(input.value) || 0;
        const price = opticalPrices[index] || 0;
        const itemName = opticalItemNames[index] || `Item ${index + 1}`;
        const itemTotal = quantity * price;
        opticalTotal += itemTotal;
        data += `${itemName}: ${quantity} x R$ ${price.toFixed(2)} = R$ ${itemTotal.toFixed(2)}\n`;
    });

    data += `\nTotal BackBone: R$ ${opticalTotal.toFixed(2)}\n`;

    const grandTotal = infraTotal + opticalTotal;
    data += `\nTotal Geral: R$ ${grandTotal.toFixed(2)}`;

    const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'precos.txt';
    a.click();
    URL.revokeObjectURL(url);
}

document.getElementById('saveButton').addEventListener('click', savePrices);

