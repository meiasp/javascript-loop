// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

for (let i = companyName.length-1; i  >= 0; i--){ //i เริ่มนับจาก length-1 = index ตัวท้าย; กันให้ i นับไม่เกิน 0; นับถอยหลังโดย 1
    reversedCompanyName += companyName[i];
}

console.log(reversedCompanyName);
