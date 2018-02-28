
   <template>
        <Page>
            <ActionBar :title="$route.path" />
            <stack-layout>
                <Label  textWrap="true"
                    style="background-color: green; 
                    font-size: 30; 
                    text-align: center;
                    color: white" 
                    text="Hello from SFC w/Router - PAGE ONE">
                </Label>
                <Button text="Button" @tap="$router.push('/page-2')" />
                 <Label class="heading" >1 {{currentCurrency}}</Label>
                  <ListView  for="i in filteredRates" @itemTap="selectedCurrency" style= "height:1250px">
                    <v-template>
                      <FlexboxLayout flexDirection="row"  :key="i.rate">
                      <Label :text="i.currency" style="width: 30%" />
                      <Label :text="i.rate" style="width: 60%" />
                    </FlexboxLayout>
                    </v-template>
                </ListView >
            </stack-layout>
        </Page>
   </template>
   
<script>
import Vue from 'nativescript-vue';
import gql from 'graphql-tag';

const ExchangeRateQuery = gql`
  query rates($currency: String!) {
    rates(currency: $currency) {
      currency
      rates {
        currency
        rate
      }
    }
  }
`;
export default {
  created: function() {
    console.log('created page one..');
  },
  data: function() {
    return {
      currentCurrency: 'BTC',
      rates: '',
    };
  },
  methods: {
    selectedCurrency({ item }) {
      console.log(item);
      this.currentCurrency = item.currency;
    },
  },
  computed: {
    // here we filter the results of the query to get
    // just a subset of the elements
    filteredRates() {
      console.log('in filteredRates');
      if (!this.rates) return [];
      return this.rates.rates.filter(
        ({ currency }) =>
          currency !== this.currentCurrency &&
          ['USD', 'BTC', 'LTC', 'EUR', 'JPY', 'ETH'].indexOf(currency) !== -1
      );
    },
  },
  apollo: {
    // variable to hold results of query..
    rates: {
      // see the actual query below...
      query: ExchangeRateQuery,
      // this is how we pass in the specific parameter
      // for the query to use
      variables() {
        return { currency: this.currentCurrency };
      },
      error(error) {
        console.log(error);
      },
      // this is where we track the loading state which
      // is used to determine if we should show indicator
      // of not
      watchLoading(isLoading, countModifier) {
        // isLoading is a boolean
        // countModifier is either 1 or -1
        console.log(isLoading);
        this.isLoading = isLoading;
      },
    },
  },
};
</script>