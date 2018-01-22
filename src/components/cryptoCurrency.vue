<template>
  <div id="cryptoCurrency">
    <h3 class="text-center"> CryptoCurrency in VuejS</h3>
    <table class="table table-striped table-bordered table-hover table-responsive">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="currency in posts">
          <td>
              {{currency.rank}}
          </td>
          <td class="text-capitalize">
            <a v-bind:href='"https://coinmarketcap.com/currencies/"+currency.id' target="_blank">{{currency.id}} </a>                      
          </td>
          <td>
            ${{currency.price_usd}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  name: 'cryptoCurrency',
  data () {
    return {
       posts: []
    }
  },
  created() {   
    this.fetchCryptocurrencyData();
    this.interval = setInterval(() => this.fetchCryptocurrencyData(), 10 * 1000);
  },
  methods:  {
    fetchCryptocurrencyData: function() {
      Vue.axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=15")
            .then(response => {                
                this.posts = response.data;
            })
            .catch(err => console.log(err));
    }
  }
}
</script>