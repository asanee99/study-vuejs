<template>
    <div class="col-sm-6 col-md-4">
        <div class="card">
            <div class="card-header bg-success">
                <h3 class="card-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>
            </div>
            <div class="card-body">
               <div class="row justify-content-between">
                    <input type="number" 
                    class="col-md-5 form-control float-left" 
                    placeholder="Quantity"
                    v-model="quantity"
                    :class="{danger: insufficentFunds}">
                    <button 
                    class="float-right col-md-5 btn btn-success "
                    @click="buyStock"
                    :disabled="insufficentFunds || quantity <= 0"
                    >{{ insufficentFunds ? 'Insufficent Funds' : 'Buy' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficentFunds() {
                return this.quantity * this.stock.price > this.funds; 
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                console.log(order);
                this.$store.dispatch('buyStock', order)
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