const db = require('./conn');

class Coffee {
    constructor(id, name, bespoke, size) {
        this.id = id;
        this.name = name;
        this.bespoke = bespoke;
        this.size = size;
    }
    static getAll(){
        return db.any (`SELECT * FROM coffee`)
            .then((allCoffeeData)=>{
                console.log(allCoffeeData);
                return allCoffeeData;
            })
            .catch((err)=> {
                console.log(err);
                return null;
            })
}
    static getById(id) {
        return db.one(`SELECT * FROM coffee WHERE id =${id}`)
            .then((oneCoffeeData) => {
                // const coffeeInstance = new Coffee(
                //     oneCoffeeData.id, 
                //     oneCoffeeData.name, 
                //     oneCoffeeData.bespoke, 
                //     oneCoffeeData.size
                // );
                return oneCoffeeData;
            })
            .catch( (e) => {
                console.log(e);
                return null;
            })
    }
    save() {
        return db.result(`
            UPDATE coffee SET
            name=${this.name},
            bespoke=${this.bespoke},
            size=${this.size},
            where id=${this.id}
        `);
    }
};
module.exports = Coffee;