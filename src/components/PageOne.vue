
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
import Vue from 'nativescript-vue';

export default {
  created: function() {
    console.log('created page one..');
  },
  data: function() {
    return {};
  },
  methods: {
    onButtonTap: function() {},
  },
};
</script>