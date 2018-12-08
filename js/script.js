let shipments = [];

function addShipment(shipment){
    shipments.push(shipment);
}

$().ready(function(){
    console.log("ready");
});

$("#shipmentInputs").click(function() {
    alert( "Handler for .click() called." );
  });