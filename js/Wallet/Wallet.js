export default class Wallet {

    #balance;
    #pizzaPrice;
    #moneyMultiplier;


    constructor(initialBalance = 10, pizzaPrice = 5) {
        
        this.#balance = initialBalance;
        this.#pizzaPrice = pizzaPrice;
        this.#moneyMultiplier = 1;

    }



    //=========================
    // Balance
    //=========================

    balance() {

        return this.#balance;

    }



    //=========================
    // Operations
    //=========================

    add(amount) {

        if(amount < 0) {
            throw new Error(
                "Cannot add negative amount"
            );
        }

        this.#balance += amount;

        return this;

    }

    sell(pizzasSold) {
        this.add(pizzasSold * this.#pizzaPrice * this.#moneyMultiplier);
    }

    setMoneyMultiplier(moneyMultiplier) {
            this.#moneyMultiplier = moneyMultiplier; 
    }



    canPay(amount) {

        return this.#balance >= amount;

    }



    pay(amount) {


        if(!this.canPay(amount)) {

            return false;

        }


        this.#balance -= amount;

        return true;

    }



    //=========================
    // Utility
    //=========================

    reset(amount = 0) {

        this.#balance = amount;

        return this;

    }

}