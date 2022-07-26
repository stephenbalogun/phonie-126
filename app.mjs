function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here

    function mobileNumberValidation(mobile) {
      //manipulate value so that you can access the first four numbers
      let firstFour = mobile.toString().substring(0, 3);
      firstFour = `0${firstFour}`
  
      switch (Number(firstFour)) {
          case 0703:
          case 0706:
          case 0803:
          case 0806:
          case 0906:
          case 0903:
          case 0810:
          case 0813:
          case 0816:
          case 0814:
              console.log('MTN');         
              break;
  
          case 0809:
          case 0817:
          case 0818:
          case 0909:
              console.log('9-mobie');
              break;
  
          case 0802:
          case 0808:
          case 0812:
          case 0708:
          case 0701:
          case 0902:
          case 0901:
          case 0907:
              console.log("Airtel");
              break;
  
          case 0805:
          case 0807:
          case 0811:
          case 0815:
          case 0705:
          case 0905:
              console.log("Globacome");
              break;
      }
  }
  
  mobileNumberValidation(08165458957);

  
    // pls remove the below and make some magic in here!
    console.log('make magic in here!');
  
    const header = document.querySelector('h2');
    if(header) {
      header.textContent = 'make some magic here!!';
    }
};
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //