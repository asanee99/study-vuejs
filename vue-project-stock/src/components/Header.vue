<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to='/' class="navbar-brand">Stock Trader</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link to="/portfolio" activeClass="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
                <router-link to="/stocks" activeClass="active" tag="li"><a class="nav-link">Stocks</a></router-link>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#" class="nav-link" @click.prevent="endDay">End Day</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Save & Load
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
                        <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
                    </div>
                </li>
            </ul>
            <strong class="nav navbar-nav navbar-right">Funds: {{ funds | currency }}</strong>
        </div>
    </nav>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        data() {
            return {
               
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                fetchData:  'loadData' 
            }),
            endDay() {
               return this.randomizeStocks(); 
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                }
                this.$http.put('data.json', data);
            },
            loadData() {
                this.fetchData();
            }
        }        
    }
</script>
