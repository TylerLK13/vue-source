<template>
  <body>
    <div id="orderForm">
        <h2>Order Form</h2>
        <small><p>Please fill in your information and we'll be sendign your order in no time.</p></small>

        <div id="form">
            <div>
                <label for="name">Name</label>
                <input id="first" type="text" v-model="user.nameFirst" required>
                <input id="last" type="text" v-model="user.nameLast" required>
            
            </div>

            <div>
                <label for="email">Email</label>
                <input id="email" type="email" v-model="user.email" required>
            </div>

            <div>
                <label for="tshirt">T-short model</label>
            
                <input id="tshirtGreen" name="tshirt" type="radio" value="Green" v-on:input="event => user.model=event.target.value" required>
                <img id="tshirtGreenImg" src="shirtGreen.PNG">
                <input id="tshirtOrange" name="tshirt" type="radio" value="Orange" v-model="user.model" required>
                <img id="tshirtOrangeImg" src="shirtOrange.PNG">
                <input id="tshirtBlue" name="tshirt" type="radio" value="Blue" v-model="user.model" required>
                <img id="tshirt" src="shirtBlue.PNG">
            </div>

            <div>
                <label for="size">Size</label>
                <select name="size" v-on:input="event => user.size=event.target.value" required>
                    <option></option>
                    <option>Extra Small </option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>Extra Large</option>
                </select>
            </div>

            <div>
                <label for="quantity">Quantity</label>
                <input name="quantity" type="number" min="1" max="100" v-on:input="event => user.quantity=event.target.value" required>
            </div>

            <div>
                <label for="date">Delivery Date</label>
                <input name="date" type="date" v-on:input="event => user.date=event.target.value" required>
            </div>

            <div id="address">
                <label for="address">Delivery Address</label>
                <br>
                <input id="street1" placeholder="Street Address" required v-model="user.street1">
                <br>
                <input id="street2" placeholder="Street Address Line 2" v-model="user.street2">
                <br>
                <input id="city" placeholder="City" v-model="user.city" required>
                <br>
                <input id="zip" placeholder="Postal / Zip Code" v-model="user.zip" required>
            </div>

            <div>
                <input  id="purchaseButton" type="submit" value="Purchase">
            </div>

        </div>
    </div>

    <div id="info">
        <h3>Information</h3>
        <span>Name:           {{user.nameFirst}} {{ user.nameLast }}</span>
        <br>
        <span>Email:          {{ user.email }}</span>
        <br>
        <span>T-shirt Type:   {{ user.model }}</span>
        <br>
        <span>Size:           {{ user.size }}</span>
        <br>
        <span>Quantity:       {{ user.quantity }}</span>
        <br>
        <span>Delivery Date:  {{ user.date }}</span>
        <br>
        <span>Address:        {{ user.street1 }}</span>
        <br>
        <span>Address 2:      {{ user.street2 }}</span>
        <br>
        <span>City:           {{ user.city }}</span>
        <br>
        <span>Zip:            {{ user.zip }}</span>
    </div>

  </body>
</template>

<script setup>
    import{ref, reactive} from 'vue'

    const user = reactive({
        nameFirst: "",
        nameLast: "",
        email: "",
        model: "",
        size: "",
        quantity: "",
        date: "",
        street1: "",
        street2: "",
        city: "",
        zip: ""
    })

</script>


<style>
#orderForm{
    border-width: 1px;
    border-style: solid;
    border-color: rgb(87, 206, 32);
    border-radius: 20px;
    background-color: rgb(87, 206, 32);
    font-family: Arial, Helvetica, sans-serif;
}

div{
    padding: 6px;
}

#purchaseButton{
    border-width: 1px;
    border-style: solid;
    border-color: rgb(87, 206, 32);
    border-radius: 20px;
    background-color: rgb(87, 206, 32);
}

#address{
    background-color: rgb(232, 232, 232);
}

#form{
    background-color: white;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

}

#info{
    border-width: 1px;
    border-color: black;
    border-style: solid;
    padding: 5px;
    margin-top: 10px;
}

fieldset{
    border-color: white;
}
</style>``