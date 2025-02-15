function orderFood(){
    let userInput = parseInt(prompt("Qiyqiriq сет nechita zakaz qimoqchisiz?"));

switch (userInput) {
    case 1:
            let confirm1 = confirm(`1ta Qiyqiriq сет narxi : 45 000 som
            maxsulotni zakaz qilasizmi?`);
            if (confirm1) {
                alert("zakaz qabul qilindi");
            } else {
                alert("zakaz qabul qilinmadi");
            }
        break;
    case 2:
        let confirm2 = confirm(`2ta Qiyqiriq сет narxi : 79 000 som
            maxsulotni zakaz qilasizmi?`);
            if (confirm2) {
                alert("zakaz qabul qilindi");
            } else {
                alert("zakaz qabul qilinmadi");
            }
        break;
    case 3:
        let confirm3 = confirm(`3ta Qiyqiriq сет narxi : 34 000 som
            maxsulotni zakaz qilasizmi?`);
            if (confirm3) {
                alert("zakaz qabul qilindi");
            } else {
                alert("zakaz qabul qilinmadi");
            }
        break;
    default:
        alert("Xatolik");
}
}

