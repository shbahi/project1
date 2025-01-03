
let cars = ["ford", "honda", "kia","bmw"]

// بتحدد كم عنصر داخل المصفوفة 
let s = cars.length
console.log(s)
//console.log(cars)

// بتعطيني اخر عنصر موجود بالمصفوفة و بتحذفو
let r = cars.pop()
console.log(r)
//console.log(cars)

//بتضيف عنصر جديد على المصفوفة 
let p = cars.push("toyota")
console.log(p)
//console.log(cars)

//تظهرلي اسم العنصر اللي بحدد ترتيبو
let a = cars.at(1)
console.log(a)

let cars2 = ["mercedes","hyundai","volkswagen"]

//بتدمج المصفوفتين بمصفوفة وحدة
let m = cars.concat(cars2)
console.log(m)