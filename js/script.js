var shipments = [];

function addShipment(shipment){
    shipments.push(shipment);
}

$().ready(function(){
    console.log("ready");
});


$('#calculate').click(function () {
    console.log("fff");
    window.shipments.forEach(function(element) {
        console.log(element);
      });
    let averageDebt = "";
});
