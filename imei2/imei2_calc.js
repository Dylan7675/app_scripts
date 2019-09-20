function IMEI2(imei1) {

  //only takes digits
  if (/[^0-9-\s]+/.test(imei1)) return "";

  var odd_sum = 0;
  var even_sum = 0;
  var imei2 = '';

  var imei_array = (""+imei1).split("");

  imei_array.pop();

  var last_val = parseInt(imei_array[imei_array.length-1]) + 1;
  imei_array[imei_array.length-1] = last_val;

  for(var i=0; i < imei_array.length; i++){

    if(i % 2 == 0){
      odd_sum += imei_array[i];
      Logger.log(odd_sum);
    }

    else{

      var even_multiplied = imei_array[i] * 2;

      if(even_multiplied > 9){
        even_multiplied -= 9;
      }

      even_sum += even_multiplied;

    }
  }

  var check_sum = even_sum + odd_sum;
  var check_sum_array = (""+check_sum).split("");

  var luhn_num = 10 - check_sum_array[check_sum_array.length-1];

  if(luhn_num == 10){
    luhn_num = 0;
  }

  imei_array.push(luhn_num);

  for(var i=0; i < imei_array.length; i++){
    var imei2 = imei2.concat(String(imei_array[i]));
  }

  return(imei2);

}
