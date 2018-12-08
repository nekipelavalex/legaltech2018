var shipments = [];

function addShipment(shipment){
    shipments.push(shipment);
}

$().ready(function(){
    console.log("ready");
});


$('#calculatet').click(function () {
    window.shipments.forEach(function(element) {
        console.log(element);
      });
    let averageDebt = "";
});
