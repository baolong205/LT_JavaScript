var hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    gym: true,
    checkAvailability: function () {
        return this.rooms - this.booked
    },
    showInfor: function() {
        document.writeln(`<h1>${this.name} hotel has
         ${this.checkAvailability()} rooms left.</h1>`)
    }
}
hotel.showInfor()
hotel.name = 'Hilton'
hotel.showInfor()

class Hotel {
    constructor(name,rooms,booked,gym){
        this.name= name
        this.rooms= rooms
        this.booked= booked
        this.gym= gym
    }
    checkAvailability() {
        return this.rooms - this.booked
    }
    showInfor() {
        document.writeln(`<h1>${this.name} hotel has
         ${this.checkAvailability()} rooms left.</h1>`)
    }
}
let hotelCalifonia = new Hotel('California',100,50,true)
let hotelThanhLong = new Hotel('ThanhLong',200,100,true)
hotelCalifonia.showInfor()
hotelThanhLong.showInfor()
// Mảng các đối tượng
let lisHotel = [
    {owner: {
        fullname: 'Hoàng Ngọc Bảo Long ',
        age: 18
    },
    name: 'Quay',
    rooms: 40,
    booked: 25,
    gym: true,
    checkAvailability: function () {
        return this.rooms - this.booked
    },
    showInfor: function() {
        document.writeln(`<h1>${this.name} hotel has
         ${this.checkAvailability()} rooms left. Owner:${this.owner.fullname}</h1>`)
    }
    }
]
for (let i=0; i<lisHotel.length;i++ ){
    lisHotel[i].showInfor()
}