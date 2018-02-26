
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
            </stack-layout>
        </Page>
   </template>
   
<script>
import Vue from "nativescript-vue";

import gql from "graphql-tag";

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
    console.log("created page one..");
  },
  data: function() {
    return {
      currency : "BTC",
      rates : '',
    };
  },
  methods: {
    onButtonTap: function() {}
  },
  apollo: {
          // variable to hold results of query..
      rates :   {
        // see the actual query below...
        query: ExchangeRateQuery,
        // this is how we pass in the specific parameter
        // for the query to use
        variables() {
           return { "currency": this.currentCurrency }
        },
        // this is where we track the loading state which 
        // is used to determine if we should show indicator
        // of not
        watchLoading(isLoading, countModifier) {
          // isLoading is a boolean
          // countModifier is either 1 or -1
          console.log(isLoading)
          this.isLoading = isLoading
        }
      },
  }
};
</script>