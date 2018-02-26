
   <template>
        <Page>
            <ActionBar :title="$route.path" >
              <NavigationButton text="Go Back"    android.systemIcon="ic_menu_back" @tap="$router.back()" />
            </ActionBar>
            <stack-layout>
                <Label  textWrap="true"
                    style="background-color: green; 
                    font-size: 30; 
                    text-align: center;
                    color: white" 
                    text="Hello from SFC w/Router - PAGE TWO">
                </Label>
            </stack-layout>
        </Page>
   </template>
   
<script>
import Vue from 'nativescript-vue';
import * as platformModule from 'tns-core-modules/platform';

export default {
  created: function() {
    console.log('created page two..');
    console.log(platformModule.device.os)
  },
  data: function() {
    return {};
  },
  methods: {
    onButtonTap: function() {},
  },
};
</script>