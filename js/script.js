var app = new Vue({
  el: '#container',
  data:{
    mail: []
  },
  created(){
    for (let i = 0; i < 10; i++) {
    axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((result)=>{
      this.mail.push(result.data.response);
    });
    }
  }
});
