const express = require('express');
const fs = require('fs');
const app = express();

app.get('/orders',(req, res) => {
fs.readFile('\orders.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  var orders = data.split(',')

for (var i in orders) {
    var order = orders[i].split('\r\n')
    
    for (var j in order) {
        var P = j
        if (j == 1){
        var name = order[j] 
        
        }
        if (j == 2){
            ll = order[j].split(' ')
            var latitude = ll[0]
            var longitude = ll[1]
            
        }
        
        if (j == 3){
            ItemsCount = order[j]
            for (var k = 0; k<ItemsCount; k++){
                var il = order[4+k].split(' ')
                
                var itemName = il[0]
                var count = il[1]
                var price = il[2]
                var totalPrice = (price*count)
                
            }
            ItemsCount = parseInt(ItemsCount)

            var tda = order[ItemsCount+4].split(' ')
            var TotalPrice = tda[0]
            var discount = tda[1]
            var TotalPriceAfterDiscount = tda[2]
            
        }
    }
    var response = {
orders:[
    {
        customer:name,
        address:{
            latitude:latitude,
            longitude:longitude
        },
        items:[
            {
                name:itemName,
                count:count,
                price:price,
                total:totalPrice
            }
        ],
        total:TotalPrice ,
        discount:discount ,
        totalAfterDiscount:TotalPriceAfterDiscount 
    },
],
}

}
jasonres = JSON.stringify(response)
res.send(jasonres)
});





























//end

});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`))

