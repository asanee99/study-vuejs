<template>
    <div class="col-sm-6 col-md-4">
        <div class="card">
            <div class="card-header bg-info">
                <h3 class="card-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }} )</small>
                </h3>
            </div>
            <div class="card-body">
               <div class="row justify-content-between">
                    <input type="number" 
                    class="col-md-5 form-control float-left" 
                    placeholder="Quantity"
                    v-model="quantity"
                    :class="{danger: insufficentQuantity}">
                    <button 
                    class="float-right col-md-5 btn btn-success "
                    @click="sellStock"
                    :disabled="insufficentQuantity || quantity <= 0"
                    >{{ insufficentQuantity ? 'Not enough Stocks' : 'Sell' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import {mapActions} from 'vuex'

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            insufficentQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scope>
    .card {
        margin-top: 30px;
    }
    .danger {
        border: 1px solid red;
    }
</style>